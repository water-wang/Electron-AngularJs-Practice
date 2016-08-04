const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow();
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.webContents.openDevTools();
    mainWindow.on('close', function () {
        mainWindow = null;
    });
}

app.on('window-all-close', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', createWindow);

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});