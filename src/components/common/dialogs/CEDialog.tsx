import { PropsWithChildren } from "react";
import { styles } from "@/config/Styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import useScreenResize from "@/utils/UseScreenResize";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions, { DialogActionsProps } from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import { Trans } from "react-i18next";
import { t } from "i18next";
import Typography from "@mui/material/Typography";
import { theme } from "@/config/Theme";
import Box from "@mui/material/Box";

interface ICEDialogProps extends Omit<DialogProps, "title"> {
  closeDialog?: () => void;
  title: JSX.Element | null;
  style?: any;
  titleStyle?: any;
  contentStyle?: any;
}
type TDialogContextType = "update" | "create" | "convert";
export const CEDialog = (props: PropsWithChildren<ICEDialogProps>) => {
  const {
    closeDialog,
    title,
    children,
    style,
    titleStyle,
    contentStyle,
    ...rest
  } = props;
  const fullScreen = useScreenResize("sm");

  return (
    <Dialog
      onClose={closeDialog}
      fullWidth
      maxWidth="md"
      data-testid="delete-confirmation-modal"
      fullScreen={fullScreen}
      {...rest}
    >
      {title && (
        <DialogTitle
          textTransform={"uppercase"}
          sx={{
            ...styles.centerV,
            ...titleStyle,
            bgcolor: theme.palette.primary.main,
            color: "#fff",
          }}
        >
          {title}
        </DialogTitle>
      )}
      <DialogContent
        style={style}
        sx={{ display: "flex", flexDirection: "column", ...contentStyle }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

interface ICEDialogActionsProps extends PropsWithChildren<DialogActionsProps> {
  loading?: boolean;
  closeDialog?: () => void;
  onClose?: () => void;
  type?: {} | TDialogContextType;
  submitButtonLabel?: string | null;
  submitAndViewButtonLabel?: string;
  hasViewBtn?: boolean;
  hideSubmitButton?: boolean;
  hideCancelButton?: boolean;
  onSubmit?: (e: any, shouldView?: boolean) => any;
  onBack?: () => void;
  hasBackBtn?: boolean;
  backType?: any;
  cancelLabel?: string | null;
  disablePrimaryButton?: boolean;
  contactSection?: {
    id: number;
    icon: string;
    bg: string;
    link: { WhatsappLink: string; WhatsappWebLink: string };
  }[];
}

export const CEDialogActions = (props: ICEDialogActionsProps) => {
  const {
    type,
    loading,
    closeDialog,
    onClose = closeDialog,
    onSubmit,
    onBack,
    hasBackBtn,
    hasViewBtn,
    hideSubmitButton = false,
    hideCancelButton = false,
    submitButtonLabel = type === "update" ? t("update") : t("create"),
    cancelLabel = "cancel",
    submitAndViewButtonLabel,
    backType = "contained",
    disablePrimaryButton = false,
    contactSection,
    children,
  } = props;
  const fullScreen = useScreenResize("sm");
  if (!onClose) {
    throw new Error("onClose or closeDialog not provided for CEDialogActions");
  }
  const isMobile = useScreenResize("sm");

  const openChat = (link: any) => {
    if (isMobile) {
      window.location.href = link.WhatsappLink;
    } else {
      window.open(link.WhatsappWebLink, "_blank");
    }
  };

  return (
    <DialogActions
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 4, sm: "unset" },
        marginTop: fullScreen ? "auto" : 4,
      }}
    >
      {contactSection?.length && (
        <Box sx={{ display: "flex", alignItems: "center", mr: "auto", gap: 2 }}>
          <Typography
            sx={{
              ...theme.typography.semiBoldLarge,
              color: "#000",
              whiteSpace: "nowrap",
            }}
          >
            <Trans i18nKey={"common.moreWaysToReachUs"} />
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {contactSection.map((chat) => {
              return (
                <Box key={chat.id} onClick={() => openChat(chat.link)}>
                  <Box
                    sx={{
                      ...styles.centerVH,
                      borderRadius: 1,
                      cursor: "pointer",
                      width: "36px",
                      height: "36px",
                      background: chat.bg,
                    }}
                  >
                    <img src={chat.icon} alt={`chat icon`} />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
      <Grid container spacing={2} justifyContent="flex-end">
        {!hideCancelButton && (
          <Grid>
            <Button onClick={onClose} data-cy="cancel" data-testid="cancel">
              <Trans i18nKey={cancelLabel ?? ""} />
            </Button>
          </Grid>
        )}
        {hasBackBtn && (
          <Grid>
            <Button data-cy="back" variant={backType} onClick={onBack}>
              <Trans i18nKey="back" />
            </Button>
          </Grid>
        )}
        {!hideSubmitButton && (
          <Grid>
            <LoadingButton
              data-testid="submit"
              type="submit"
              data-cy="submit"
              variant="contained"
              loading={loading}
              onClick={(e: any) => {
                e.preventDefault();
                onSubmit?.(e)?.();
              }}
              disabled={disablePrimaryButton}
            >
              <Trans i18nKey={submitButtonLabel as string} />
            </LoadingButton>
          </Grid>
        )}
        {hasViewBtn && (
          <Grid>
            <LoadingButton
              data-testid="submit-and-view"
              type="submit"
              variant="contained"
              color="success"
              loading={loading}
              data-cy="submit-and-view"
              onClick={(e: any) => {
                e.preventDefault();
                onSubmit?.(e, true)();
              }}
            >
              {submitAndViewButtonLabel ?? (
                <Trans i18nKey={`${submitButtonLabel} ${t("andView")}`} />
              )}
            </LoadingButton>
          </Grid>
        )}
        {children && <Grid>{children}</Grid>}
      </Grid>
    </DialogActions>
  );
};
