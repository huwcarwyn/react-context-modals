import React, { useEffect } from 'react'

import { useModal } from 'contexts'

import './style.scss'
import ModalStories from '../stories/Modal.stories'

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

const ModalBackdrop = ({ children, onClick }) => {
  useEffect(() => {
    document.body.classList.add('srm-modal-open')

    return () => {
      document.body.classList.remove('srm-modal-open')
    }
  }, [])

  return (
    <div onClick={onClick} className="srm-modal-backdrop">
      {children}
    </div>
  )
}

const ModalWrapper = ({ children }) => (
  <div className="srm-modal-wrapper">{children}</div>
)

const ModalContent = ({ children, className = '' }) => (
  <div className={`srm-modal-content ${className}`}>{children}</div>
)

export const ModalRoot = () => {
  const { component: Component, modalProps, hideModal, showModal } = useModal()

  return Component ? (
    <ModalWrapper>
      <ModalBackdrop onClick={hideModal} />
      <ModalContent className={modalProps.className}>
        <CrossIcon onClick={hideModal} className="srm-close-icon" />
        <Component
          {...modalProps}
          hideModal={hideModal}
          showModal={showModal}
        />
      </ModalContent>
    </ModalWrapper>
  ) : null
}
