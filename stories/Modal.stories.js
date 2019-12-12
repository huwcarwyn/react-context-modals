import React from 'react'

import { useModal, ModalProvider } from '../src'

export default {
  title: 'Modal'
}

const Example = () => (
  <div style={{ padding: '120px' }}>I'm an example component</div>
)

const ModalInner = () => {
  const { showModal } = useModal()

  return <button onClick={() => showModal(Example)}>Open a modal</button>
}

export const defaultModal = () => {
  return (
    <ModalProvider>
      <ModalInner />
    </ModalProvider>
  )
}

export const animated = () => {
  return (
    <ModalProvider animated>
      <ModalInner />
    </ModalProvider>
  )
}
