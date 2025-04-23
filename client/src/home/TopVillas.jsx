import React from 'react';
import VillasCard from '../components/VillasCard';

const TopVillas = () => {
  return (
    <div className="w-screen h-full bg-[#F8EFE2] flex flex-col justify-center text-black items-center   ">
      <div className="flex flex-col gap-12 w-full max-w-[1536px] text-center">
        {/* Heading Section */}
        <div className="w-full max-w-[1257px] mx-auto mt-16">
          <h1 className="w-full max-w-[596px] h-[72px] font-[Rufina] font-bold text-6xl text-[#181d24] mx-auto  sm:text-5xl md:text-6xl">
            Top pick villas
          </h1>
          <p className="w-full max-w-[757px] h-[48px] font-[Raleway] font-medium text-base text-[#181d24] mx-auto pt-[35px]  sm:text-base md:text-lg">
            Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20 gap-10 ml-6 pt-[44px]">
          
          <VillasCard 
            img_src="/villas1.png"
            alt_text="image"
            span1="Italy ."
            span2="Mountains"
            heading="Villa Makarska"
            icon_span="8 guests"
            icon2_span="460m2"
            icon_span2="8 bedrooms"
            icon2_span2="4 bathrooms"
          />
          <VillasCard 
            img_src="/villa2.png"
            alt_text="image"
            span1="Greece ."
            span2="Seaside"
            heading="Villa Roxane"
            icon_span="11 guests"
            icon2_span="120m2"
            icon_span2="6 bedrooms"
            icon2_span2="25 bathrooms"
          />
          <VillasCard 
            img_src="/villa01.png"
            alt_text="image"
            span1="Greece ."
            span2="Seaside"
            heading="Aphrodite"
            icon_span="12 guests"
            icon2_span="460m2"
            icon_span2="6 bedrooms"
            icon2_span2="5 bathrooms"
          />
        </div>
      </div>
    </div>
  );
};

export default TopVillas;
