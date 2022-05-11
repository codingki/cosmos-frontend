declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_URL: string;
  }
}

declare const __DEV__: boolean;
declare const __PROD__: boolean;
