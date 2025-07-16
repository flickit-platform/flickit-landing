/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_LOCAL_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
