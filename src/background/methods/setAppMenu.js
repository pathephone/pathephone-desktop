import { Menu } from 'electron'

import { devMenuTemplate } from '../modules/menu/dev_menu_template'
import { editMenuTemplate } from '../modules/menu/edit_menu_template'

const setAppMenu = (env) => {
  const menus = [editMenuTemplate]
  if (env.name !== 'production') {
    menus.push(devMenuTemplate)
  }
  Menu.setApplicationMenu(Menu.buildFromTemplate(menus))
}

export default setAppMenu
