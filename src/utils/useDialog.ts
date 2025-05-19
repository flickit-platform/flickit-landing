import { useState } from "react";

export interface IDialogContext {
  type: string;
  data?: any;
  staticData?: any;
  onSubmit?: (...args: any) => any;
  getViewLink?: (data: any) => string;
}

interface IUseDialogProps {
  context?: IDialogContext;
}

/**
 * #### Hook for creating dialog logics
 *
 * you can pass context on create or on open dialog which is recommended way
 * remember to pass context type otherwise we don't set your context
 */
const useDialog = (props: IUseDialogProps = {}) => {
  const { context: initialContext = undefined } = props;
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState(initialContext);

  const onClose = () => {
    setOpen(false);
  };

  const openDialog = (context: any) => {
    setOpen(true);
    if (context.type && !context.target) {
      setContext(context);
    }
  };

  return { open, onClose, openDialog, context };
};

export type TDialogProps = ReturnType<typeof useDialog>;

export default useDialog;
