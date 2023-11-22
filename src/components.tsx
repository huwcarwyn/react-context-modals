import React, { useEffect } from 'react'

import './style.scss'
import { useModal, CloseComponentType, ContentComponentType } from './index'

const CrossIcon = (props) => (
  <svg
    {...props}
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="srm-close-icon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ModalBackdrop = ({ animated, onClick }) => {
  useEffect(() => {
    document.body.classList.add('srm-modal-open')

    return () => {
      document.body.classList.remove('srm-modal-open')
    }
  }, [])

  return (
    <div
      onClick={onClick}
      className={`srm-modal-backdrop ${animated ? 'srm-fade-in' : ''}`}
    />
  )
}

const ModalWrapper = ({ children }) => (
  <div className="srm-modal-wrapper">{children}</div>
)

const ModalContent = ({ children, animated, className = '' }) => (
  <div
    className={`srm-modal-content ${
      animated ? 'srm-slide-down-fade' : ''
    } ${className}`}
  >
    {children}
  </div>
)

type ModalRootProps = {
  animated?: boolean
  CloseComponent?: CloseComponentType
  ContentComponent?: ContentComponentType
}

export const ModalRoot = ({
  animated,
  CloseComponent = CrossIcon,
  ContentComponent = ModalContent
}: ModalRootProps) => {
  const { component: Component, modalProps, hideModal, showModal } = useModal()

  return Component ? (
    <ModalWrapper>
      <ModalBackdrop animated={animated} onClick={hideModal} />
      <ContentComponent animated={animated} className={modalProps.className}>
        <CloseComponent onClick={hideModal} />
        <Component
          {...modalProps}
          hideModal={hideModal}
          showModal={showModal}
        />
      </ContentComponent>
    </ModalWrapper>
  ) : null
}
