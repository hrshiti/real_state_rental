import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../home/Footer';
import VillasCard from '../components/VillasCard';
import FilterBox from '../components/FilterBox';
import { Link, useNavigate } from 'react-router-dom';
import { fetchVillas } from '../redux/slices/villasSlice';

const AllVillas = () => {
  const dispatch = useDispatch();
 

  const navigate= useNavigate()
  const { data } = useSelector((state) => state.villas);
  const { villas, loading, error } = useSelector((state) => state.villas);

 const clickHandle = () => {
  navigate("/villa")
  }

  useEffect(() => {
    dispatch(fetchVillas());
  }, [dispatch]);

  return (
    <>
      <div className="relative w-screen min-h-screen overflow-x-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-[url('/allVillaBg.png')] bg-cover bg-center filter blur-[120px] sm:blur-[200px] lg:blur-[250px] z-[-1]"></div>

        {/* Content Layer */}
        <div className="relative z-10">
          <Navbar />

          {/* Main Container */}
          <div className="w-screen max-w-none mx-0 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="w-full mb-8">
              <h1 className="text-3xl text-center sm:text-4xl font-bold">All Villas</h1>
              <p className="text-lg text-center text-gray-600 mt-2">124 results</p>
              <FilterBox />
            </div>

            {/* Villas Grid */}
           
            <div className=" w-screen  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 mb-16">
              {Array.isArray(data) && data.length > 0 ? (
                data.map((item, index) => (
                  <VillasCard
                    onClick={clickHandle}
                    key={index}
                    img_src={item.image}
                    alt_text={item.name}
                    span1={item.category}
                    span2="Mountains"
                    heading={item.name}
                    icon_span={`${item.price} guests`}
                    icon2_span="460m2"
                    icon_span2="8 bedrooms"
                    icon2_span2="4 bathrooms"
                  />
                ))
              ) : (
                <p>Loading villas...</p>
              )}
            </div>
            
           

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllVillas;
