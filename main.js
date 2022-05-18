const { app, BrowserWindow } = require('electron')
const platform = require('node:process')
const path = require('path')
let os = require('os')

console.log(`${os.userInfo().username} from ${platform.platform}`);

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: path.join(__dirname, 'astro.png'),
        title: 'EdFinder',
        backgroundColor: '#0c0c0c',   
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quitter quand toutes les fenêtres sont fermées, sauf sur macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})





let { ipcMain } = require("electron")

ipcMain.handle("console", (event, line) => {
    //console.log(`Received from frontend: ${line}`)
    //return `Backend confirms it received: ${line}`



    const directory = './out/';
    const fs = require('fs');
    
    return fs.readdir(directory, (err, files) => {
        console.log(files);
        return JSON.stringify(files);
    });
})