const { ipcMain, ipcRenderer } = require('electron')
const { minimize: minimizeMainWindow, close: closeMainWindow, maximize: maximizeMainWindow } = require('./windows/main')

module.exports = function () {
    // main
    // 最小化
    ipcMain.handle('minimize', () => {
        minimizeMainWindow()
    })
    // 关闭
    ipcMain.handle('close', () => {
        closeMainWindow()
    })
    // 最大化
    ipcMain.handle('maximize', () => {
        maximizeMainWindow()
        // sendMainWindow('is-maximized',isMaximized)
    })
}

// ipcRenderer.invoke('minimize')