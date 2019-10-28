import React from 'react'

import { useModal } from 'contexts'

import './style.scss'

const CrossIcon = props => (
  <svg
    {...props}
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ModalBackdrop = ({ children, onClick }) => (
  <div onClick={onClick} className="srm-modal-backdrop">
    {children}
  </div>
)

const ModalWrapper = ({ children }) => (
  <div className="srm-modal-wrapper">{children}</div>
)

const ModalContent = ({ children }) => (
  <div className="srm-modal-content">{children}</div>
)

export const ModalRoot = () => {
  const { component: Component, modalProps, hideModal } = useModal()

  return Component ? (
    <ModalWrapper>
      <ModalBackdrop onClick={hideModal} />
      <ModalContent>
        <CrossIcon onClick={hideModal} className="srm-close-icon" />
        <Component {...modalProps} />
      </ModalContent>
    </ModalWrapper>
  ) : null
}
