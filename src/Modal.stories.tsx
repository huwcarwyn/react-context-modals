import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import { useModal, ModalProvider } from '.'

const Example = () => (
  <div style={{ padding: '120px' }}>I'm an example component</div>
)

const CloseComponent = ({ onClick }) => { return <span onClick={onClick}>xxxxxxx</span>}

const ModalInner = () => {
  const { showModal } = useModal()

  return <button onClick={() => showModal(Example)}>Open a modal</button>
}

const RenderModal = ({animated, CloseComponent}) => {
  return (
    <ModalProvider animated={animated} CloseComponent={CloseComponent}>
      <ModalInner />
    </ModalProvider>
  )
}

const meta = {
  title: 'Modal',
  component: RenderModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RenderModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    animated: false,
    CloseComponent: CloseComponent
  },
};