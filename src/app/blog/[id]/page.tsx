"use client"

import React from 'react';
import "@/config/i18n";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Trans} from "react-i18next";
import {theme} from "@/config/theme";
import {styles} from "@/config/styles";
import {Divider, List, ListItem, ListItemText} from "@mui/material";
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

            return (
              <>
                    {table.map((tab: any)=>{
                        return (
                            <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    {tab?.thead?.tr.map((i: any)=>{
                                        const {th} = i
                                        return (
                                            <TableCell key={th}>{th}</TableCell>
                                        )
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tab?.tbody?.map((i: any)=>{

                                    const {tr} = i
                                    return (
                                        <TableRow

                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            {tr.map((item: any) =>{
                                                const {td} = item
                                                return (
                                                    <TableCell align="left">{td}</TableCell>
                                                )
                                            })}
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                            </Table>
                        )
                    })}
              </>
            )



            // return <Table size="small" aria-label="a dense table">
            //     <TableHead>
            //         <TableRow>
            //             {table.thead.tr.map(i=>{
            //                 return (
            //                     <TableCell>{i}</TableCell>
            //                 )
            //             })}
            //         </TableRow>
            //     </TableHead>
            //     <TableBody>
            //         {rows.map((row) => (
            //             <TableRow
            //                 key={row.name}
            //                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            //             >
            //                 <TableCell component="th" scope="row">
            //                     {row.name}
            //                 </TableCell>
            //                 <TableCell align="right">{row.calories}</TableCell>
            //                 <TableCell align="right">{row.fat}</TableCell>
            //                 <TableCell align="right">{row.carbs}</TableCell>
            //                 <TableCell align="right">{row.protein}</TableCell>
            //             </TableRow>
            //         ))}
            //     </TableBody>
            // </Table>
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