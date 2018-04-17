import { connect } from 'react-redux'

import {
  getVolume
} from '~/selectors'

import {
  changeVolume
} from '~/actions'

import VolumeInput from './VolumeInput/VolumeInput'

const mapStateToProps = (state) => ({
  value: getVolume(state)
})

const mapDispatchToProps = {
  changeVolume
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeInput)
