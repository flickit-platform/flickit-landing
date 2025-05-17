"use client";

import {useEffect, useState} from "react";
import {getRedirectUrl} from "@/utils/constants";
import Footer from "@/components/homePage/footer";
import "../config/i18n";
import HeroSection from "@/components/homePage/heroSection";
import Cards from "@/components/homePage/cards";

export default function Home() {
    const [setRedirectUrl] = useState('');

    useEffect(() => {
        setRedirectUrl(getRedirectUrl());
    }, []);

    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    );
}
