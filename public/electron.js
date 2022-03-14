const electron = require("electron");
const url = require("url");
const fs = require("fs/promises");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const { ipcMain } = require("electron");
const { dialog } = require("electron");
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "Blur Text Editor",
        width: 917,
        height: 518,
        resizable: false,
        transparent: true,
        frame: false,
        show: true,
        webPreferences: {
            preload: `${path.join(__dirname, "preload.js")}`,
        },
    });
    mainWindow.setTitle("Blur Text Editor");
    mainWindow.setMenuBarVisibility(false);

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : url.format({
                pathname: path.join(__dirname, '../out/index.html'),
                protocol: 'file:',
                slashes: true
            })
    );
    // `file://${path.join(__dirname, "../build/index.html")}`
    //   format({
    //     pathname: join(__dirname, '../renderer/out/index.html'),
    //     protocol: 'file:',
    //     slashes: true,
    //   })

    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

ipcMain.on("close-app", () => {
    mainWindow.close();
});
ipcMain.handle("open-file", async () => {
    let filePath = {
        path: null,
        data: null,
    };
    await dialog
        .showOpenDialog({
            properties: ["openFile"],
            filters: [{ name: "Text Files", extensions: ["txt"] }],
        })
        .then(async (o) => {
            if (Array.isArray(o.filePaths) && o.filePaths.length > 0) {
                filePath.path = o.filePaths[0];
                const data = await fs.readFile(o.filePaths[0], "utf8");
                filePath.data = data;
            }
        });
    return filePath;
});
ipcMain.handle("new-file", async () => {
    let filePath = {
        path: null,
    };
    await dialog
        .showSaveDialog({
            properties: ["saveFile"],
            filters: [{ name: "Text Files", extensions: ["txt"] }],
        })
        .then(async (o) => {
            if (o.completed == true) {
                await fs.writeFile(o.filePath, "");
                filePath.path = o.filePath
            }
        });
    return filePath;
});
ipcMain.on("minimize-app", () => {
    mainWindow.minimize();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
