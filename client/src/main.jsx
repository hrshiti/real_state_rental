import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './home/HomePage.jsx'
import TopVillas from './home/TopVillas.jsx'
import Footer from './home/Footer.jsx'
import BecomHost from './home/BecomHost.jsx'
import OurRegions from './home/OurRegions.jsx'
import AboutPage from './home/AboutPage.jsx'
import PropSpecialities from './home/PropSpecialities.jsx'
import AllVillas from './All villas/AllVillas.jsx'
import Villa from './Villa.jsx'
import AboutUs from './AboutUs.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'
import Todo from './redux/Todo.jsx'
import { AuthProvider } from './components/context/auth.jsx'
import Logout from './components/Logout.jsx'
import ClientForm from './components/ClientForm.jsx'
import BookingTable from './components/BookingTable.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import Table from './components/Table.jsx'
import ForgetPassword from './components/ForgetPassword.jsx'
import ResetPassword from './components/ResetPassword.jsx'
import { DashboardOverviewProvider } from './components/context/dashboardOverview.jsx'

import UserBookedVillaForm from './components/UserBookedVillaForm.jsx'
import { VillaBookedProvider } from './components/context/villaBooked.jsx'
import VillaManagementPage from './dashboard/VillaManagementPage.jsx'
import VillaBookingForm from './components/VillaBookingForm.jsx'
import Payment from './components/Payment.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/home",
    element: <HomePage />,

  },
  {
    path: "/bookingtable",
    element: <BookingTable />,

  },
  {
    path: "/topvilla",
    element: <TopVillas />,

  },
  {
    path: "/footer",
    element: <Footer />,

  },
  {
    path: "/region",
    element: <OurRegions />,

  },
  {
    path: "/property",
    element: <PropSpecialities />,

  },
  {
    path: "/host",
    element: <BecomHost />,

  },
  {
    path: "/about",
    element: <AboutPage />,

  },
  {
    path: "/villas",
    element: <AllVillas />,

  },
  {
    path: "/villa/:id",
    element: <Villa />,

  },
  {
    path: "/aboutus",
    element: <AboutUs />,

  },
  {
    path: "/login",
    element: <Login />,

  },
  {
    path: "/signup",
    element: <Signup />,

  },
  {
    path: "/counter",
    element: <Todo />,

  },
  {
    path: "/logout",
    element: <Logout />

  },
  {
    path: "/clientform",
    element: <ClientForm />

  },
  {
    path: "/dashboard",
    element: <Dashboard />

  },
  {
    path: "/table",
    element: <Table />

  },
  // {
  //   path: "/reset",
  //   element: <ResetPassword />

  // },
  {
    path: "/forget",
    element: <ForgetPassword />

  },
  {
    path: "/reset/:token",
    element: <ResetPassword />

  },
  {
    path: "/villaBookingForm/",
    element: <VillaBookingForm />

  },
  {
    path: "/villaBookedForm",
    element: <VillaBookingForm />

  },
  {
    path: "/userBookedVillaForm",
    element: <UserBookedVillaForm />

  },
  {
    path: "/villamanagementpage",
    element: <VillaManagementPage />

  },
  {
    path: "/payment",
    element: <Payment />

  },
]);
createRoot(document.getElementById('root')).render(
  <AuthProvider>

<DashboardOverviewProvider>
  <VillaBookedProvider>
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
    </VillaBookedProvider>
</DashboardOverviewProvider>
  </AuthProvider>
);