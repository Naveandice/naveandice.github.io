interface ImportMetaEnv {
  readonly COMMIT_SHA?: string;
  readonly COMMIT_REF?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
