import path from 'path'
const fs = require('fs')

export default (app) => {
  if (fs.existsSync(`./${app}`)) {
    return `./${app}`
  }

  if (/^win/.test(process.platform) && fs.existsSync(`./${app}.exe`)) {
    return `./${app}.exe`
  }

  if (fs.existsSync(fs.realpathSync(__dirname) + `/${app}`)) {
    return fs.realpathSync(__dirname) + `/${app}`
  }

  if (fs.existsSync(fs.realpathSync(path.join(__dirname, '/../../..')) + `/${app}`)) {
    return fs.realpathSync(path.join(__dirname, '/../../..')) + `/${app}`
  }

  try {
    if (process.platform === 'darwin' && fs.existsSync(fs.realpathSync(path.join(__dirname, '/../../../MacOS')) + `/${app}`)) {
      return fs.realpathSync(path.join(__dirname, '/../../../MacOS')) + `/${app}`
    }
  } catch (e) {}

  if (/^win/.test(process.platform) && fs.existsSync(`imports/win/${app}.exe`)) {
    return `imports/win/${app}.exe`
  }

  if (process.platform === 'linux' && fs.existsSync(`imports/linux/${app}`)) {
    return `imports/linux/${app}`
  }

  if (process.platform === 'darwin' && fs.existsSync(`imports/darwin/${app}`)) {
    return `imports/darwin/${app}`
  }

  return `${app}`
}
