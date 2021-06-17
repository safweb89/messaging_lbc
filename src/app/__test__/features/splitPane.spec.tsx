import React from "react";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { Provider } from 'react-redux'
import { createTestStore} from 'app/redux/store';

import SplitPane from "app/features/splitPane";
import ContactList from 'app/features/contactList';
import Messaging from 'app/features/messaging';

let componentRendred: RenderResult;



describe("<SplitPane>", () => {
    afterEach(() => {
        cleanup();
    })
    beforeEach(() => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn()
        componentRendred = render(<Provider store={createTestStore()}><SplitPane  left={<ContactList/>} right={<Messaging/>} /> </Provider>);
    }),

        test("shoud render with left and right Components", async () => {
            const {container} = componentRendred;
            const leftComponent = container.querySelector('[id="left"]');
            const rightComponent = container.querySelector('[id="right"]');
            
            expect(leftComponent).not.toBeNull();
            expect(rightComponent).not.toBeNull();

        })
});