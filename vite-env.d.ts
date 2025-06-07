/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_CLARITY_KEY: string;
  VITE_PIWIK_KEYL: string;
  VITE_FLAGSMITH_ENVIRONMENT_KEY: string;
  VITE_FLAGSMITH_API: string;
  VITE_FORM_SPREE: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
