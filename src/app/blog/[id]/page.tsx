"use client"

import { useMemo } from "react";
import "@/config/i18n";
import Box from "@mui/material/Box";
import { facebookFA , facebookEN } from "@/config/db-Article";
import i18n from "i18next";
import {pageMaker} from "@/utils/pageMaker";

const Article = () => {

    const currentLang = useMemo(()=>{
        return i18n.language;
    },[i18n.language])

    const articles = currentLang === 'fa' ? facebookFA : facebookEN;

    return (
        <Box sx={{maxWidth: "824px", margin: "auto", mt: "80px", px: {xs: 1, sm : 3, md: 13}, }}>
            {articles.content.map(item => {
                const {topTitle, mainTitle, subTitle, infoBox, image} = item
                const listOfItems = {topTitle, mainTitle, subTitle, infoBox, image}
                return pageMaker(listOfItems)
            })}
            <Box sx={{ px: {xs: 1, sm : 3, md: 13}, mb: "40px"}}>
                {articles.content.map(item => {
                 const {title, p, ul, table, pb} = item
                 const listOfItems = {title, p, ul, table, pb}
                 return pageMaker(listOfItems)
                })}
            </Box>
        </Box>
    );
};

export default Article;