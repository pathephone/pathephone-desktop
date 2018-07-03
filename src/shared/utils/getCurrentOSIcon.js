import FaWindows from 'react-icons/lib/fa/windows'
import FaLinux from 'react-icons/lib/fa/linux'
import FaApple from 'react-icons/lib/fa/apple'
import { IS_WINDOWS, IS_MAC, IS_LINUX } from '#config'

const getCurrentOSIcon = () => {
  if (IS_WINDOWS) {
    return FaWindows
  } else
  if (IS_MAC) {
    return FaApple
  } else
  if (IS_LINUX) {
    return FaLinux
  }
}

export default getCurrentOSIcon
