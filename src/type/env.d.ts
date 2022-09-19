/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_ROOT_URL: string;
  }
}
