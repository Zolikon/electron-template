export function useElectron() {
  return { electron: window.electron, eventBus: window.electron.ipcRenderer }
}
