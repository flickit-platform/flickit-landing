"use client"

import React from 'react';
import "@/config/i18n";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Trans} from "react-i18next";
import {theme} from "@/config/theme";

const mainBox = [
    {title: "Published on", subTitle: "Mar 4, 2020"},
    {title: "Read time", subTitle: "8 min"},
    {title: "Category", subTitle: "App Development"}
]

const Article = (props: any) => {
    const {
        TopTitle = "How Facebook Messenger Cut Technical Debt to Boost Performance",
        subTitle = "Facebook Messenger, with over a billion users worldwide, became an essential communication tool—but behind the scenes, it was struggling with a growing problem common in fast-evolving software: technical debt",
        img ="/articleTop.svg"
    } = props

    return (
        <Box sx={{maxWidth: "824px", margin: "auto", mt: "40px"}}>
            <Typography sx={{...theme.typography.semiBoldXLarge, color: theme.palette.primary.main}}>
                <Trans i18nKey={"globalCaseStudy"}/>
            </Typography>
            <Typography sx={{
                ...theme.typography.headlineSmall,
                mt: 2,
                fontSize: "3rem",
                fontWeight: "bold",
                lineHeight: "auto"
            }}>
                {TopTitle}
            </Typography>
            <Typography sx={{
                ...theme.typography.semiBoldMedium,
                color: "#3D4D5C80",
                mt: 2,
            }}>
                {subTitle}
            </Typography>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", my: 2, py: 2}}>
                {mainBox.map((item, index) => {
                    return (
                        <Box sx={{px: "24px", borderInline: index == 1 ? `1px solid ${theme.palette.primary.main}` : "" }}>
                            <Typography
                                sx={{...theme.typography.bodyMedium, color: "#3D4D5C80"}}>{item.title}</Typography>
                            <Typography
                                sx={{...theme.typography.semiBoldMedium, color: "#6C8093"}}>{item.subTitle}</Typography>
                        </Box>
                    )
                })}
            </Box>
            <Box
            component={"img"}
            src={img}
            sx={{
                borderRadius: 2,
                mb: 2
            }}
            >

            </Box>
        </Box>
    );
};

export default Article;