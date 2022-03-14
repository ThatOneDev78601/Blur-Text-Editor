const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    send: async (event, msg) => ipcRenderer.send(event, msg),

    invoke: async (event, msg) => ipcRenderer.invoke(event, msg),
});
