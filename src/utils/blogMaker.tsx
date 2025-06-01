import React from "react";
import Typography from "@mui/material/Typography";
import {theme} from "@/config/theme";
import {styles} from "@/config/styles";
import {Divider, List, ListItem, ListItemText, Paper, TableContainer} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from "@mui/material/Box";


const typeRenderMap: Record<string, (value: any) => JSX.Element> = {
    title: (value) => (
        <Typography sx={{...theme.typography.semiBoldXLarge, color: "#000", mb: 1}}>{value}</Typography>
    ),
    p: (value) => (
        <Typography sx={{...theme.typography.semiBoldMedium, color: "#2B333B", mb: 2, fontWeight: "regular", textAlign: "justify"}}>{value}</Typography>
    ),
    topTitle: (value) => (
        <Typography sx={{...theme.typography.semiBoldXLarge, color: theme.palette.primary.main}}>
            {value}
        </Typography>
    ),
    mainTitle: (value) => (
        <Typography sx={{
            ...theme.typography.headlineSmall,
            mt: 2,
            fontSize: {xs: "1.6rem", sm: "3rem"},
            fontWeight: "bold",
            lineHeight: "auto"
        }}>
            {value}
        </Typography>
    ),
    subTitle: (value) => (
        <Typography sx={{
            ...theme.typography.semiBoldMedium,
            color: "#3D4D5C80",
            mt: 2,
        }}>
            {value}
        </Typography>
    ),
    ul: (value) => (
        <List disablePadding sx={{listStyleType: 'disc', paddingInlineStart: 3, mb: 2}}>
            {value.map((itemText: any, i: number) => (
                <ListItem key={i} sx={{display: 'list-item', textAlign: "justify"}} disablePadding>
                    <ListItemText primaryTypographyProps={{
                        sx: {
                            all: "unset",
                            ...theme.typography.semiBoldMedium,
                            color: "#2B333B",
                            textAlign: "justify"
                        }
                    }}>{itemText.li}</ListItemText>
                </ListItem>
            ))}
        </List>
    ),
    ulBold: (value) => (
        <List disablePadding sx={{listStyleType: 'disc', paddingInlineStart: 3, mb: 2}}>
            {value.map((itemText: any, index: number) => {
                const {li} = itemText;
                const colonIndex = li.indexOf(':');
                const periodIndex = li.indexOf('.');
                let splitIndex = -1;

                if (colonIndex !== -1 && (periodIndex === -1 || colonIndex < periodIndex)) {
                    splitIndex = colonIndex;
                } else if (periodIndex !== -1) {
                    splitIndex = periodIndex;
                }

                const hasSplit = splitIndex !== -1;
                const boldText = hasSplit ? li.slice(0, splitIndex) : li;
                const restText = hasSplit ? li.slice(splitIndex) : '';

                return (
                    <ListItem key={index} sx={{display: 'list-item'}} disablePadding>
                        <ListItemText
                            primaryTypographyProps={{
                                component: "span",
                                sx: {
                                    all: "unset",
                                    ...theme.typography.semiBoldMedium,
                                    color: "#2B333B",
                                    fontWeight: "regular",
                                    textAlign: "justify"
                                },
                            }}
                        >
                            <Box component="span" fontWeight="bold">{boldText}</Box>
                            {restText}
                        </ListItemText>
                    </ListItem>
                );
            })}
        </List>
    ),
    table: (value) => {
        const {thead, tbody} = value;
        return (
            <TableContainer sx={{mb: 2}} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {thead.map((head: any, index: number) => (
                                <TableCell key={index} sx={{textAlign: "justify"}} >
                                    <strong>{head}</strong>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tbody.map((row: any, rowIndex: number) => (
                            <TableRow key={rowIndex}>
                                {row.map((cell: any, cellIndex: number) => (
                                    <TableCell key={cellIndex} sx={{textAlign: "justify"}}>
                                        {cell}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    },
    pBold: (value) => (
        <Typography
            sx={{...theme.typography.semiBoldMedium, color: "#2B333B", mb: 2, fontWeight: "bold", textAlign: "justify"}}>{value}</Typography>
    ),
    infoBox: (value) => (
        <Box sx={{...styles.centerVH, my: 2, py: 2}}>
            {value.map((item: any, index: number) => (
                <React.Fragment key={index}>
                    {index !== 0 && (
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{borderColor: theme.palette.primary.main, mx: 1}}
                        />
                    )}
                    <Box sx={{px: "24px"}}>
                        <Typography sx={{...theme.typography.bodyMedium, color: "#3D4D5C80"}}>{item.title}</Typography>
                        <Typography sx={{...theme.typography.semiBoldMedium, color: "#6C8093"}}>{item.subTitle}</Typography>
                    </Box>
                </React.Fragment>
            ))}
        </Box>
    ),
    image: (value) => (
        <Box
            component={"img"}
            src={value}
            sx={{
                borderRadius: 2,
                mb: 4,
                width: {xs: "90%", sm: "100%"}
            }}
        />
    ),
}

export const BlogMaker = (item: any) => {
    const definedEntries = Object.entries(item).filter(([_, value]) => value !== undefined);

    if (definedEntries.length === 0) return null;

    const [typeKey, value] = definedEntries[0];

    const Renderer = typeRenderMap[typeKey];

    if (Renderer) {
        return Renderer(value);
    }

    return null;
}

