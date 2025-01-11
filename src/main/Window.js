import { app, BrowserWindow } from 'electron'

export class Window extends BrowserWindow {
  constructor() {
    super({
      width: 900,
      height: 670,
      show: false,
      webPreferences: {
        preload: `${__dirname}/../preload/index.js`,
        sandbox: false
      }
    })
    this.loadFile(`${__dirname}/src/renderer/index.html`)
  }
  send(message, data) {
    this.webContents.send(message, data)
  }
}
