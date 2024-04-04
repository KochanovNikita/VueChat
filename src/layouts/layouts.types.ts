export enum AppLayoutsEnum {
    default = "default",
    auth = "auth",
    error = "error",
  }
  
  export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
    default: "AppLayoutDefault.vue",
    auth: "AppLayoutAuth.vue",
    error: "AppLayoutError.vue",
  };
  