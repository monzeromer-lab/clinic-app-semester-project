const { app, BrowserWindow, Menu } = require('electron');

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

    // remove the defult menu of electron
    win.setMenuBarVisibility(false);

}

// When close all windows
app.on('window-all-closed', () => {
    app.quit()
});

// when ready
app.on('ready', () => {
    mainWindow();
})

// when quit
app.on('quit', () => {
    app.exit()
});
