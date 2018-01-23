import React from 'react'
import ModalLayer from '#/ModalLayer'
import ModalWindow from '#/ModalWindow'
import ModalWindowHeader from '#/ModalWindowHeader'
import suatmm from '~/css/suatmm.gif'

const DonatePill = ({ coin, address }) => (
  <div className='donate-pill izi-xs'>
    <div className='donate-pill__coin'><b>{coin}</b></div>
    <div className='donate-pill__address'>{address}</div>
    <style jsx>{`
.donate-pill {
  border: 1px solid #f2f2f2;
}
.donate-pill > * {
  padding: 0.5em;
}
.donate-pill__address {
}
    `}</style>
  </div>
)
const DonateBody = () => (
  <div className='izi-ys'>
    <img src={suatmm} />
    <div className='izi--gap'>
      <DonatePill coin='bitcoin' address='1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk' />
      <DonatePill coin='ethereum' address='0x7571FfD6D59A275FEda3a7AA5e6503Fa22E91CF8' />
      <DonatePill coin='bitcoin cash' address='1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk' />
    </div>
  </div>
)

const DonateModal = ({ onClose }) => (
  <ModalLayer>
    <ModalWindow>
      <ModalWindowHeader onClose={onClose} title='Donate' />
      <DonateBody />
    </ModalWindow>
  </ModalLayer>
)

export default DonateModal
