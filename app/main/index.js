const { app } = require('electron')
const { create: createMainWindow } = require('./windows/main')
const handleIPC = require('./ipc')

const single = app.requestSingleInstanceLock()
if (!single) {
    app.quit()
} else {
    app.on("second-instance", () => {
        // 禁止多开
        showMainWindow()
    })
    app.on('ready', () => {
        createMainWindow()
        handleIPC()
        require('./trayAndMenu')
    })
    app.on('activate', () => {
        showMainWindow()
    })
}