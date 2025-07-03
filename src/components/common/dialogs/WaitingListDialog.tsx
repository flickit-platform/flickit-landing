import React, { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { InputFieldUC } from "@/components/common/fields/InputField";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  CEDialog,
  CEDialogActions,
} from "@/components/common/dialogs/CEDialog";
import { useForm as useFormSpree } from "@formspree/react";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

const WaitingListDialog = (props: any) => {
  const methods = useForm();
  const [state, handleSubmitSpree] = useFormSpree("myzeoqrg");
  const { kitTitle, onClose, ...rest } = props;
  const abortController = useMemo(() => new AbortController(), [rest.open]);
  const [dialogKey, setDialogKey] = useState(0);
  const t = useTranslations();

  useEffect(() => {
    methods.setValue("type", `Waiting List - "${kitTitle}".`);
  }, []);
  const onSubmit = (data: any) => {
    handleSubmitSpree(data);
    methods.reset();
    methods.setValue("type", `Waiting List - "${kitTitle}".`);
    onClose();
  };

  const close = () => {
    abortController.abort();
    methods.reset();
    setDialogKey((prev) => prev + 1);
    methods.setValue("type", `Waiting List - "${kitTitle}".`);
    onClose();
  };

  return (
    <CEDialog
      key={dialogKey}
      {...rest}
      closeDialog={close}
      icon={<NotificationsActiveIcon />}
      title={
        <Typography variant="semiBoldXLarge">
          {t("common.joinTheWaitlist")}
        </Typography>
      }
      style={{ padding: "32px 32px 16px" }}
    >
      <FormProvider {...methods}>
        <Typography variant="body1" sx={{ mb: 6 }}>
          {t("common.waitlistDec")}
        </Typography>
        <Box sx={{ width: { xs: "100%", sm: "45%" } }}>
          <form
            onSubmit={() => methods.handleSubmit(onSubmit)}
            style={{ padding: "0px", width: "100%", marginInlineEnd: "auto" }}
          >
            <InputFieldUC
              name="email"
              label={t("common.yourEmail")}
              required
              placeholder={t("common.yourEmail")}
            />
          </form>
        </Box>

        <CEDialogActions
          cancelLabel={t("common.cancel")}
          submitButtonLabel={t("common.joinWaitlist")}
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
    </CEDialog>
  );
};

export default WaitingListDialog;
