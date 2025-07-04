"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CEDialog,
  CEDialogActions,
} from "@/components/common/dialogs/CEDialog";
import { theme } from "@/config/theme";
import { Trans } from "react-i18next";
import { t } from "i18next";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { DialogProps } from "@mui/material/Dialog";
import { useForm as useFormSpree } from "@formspree/react";
import { FormProvider, useForm } from "react-hook-form";
import { InputFieldUC } from "@/components/common/fields/InputField";

interface IContactUsDialogProps extends DialogProps {
  onClose: () => void;
}

const ContactUsDialog = (props: IContactUsDialogProps) => {
  const { onClose, ...rest } = props;
  const abortController = useMemo(() => new AbortController(), [rest.open]);

  const [state, handleSubmitSpree] = useFormSpree("myzeoqrg");
  const methods = useForm();
  const [emailError, setEmailError] = useState<any>("");

  const [dialogKey, setDialogKey] = useState(0);

  const close = () => {
    handleSubmitSpree({});
    abortController.abort();
    setEmailError("");
    methods.reset();
    setDialogKey((prev) => prev + 1);
    onClose();
  };

  useEffect(() => {
    methods.setValue("type" as any, "Contact Us - Landing");
  }, []);

  const onSubmit = (data: any) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      setEmailError(t("common.invalidEmail"));
      return;
    }

    setEmailError("");
    handleSubmitSpree(data);
  };

  const phoneNumber = "+989966529108";
  const WhatsappLink = `whatsapp://send?phone=${phoneNumber}`;
  const WhatsappWebLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  const socialIcon = [
    {
      id: 1,
      icon: "/whats-app.svg",
      bg: "#3D8F3D14",
      link: { WhatsappLink, WhatsappWebLink },
    },
  ];

  return (
    <CEDialog
      key={dialogKey}
      {...rest}
      closeDialog={close}
      title={
        <Typography
          sx={theme.typography.semiBoldXLarge}
          textTransform={"uppercase"}
        >
          <Trans i18nKey="common.contactUs" />
        </Typography>
      }
    >
      {state.succeeded ? (
        <Box
          mt={2}
          sx={{
            minHeight: { xs: "calc(100vh - 100px)", sm: "unset" },
          }}
        >
          <Box
            height="94%"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <CheckCircleOutlineRoundedIcon
              sx={{ fontSize: 64, color: "success.main", mb: 1 }}
            />
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              <Trans i18nKey="common.thankYouForYourMessage" />
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <Trans i18nKey="common.weWillGetBackToYouSoon" />
            </Typography>
          </Box>

          <CEDialogActions
            hideCancelButton
            submitButtonLabel={t("common.okGotIt")}
            closeDialog={close}
            onSubmit={close}
          />
        </Box>
      ) : (
        <FormProvider {...methods}>
          <form
            onSubmit={() => methods.handleSubmit(onSubmit)}
            style={{ padding: 24 }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              <Trans i18nKey="common.contactUsIntroText" />
            </Typography>

            <InputFieldUC name="email" label={t("common.yourEmail")} required />

            <Box sx={{ mt: 2 }}>
              <InputFieldUC
                name="message"
                label={t("common.yourMessage")}
                multiline
                rows={4}
                required
              />
            </Box>
          </form>

          <CEDialogActions
            cancelLabel={t("common.cancel")}
            contactSection={socialIcon}
            submitButtonLabel={t("common.confirm")}
            onClose={close}
            loading={state.submitting}
            onSubmit={() => methods.handleSubmit(onSubmit)}
            sx={{
              flexDirection: { xs: "column-reverse", sm: "row" },
              gap: 2,
              mt: 2,
            }}
          />
        </FormProvider>
      )}
    </CEDialog>
  );
};

export default ContactUsDialog;
