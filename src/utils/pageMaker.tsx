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

export const pageMaker = (item: any) => {
    const {title, p, ul, table, pb, topTitle, mainTitle, subTitle, infoBox, image} = item

    if (title) {
        return <Typography component={"h2"}
                           sx={{...theme.typography.semiBoldXLarge, color: "#000", mb: 1}}>{title}</Typography>
    } else if (p) {
        return <Typography sx={{...theme.typography.semiBoldMedium, color: "#2B333B", mb: 2}}>{p}</Typography>
    } else if (topTitle) {
        return <Typography sx={{...theme.typography.semiBoldXLarge, color: theme.palette.primary.main}}>
            {topTitle}
        </Typography>
    } else if (mainTitle) {
        return <Typography sx={{
            ...theme.typography.headlineSmall,
            mt: 2,
            fontSize: {xs: "1.6rem", sm: "3rem"},
            fontWeight: "bold",
            lineHeight: "auto"
        }}>
            {mainTitle}
        </Typography>
    } else if (subTitle) {
        return <Typography sx={{
            ...theme.typography.semiBoldMedium,
            color: "#3D4D5C80",
            mt: 2,
        }}>
            {subTitle}
        </Typography>
    } else if (ul) {
        return <List disablePadding sx={{listStyleType: 'disc', paddingInlineStart: 3, mb: 2}}>
            {ul.map((itemText: any) => {
                const {li} = itemText
                return (
                    <ListItem sx={{display: 'list-item'}} disablePadding>
                        <ListItemText primaryTypographyProps={{
                            sx: {
                                all: "unset", ...theme.typography.semiBoldMedium,
                                color: "#2B333B"
                            }
                        }}>{li}</ListItemText>
                    </ListItem>
                )
            })}
        </List>
    } else if (table) {
        const {thead, tbody} = table
        return (
            <TableContainer sx={{mb: 2}} component={Paper}>
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
    } else if (pb) {
        return <Typography
            sx={{...theme.typography.semiBoldMedium, color: "#2B333B", mb: 2, fontWeight: "bold"}}>{pb}</Typography>
    } else if (infoBox) {
        return <Box sx={{...styles.centerVH, my: 2, py: 2}}>
            {infoBox.map((item: any, index: number) => {
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
    } else if (image) {
        return <Box
            component={"img"}
            src={image}
            sx={{
                borderRadius: 2,
                mb: 4,
                width: {xs:  "90%", sm: "100%"}
            }}
        >
        </Box>
    }
}
