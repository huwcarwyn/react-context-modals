import React, { createContext, useReducer, useEffect, useContext } from 'react'

import { ModalRoot } from 'components'

const ModalContext = createContext({
  component: () => <div>No modal component supplied</div>,
  modalProps: {},
  showModal: () => undefined,
  hideModal: () => undefined
})

const { Provider, Consumer: ModalConsumer } = ModalContext

const reducer = (state, { type, component, modalProps }) => {
  switch (type) {
    case 'openModal':
      return { ...state, component, modalProps }
    case 'hideModal':
      return { ...state, component: null, modalProps: {} }
    default:
      throw new Error('Unspecified reducer action')
  }
}

const ModalProvider = ({ children }) => {
  const modalState = {
    component: null,
    modalProps: {},
    showModal: (component, modalProps = {}) => {
      dispatch({ type: 'openModal', component, modalProps })
    },
    hideModal: () => {
      dispatch({ type: 'hideModal' })
    }
  }

  const [state, dispatch] = useReducer(reducer, modalState)

  const onKeyDown = e => {
    if (e.key === 'Escape') {
      hideModal()
    }
  }

  useEffect(() => {
    state.component === null
      ? document.addEventListener('keydown', onKeyDown)
      : document.removeEventListener('keydown', onKeyDown)
  }, [state.component])

  return (
    <div className="simple-react-modals" onKeyDown={onKeyDown}>
      <Provider value={state}>
        <ModalRoot />
        {children}
      </Provider>
    </div>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalContext, ModalProvider, ModalConsumer, useModal }
