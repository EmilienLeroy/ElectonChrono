const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 290, height: 50,x: 600,y:0,alwaysOnTop:true ,frame: false}); // on définit une taille pour notre fenêtre
  mainWindow.loadURL(`file://${__dirname}/assets/index.html`); // on doit charger un chemin absolu
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

