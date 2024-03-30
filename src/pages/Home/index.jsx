import React, {useEffect} from 'react'
import Hero from "@/pages/Home/components/Hero";
import TopBar from "@/pages/Home/components/TopBar";
import Menu from "@/pages/Home/components/Menu";
import SecondMenu from "@/pages/Home/components/SecondMenu";
import AppetizerMenu from "@/pages/Home/components/AppetizerMenu";
import FeaturedDish from "@/pages/Home/components/FeaturedDish";

function Home() {
    useEffect(() => {
        // Webflow.require('ix2').init();
    }, []);
    return <>
        <TopBar />
        <Hero />
        <FeaturedDish />
        <Menu />
        <AppetizerMenu />
        <SecondMenu />
    </>
}

export default Home
