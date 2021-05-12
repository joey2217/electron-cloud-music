const { ipcRenderer } = window.require('electron')

// 最小化
export function minimize() {
  ipcRenderer.invoke('minimize')
}
// 最大化
export function maximize() {
  ipcRenderer.invoke('maximize')
}
// 最大化
export function close() {
  ipcRenderer.invoke('close')
}
// 最大化切换
export function toggleMaximize(setIsMax: (isMax: boolean) => void) {
  ipcRenderer.on('maximize', (e: any, isMaximized: boolean) => {
      setIsMax(isMaximized)
  })
}
