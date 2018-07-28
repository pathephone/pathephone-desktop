import React from 'react'
import propTypes from 'prop-types'
import MdSwap from 'react-icons/lib/md/group-work'
import MdUpload from 'react-icons/lib/md/file-upload'
import MdDownload from 'react-icons/lib/md/file-download'
import MdStorage from 'react-icons/lib/md/storage'

import Indicator from './IndicatorsBar/Indicator.jsx'

import './IndicatorsBar.css'

const resolveIndicatorString = data => (
  data === null ? '--' : data
)

const IndicatorsBar = ({
  isOffline,
  ipfsPeers,
  metabinPeers,
  ipfsRepoUsage,
  ipfsBandwidthIn,
  ipfsBandwidthOut
}) => {
  return (
    <div className='indicatorsBar'>
      {
        isOffline && (
          <Indicator content='offline' isAccented />
        )
      }
      <Indicator
        content={
          <span>
            <MdSwap />{` ${resolveIndicatorString(ipfsPeers)} (${resolveIndicatorString(metabinPeers)})`}
          </span>
        }
        tooltip='peers: ipfs (pathephone)'
      />
      <Indicator
        content={
          <span>
            <MdStorage />{` ${resolveIndicatorString(ipfsRepoUsage)}`}
          </span>
        }
        tooltip='storage: used / limit'
      />
      <Indicator
        content={<span><MdDownload />{` ${resolveIndicatorString(ipfsBandwidthIn)}`}</span>} />
      <Indicator content={<span><MdUpload />{` ${resolveIndicatorString(ipfsBandwidthOut)}`}</span>} />
    </div>
  )
}

IndicatorsBar.propTypes = {
  isOffline: propTypes.bool.isRequired,
  ipfsPeers: propTypes.oneOfType([
    propTypes.number,
    propTypes.null
  ]),
  metabinPeers: propTypes.oneOfType([
    propTypes.number,
    propTypes.null
  ]),
  ipfsRepoUsage: propTypes.oneOfType([
    propTypes.string,
    propTypes.null
  ]),
  ipfsBandwidthIn: propTypes.oneOfType([
    propTypes.number,
    propTypes.null
  ]),
  ipfsBandwidthOut: propTypes.oneOfType([
    propTypes.number,
    propTypes.null
  ])
}

export default IndicatorsBar
