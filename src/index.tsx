import React, { useEffect, useReducer, createContext, useContext } from 'react'

import { ModalRoot } from './components'

interface ModalContextValues {
  component: React.FC
  modalProps: any
  showModal: () => void
  hideModal: () => void
}

interface ModalProviderProps {
  animated: boolean
  children: React.ReactNode
}

const ModalContext = createContext<ModalContextValues>({
  component: () => <div>No modal component supplied</div>,
  modalProps: {},
  showModal: () => undefined,
  hideModal: () => undefined
})

const { Provider, Consumer: ModalConsumer } = ModalContext

const reducer = (
  state,
  {
    type,
    component,
    modalProps
  }: { type: string; component?: React.FC; modalProps?: any }
) => {
  switch (type) {
    case 'openModal':
      return { ...state, component, modalProps }
    case 'hideModal':
      return { ...state, component: null, modalProps: {} }
    default:
      throw new Error('Unspecified reducer action')
  }
}

const ModalProvider = ({
  children,
  animated,
  CloseComponent,
  ContentComponent
}) => {
  const initialState = {
    component: null,
    modalProps: {},
    showModal: (component, modalProps = {}) => {
      dispatch({ type: 'openModal', component, modalProps })
    },
    hideModal: () => {
      dispatch({ type: 'hideModal' })
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      state.hideModal()
    }
  }

  useEffect(() => {
    state.component === null
      ? document.addEventListener('keydown', onKeyDown)
      : document.removeEventListener('keydown', onKeyDown)
  }, [state.component])

  return (
    <div onKeyDown={onKeyDown} className="simple-react-modals">
      <Provider value={state}>
        <ModalRoot
          animated={animated}
          CloseComponent={CloseComponent}
          ContentComponent={ContentComponent}
        />
        {children}
      </Provider>
    </div>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalConsumer, ModalProvider, useModal }
