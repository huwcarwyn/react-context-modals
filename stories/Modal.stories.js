import React from 'react'

import { useModal, ModalProvider } from '../src'

export default {
  title: 'Modal'
}

const ModalInner = () => {
  const { showModal } = useModal()

  const Example = () => "I'm an example component"

  return <button onClick={() => showModal(Example)}>Open a modal</button>
}

export const defaultModal = () => {
  return (
    <ModalProvider>
      <ModalInner />
    </ModalProvider>
  )
}
