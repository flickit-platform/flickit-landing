import { FieldErrorsImpl } from "react-hook-form";
import { Trans } from "react-i18next";
import {useTranslations} from "next-intl";

type TErrorTypes =
  | "disabled"
  | "required"
  | "pattern"
  | "onBlur"
  | "onChange"
  | "value"
  | "min"
  | "max"
  | "maxLength"
  | "minLength"
  | "validate"
  | "valueAsNumber"
  | "valueAsDate"
  | "setValueAs"
  | "shouldUnregister"
  | "deps";

type TErrorMessagesBaseOnErrorTypes = Partial<Record<TErrorTypes, JSX.Element>>;

/**
 * Finds field error in form errors
 * @param errors All errors of form
 * @param name field name
 * @returns
 */
const getFieldError = (
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>,
  name: string,
  minLength?: number,
  maxLength?: number,
) => {
  const error = errors?.[name];
  const hasError = !!error?.type;
  const t  = useTranslations();
  const errorMessagesBaseOnErrorTypes: TErrorMessagesBaseOnErrorTypes = {
    required: t("common.requiredFieldError"),

    minLength: (
        t('minLengthFieldError', {length: minLength ?? '8'})
    ),
    maxLength: (
        t('maxLengthFieldError', {length: maxLength ?? '8'})
    ),
  };
  const errorMessage =
    errorMessagesBaseOnErrorTypes[error?.type as TErrorTypes] ?? error?.message;

  return { hasError, errorMessage };
};

export default getFieldError;
