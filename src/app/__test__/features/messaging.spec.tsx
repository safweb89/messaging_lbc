import React from "react";
import { render, cleanup, screen, RenderResult } from "@testing-library/react";
import { Provider } from 'react-redux'
import { createTestStore } from 'app/redux/store';

import Messaging from 'app/features/messaging';

let componentRendred: RenderResult;



describe("<Messaging>", () => {
    afterEach(() => {
        cleanup();
    })
    beforeEach(() => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn()
        componentRendred = render(<Provider store={createTestStore()}><Messaging /> </Provider>);
    }),

        test("should render the Messaging Header Block", async () => {
            const { container } = componentRendred;
            const messagingHeaderBlock = container.querySelector('[class="messagingHeaderContainer row"]');

            expect(messagingHeaderBlock).toBeVisible();
        }),

        test("should render the Messaging Body Block", async () => {
            const messagingBodyBlock = screen.getByRole('list');
            expect(messagingBodyBlock).toBeVisible();
        }),

        test("should render the Messaging Footer Block", async () => {
            const { container } = componentRendred;
            const messagingFooterBlock = container.querySelector('[class="root row"]');

            expect(messagingFooterBlock).toBeVisible();
        })

});