const { app, BrowserWindow} = require('electron');

// start new window
function mainWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    // Load a remote URL
    win.loadURL('https://github.com')

    // Or load a local HTML file
    // win.loadFile('index.html')
}

// When close all windows
app.on('window-all-closed', () => {
    app.quit()
});

// when ready
app.on('ready', () => {
    mainWindow();
})
