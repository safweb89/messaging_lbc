import React from "react";
import { render, cleanup, screen, RenderResult } from "@testing-library/react";
import { Provider } from 'react-redux'
import { createTestStore } from 'app/redux/store';

import ContactList from 'app/features/contactList';

let componentRendred: RenderResult;



describe("<ContactList>", () => {
    afterEach(() => {
        cleanup();
    })
    beforeEach(() => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn()
        componentRendred = render(<Provider store={createTestStore()}><ContactList /> </Provider>);
    }),

        test("shoud render blocks labes Chat and Recent", async () => {
            const labels = screen.getAllByRole('heading');

            expect(labels).not.toBeNull();
        }),

        test("shoud render the searchBlock", async () => {
            const { container } = componentRendred;
            const searchBlock = container.querySelector('[class="searchBlock row"]');

            expect(searchBlock).toBeVisible();

        }),
        
        test("shoud render the messagingBlock", async () => {
            const { container } = componentRendred;
            const searchBlock = container.querySelector('[id="messagesBlock"]');

            expect(searchBlock).toBeVisible();

        })
        
});