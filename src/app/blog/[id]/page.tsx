"use client"

import {useEffect, useMemo, useState} from "react";
import "@/config/i18n";
import Box from "@mui/material/Box";
import * as data from "@/config/db-Article";
import i18n from "i18next";
import {BlogMaker} from "@/utils/blogMaker";
import {useParams} from "next/navigation";
import { appWithTranslation } from 'next-i18next';

const Article = () => {
    const {id} = useParams()
    const [article, setArticle] = useState<any>({})
    const currentLang = useMemo(()=>{
        return i18n.language;
    },[i18n.language])

        useEffect(()=>{
            if(id){
                const articles = Object.values(data).filter(item => item.id == id)
                const selectedArticles = articles.find(article => article.lang == currentLang)
                setArticle(selectedArticles)
            }
        },[id])

    return (
        <Box sx={{maxWidth: "824px", margin: "auto", mt: "80px", px: {xs: 1, sm : 3, md: 13}, }}>
            {article?.content?.map((item: any) => {
                const {topTitle, mainTitle, subTitle, infoBox, image} = item
                const listOfItems = {topTitle, mainTitle, subTitle, infoBox, image}
                return BlogMaker(listOfItems)
            })}
            <Box sx={{ px: {xs: 1, sm : 3, md: 13}, mb: "40px",fontWeight: "regular"}}>
                {article?.content?.map((item: any) => {
                 const {title, p, ul, table, pBold, ulBold} = item
                 const listOfItems = {title, p, ul, table, pBold, ulBold}
                 return BlogMaker(listOfItems)
                })}
            </Box>
        </Box>
    );
};

export default appWithTranslation(Article);