const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') 
    },
  });
  win.loadURL('http://localhost:3000');
}
const template = [{ 
  label: 'Electron', 
  submenu: [ 
    { 
      label: "Open" ,  
    },
    {
      role: 'toggleDevTools'
    }
  ] 
},
{ 
  label: 'Electron2', 
  submenu: [ 
    { 
      label: "Open" 
    }
  ] 
}]; 
const menu = Menu.buildFromTemplate(template); 
Menu.setApplicationMenu(menu);

app.whenReady().then(() => {createWindow()});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

