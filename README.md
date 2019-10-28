# React Context Modals

React Context Modals allows you to very easily add accessible and flexible modals to any project, any component can be turned into a modal. Can be used either via the context API or by using the hook.

### Installation

```
npm install --save react-context-modals
```

or

```
yarn add react-context-modals
```

### Setup

To set up the library - all you need to do is wrap your app in the context provider, like so:

```
import { ModalProvider } from 'react-context-modals'

export const App = () => {
    return (
        <ModalProvider>
            // ...rest of your app
        </ModalProvider>
    )
}
```

### Usage

With hooks:

```
import { useModal } from 'react-context-modals'

const BasicModal = ({ message }) => (
    <div>this is a very basic modal, with a message passed via props: {message}</div>
)

const Example = props => {
    const { showModal } = useModal()

    return (
        <button onClick={() => showModal(BasicModal, {
            message: 'This message will be passed to the modal component'
        })}>
            Open modal
        </button>
    )
}
```

With class based components:

```
import React, { Component } from 'react'
import { ModalConsumer } from 'react-context-modals'

const BasicModal = () => <div>this is a very basic modal</div>

class Example extends Component {
    render() {
        return (
            <ModalConsumer>
                {({ showModal }) => (
                    <button onClick={() => showModal(BasicModal)}>Open modal</button>
                )}
            </ModalConsumer>
        )
    }
}
```
