const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

/**
 * @type BrowserWindow
 */
let win

function create() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        backgroundColor: true,
        titleBarStyle: 'hidden',
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.on('ready-to-show', () => {
        show()
    })

    // TODO 窗口假关闭
    win.on('close', (e) => {
        e.preventDefault()
        win.hide()
    })
  
    // 最大化切换
    win.on('maximize',e => send('maximize',true))
    win.on('unmaximize',e => send('maximize', false))

    if (isDev) {
        win.loadURL('http://localhost:3000')
        win.webContents.openDevTools()
    } else {
        win.loadFile(path.resolve(__dirname, '../../renderer/pages/main/index.html'))
    }
}

function show() {
    win.show()
}

function send(channel, ...args) {
    win.webContents.send(channel, ...args)
}

function minimize() {
    win.minimize()
}

function maximize() {
    const isMax = win.isMaximized()
    if (isMax) {
        win.unmaximize()
    } else {
        win.maximize()
    }
}

function close() {
    win.close()
}

module.exports = {
    create,
    show,
    send,
    minimize,
    close,
    maximize,
}