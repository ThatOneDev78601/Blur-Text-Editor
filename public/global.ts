import electron from "electron";
declare global {
  interface Window {
    electron: {
      send: (event: string, data?: any) => void;
      //return the result in invoke method
      invoke: (event: string, data?: any) => Promise<any>;
    };
  }
}
