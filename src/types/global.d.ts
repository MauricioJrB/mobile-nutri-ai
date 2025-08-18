declare module "*.png" {
  const value: any;
  export default value;
}

declare module "@env" {
  export const API_URL: string;
  export const CLIENT_ID: string;
  export const ANDROID_CLIENT_ID: string;
  export const WEB_CLIENT_ID: string;
}
