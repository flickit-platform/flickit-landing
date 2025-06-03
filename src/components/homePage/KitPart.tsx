import React from "react";
import { Box, Typography, Chip, Button, Tooltip } from "@mui/material";
import { Trans } from "react-i18next";
import { theme } from "@/config/theme";
import Link from "next/link";
import { styles } from "@/config/styles";
import WaitingListDialog from "../common/dialogs/WaitingListDialog";
import useDialog from "@/utils/useDialog";
import { t } from "i18next";

interface Props {
  imageUrl: string;
  chipLabelKey: string;
  titleKey: string;
  descKey: string;
  caseStudyDescKey: string;
  caseStudyLogo: string;
  id: string;
  waitList?: boolean;
  dialogProps?: any;
  free: boolean;
}

const IMAGE_HEIGHT = 160;
const LOGO_SIZE = 24;

const KitPart = ({
  imageUrl,
  chipLabelKey,
  titleKey,
  descKey,
  caseStudyDescKey,
  caseStudyLogo,
  id,
  waitList,
  free,
}: Props) => {
  const dialogProps = useDialog();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {free && (
        <Box
          sx={{
            position: "absolute",
            top: "-30px",
            [theme.direction == "rtl" ? "left" : "right"]: "-15px",
            width: "65px",
            height: "auto",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component={"img"}
            src={"/notice.svg"}
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
          <Typography
            sx={{
              ...theme.typography.labelLarge,
              color: theme.palette.secondary.main,
              position: "absolute",
            }}
          >
            <Trans i18nKey={"common.free"} />
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          position: "relative",
          p: 2,
          pt: `${IMAGE_HEIGHT / 2}px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "12px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          bgcolor: "background.paper",
          maxWidth: "100%",
          minWidth: 0,
          overflow: "visible",
          height: "100%",
          textDecoration: "none",
          color: "unset",
          flexGrow: 1,
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt="kit image"
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: `${IMAGE_HEIGHT}px`,
            width: "auto",
            maxWidth: "60%",
            objectFit: "contain",
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: "100%",
            mt: 3,
            gap: 1,
            minHeight: "180px",
          }}
        >
          <Chip
            sx={{
              ...theme.typography.labelMedium,
              background: "#EAF2FB",
              borderColor: "#87ACD2 !important",
              mb: 1,
              mx: "auto",
              borderRadius: "8px",
            }}
            label={<Trans i18nKey={chipLabelKey} />}
            variant="outlined"
            color="primary"
            size="small"
          />
          <Typography variant="titleLarge" textAlign="center" sx={{ mb: 1 }}>
            <Trans i18nKey={titleKey} />
          </Typography>
          <Typography
            variant="bodyLarge"
            textAlign="justify"
            color="#2B333B"
            sx={{
              mb: 2,
              flex: 1,
              minHeight: "60px",
              display: "flex",
              alignItems: "flex-start",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            <Trans i18nKey={descKey} />
          </Typography>
        </Box>
        {!waitList ? (
          <Box
            sx={{
              width: "100%",
              mt: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              component={Link}
              href={"https://app.flickit.org/assessment-kits/" + id}
            >
              <Trans i18nKey="main.moreAboutThisKit" />
            </Button>
            <Button
              variant="contained"
              fullWidth
              component={Link}
              href={
                "https://stage.flickit.org/assessment-kits/" +
                id +
                `#createAssessment?id=${id}&title=${encodeURIComponent("")}`
              }
            >
              <Trans i18nKey="main.createAssessment" />
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              width: "100%",
              mt: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              fullWidth
              onClick={() => dialogProps.openDialog({ open: true })}
            >
              <Trans i18nKey="main.joinTheWaitlist" />
            </Button>
          </Box>
        )}
        <Box
          sx={{
            visibility: id == "385" ? "hidden" : "unset",
            position: "absolute",
            left: "50%",
            bottom: "-46px",
            transform: "translateX(-50%)",
            width: 0,
            height: "46px",
            borderRight: "1px dashed rgba(36, 102, 168, 0.5)",
            zIndex: 3,
          }}
        />
      </Box>
      <Box
        sx={{
          visibility: id == "385" ? "hidden" : "unset",
          mt: 6,
          position: "relative",
          bgcolor: "#F0F4F8",
          borderRadius: "0 0 20px 20px",
          p: 3,
          pt: 2.5,
          pb: 2,
          ...styles.centerCH,
          minHeight: "fit-content",
          flexGrow: 0,
        }}
        mb={{ xs: 18, lg: 2 }}
      >
        {caseStudyLogo && (
          <Box
            component="img"
            src={caseStudyLogo}
            alt="logo"
            sx={{
              position: "absolute",
              left: `-${LOGO_SIZE / 2}px`,
              top: `-${LOGO_SIZE / 2}px`,
              width: `${LOGO_SIZE}px`,
              height: `${LOGO_SIZE}px`,
              borderRadius: "50%",
              zIndex: 2,
            }}
          />
        )}

        <Typography variant="labelSmall" color="#97A6B8" mb={0.5}>
          <Trans i18nKey="main.globalCaseStudy" />
        </Typography>
        <Box
          sx={{
            textOverflow: "ellipsis",
            width: "100%",
            minHeight: "60px",
            maxHeight: "80px",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="semiBoldMedium"
            color="#2466A8"
            textAlign="center"
            sx={{
              mb: 2,
              whiteSpace: "pre-wrap",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            <Trans i18nKey={caseStudyDescKey} />
          </Typography>
        </Box>
        <Button
          target="_blank"
          disabled={id !== "386"}
          component={Link}
          href={`/blog/${id}`}
          variant="outlined"
          size="small"
        >
          <Trans i18nKey="main.learnMore" />
        </Button>
      </Box>
      <WaitingListDialog
        {...dialogProps}
        kitTitle={t(titleKey, { lng: "en" })}
      />
    </Box>
  );
};

export default KitPart;
