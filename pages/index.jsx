import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Lottie from "react-lottie";
import Nav from "../components/Nav"
import * as animationData from '../public/29509-drag-and-drop.json'
import Header from '../components/Header';
import Features from '../components/Features';
import Lined from '../components/Lined';
import Footer from '../components/Footer';
import CTA from '../components/CTA';



export default function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

        // here is where we will declare lottie animation
        // "animation" is what we imported before animationData: animation,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };
  
     return (
        <React.Fragment>
            <Nav></Nav>
            <Header></Header>
            <Features></Features>
            <Lined></Lined>
            <CTA></CTA>
            <Footer></Footer>
            
        </React.Fragment>
     );
}
