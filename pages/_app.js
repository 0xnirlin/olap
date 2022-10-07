import BoardNav from '../components/BoardNav'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import React from 'react';


function MyApp({ Component, pageProps:{session,...pageProps},...appProps }) {
  const isLayoutNeeded = [`/`].includes(appProps.router.pathname);

  const LayoutComponent = isLayoutNeeded ? React.Fragment : BoardNav  ;
  return(
    <SessionProvider session={session}>

  <div className = {isLayoutNeeded?"" : 'flex flex-row '}>
    
      <LayoutComponent></LayoutComponent>
    
    <Component {...pageProps} />


  </div> 
  </SessionProvider>)
}

export default MyApp
