"use client";;
import * as React from "react";
import { useState } from "react";
import {
  Box,
  Avatar,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  ListItemText,
} from "@mui/material";
import ArrowDropDownRounded from "@mui/icons-material/ArrowDropDownRounded";
import Link from "next/link";
import { useKcAuth } from "@/hooks/useKcAuth";
import { styles } from "@/config/styles";
import languageDetector from "@/utils/languageDetector";
import { Trans } from "react-i18next";
import { AccountBoxRounded, LogoutRounded } from "@mui/icons-material";

type Props = {
  userInfo: any;
};

export default function AccountDropDownButton({ userInfo }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { kc } = useKcAuth();

  console.log(userInfo);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant="text"
        sx={{
          height: 32,
          color: "#fff",
          px: 1,
          gap: 1,
          "&:hover": { background: "rgba(255,255,255,0.12)" },
        }}
        endIcon={<ArrowDropDownRounded sx={{ color: "#fff" }} />}
      >
        <Avatar
          src={userInfo.pictureLink ?? undefined}
          sx={{
            width: 24,
            height: 24,
            fontSize: 12,
            bgcolor: "rgba(255,255,255,0.2)",
          }}
        ></Avatar>
        <Box
          component="span"
          sx={{
            fontSize: 13,
            maxWidth: 160,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            ...styles.rtlStyle(languageDetector(userInfo.displayName)),
          }}
        >
          {userInfo.displayName}
        </Box>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { minWidth: "180px" } }}
      >
        <MenuItem
          dense
          component={Link}
          href={process.env.NEXT_PUBLIC_LOCAL_BASE_URL + "user/account"}
          onClick={handleClose}
        >
          <ListItemIcon>
            <AccountBoxRounded fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Trans i18nKey="common.account" />
          </ListItemText>
        </MenuItem>

        <Divider />
        <MenuItem
          dense
          onClick={() => {
            kc.logout({});
          }}
        >
          <ListItemIcon>
            <LogoutRounded fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Trans i18nKey="common.signout" />
          </ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
