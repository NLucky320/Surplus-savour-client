import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import 'react-tooltip/dist/react-tooltip.css'
import 'react-tooltip/dist/react-tooltip.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { Tooltip } from 'react-tooltip'
// import Lottie from "lottie-react";
// import { Fade } from "react-awesome-reveal";
AOS.init();
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
         <HelmetProvider>
        <Toaster></Toaster>
         <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
      </QueryClientProvider>
        
      </HelmetProvider>
 </FirebaseProvider>

  </React.StrictMode>,
)