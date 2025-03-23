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
import Logout from './components/logout.jsx'
import ClientForm from './components/ClientForm.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import Table from './components/Table.jsx'


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
    path: "/villa",
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
]);
createRoot(document.getElementById('root')).render(
  <AuthProvider>

    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  </AuthProvider>
);