"use client"

import React from 'react';
import "@/config/i18n";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Trans} from "react-i18next";
import {theme} from "@/config/theme";
import {styles} from "@/config/styles";
import {Divider, List, ListItem, ListItemText, Paper, TableContainer} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from "@/config/db/article.json"

const mainBox = [
    {title: "Published on", subTitle: "Mar 4, 2020"},
    {title: "Read time", subTitle: "8 min"},
    {title: "Category", subTitle: "App Development"}
]

const rows = [
    { metric: 'Lines of code (iOS)', before: '1.7 M', desired: '< 500 k', gap: '-1.2 M' },
    { metric: 'Unique view controllers', before: '40', desired: '< 10', gap: '-30' },
    { metric: 'Cold-start time', before: '2080 ms', desired: '1000 ms', gap: '-1080 ms' },
    { metric: 'Binary size', before: '130 MB', desired: '80 MB', gap: '-50 MB' },
];

const Article = (props: any) => {
    const {
        TopTitle = "How Facebook Messenger Cut Technical Debt to Boost Performance",
        subTitle = "Facebook Messenger, with over a billion users worldwide, became an essential communication tool—but behind the scenes, it was struggling with a growing problem common in fast-evolving software: technical debt",
        img = "/articleTop.svg"
    } = props

    const makeSentens = (item: any) => {
        const {title, p, ul, table} = item

        if (title) {
            return <Typography sx={{...theme.typography.semiBoldXLarge, color: "#000", mb: 1}}>{title}</Typography>
        } else if (p) {
            return <Typography sx={{...theme.typography.semiBoldMedium, color: "#2B333B", mb: 2}}>{p}</Typography>
        } else if (ul) {
            return <List  disablePadding sx={{listStyleType: 'disc', paddingInlineStart: 3, mb: 2 }}>
                {ul.map((itemText: any)=>{
                    const { li } = itemText
                    return (
                        <ListItem  sx={{display: 'list-item'}} disablePadding>
                            <ListItemText primaryTypographyProps={{sx:{ all:"unset", ...theme.typography.semiBoldMedium, color: "#2B333B"}}}  >{li}</ListItemText>
                        </ListItem>
                    )
                })}
            </List>

        }else if(table){
const { thead, tbody } = table
            return (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {thead.map((head: any, index: number) => (
                                    <TableCell key={index} align={index === 0 ? "left" : "right"}>
                                        <strong>{head}</strong>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tbody.map((row: any, rowIndex: number) => (
                                <TableRow key={rowIndex}>
                                    {row.map((cell: any, cellIndex: number) => (
                                        <TableCell key={cellIndex} align={cellIndex === 0 ? "left" : "right"}>
                                            {cell}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
    }

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
            <Box sx={{...styles.centerVH, my: 2, py: 2}}>
                {mainBox.map((item, index) => {
                    return (
                        <>
                            {index !== 0 && (
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{borderColor: theme.palette.primary.main, mx: 1}}
                                />
                            )}
                            <Box sx={{px: "24px"}}>
                                <Typography
                                    sx={{...theme.typography.bodyMedium, color: "#3D4D5C80"}}>{item.title}</Typography>
                                <Typography
                                    sx={{
                                        ...theme.typography.semiBoldMedium,
                                        color: "#6C8093"
                                    }}>{item.subTitle}</Typography>
                            </Box>
                        </>
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
            <Box sx={{px: 13}}>
                {data.facebookEn.content.map(item => {
                    return makeSentens(item)
                })}
            </Box>
        </Box>
    );
};

export default Article;