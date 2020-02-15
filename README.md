# React Context Modals

React Context Modals allows you to very easily add flexible modals to any project, any component can be turned into a modal. Can be used either via the context API or by using the hook.

### Installation

```
npm install --save react-context-modals
```

or

```
yarn add react-context-modals
```

### Setup

To set up the library - import the modal CSS (or optionally roll your own), then wrap your app in the ModalProvider like so:

```
import { ModalProvider } from 'react-context-modals'

import 'react-context-modals/dist/main.css'

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
    const { showModal, hideModal } = useModal()

    const showBasicModal = () => showModal(BasicModal, {
        message: 'This message will be passed to the modal component'
    })

    return (
        <button onClick={showBasicModal}>
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
                {({ showModal, hideModal }) => (
                    <button onClick={() => showModal(BasicModal)}>Open modal</button>
                )}
            </ModalConsumer>
        )
    }
}
```
