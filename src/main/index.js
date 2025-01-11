import { app, BrowserWindow, ipcMain } from 'electron'
import {  optimizer } from '@electron-toolkit/utils'
import { createWindow } from './utils'

let mainWindow;

app.whenReady().then(() => {
  mainWindow = createWindow()

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => {mainWindow.send('pong')})

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
