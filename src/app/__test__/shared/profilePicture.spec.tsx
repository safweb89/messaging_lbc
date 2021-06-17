import React from "react";
import { render, screen, cleanup, RenderResult } from "@testing-library/react";

import { ProfilePicture } from "app/shared";

let componentRendred: RenderResult;
describe("<ProfilePicture>", () => {
    afterEach(() => {
        cleanup();
    })
    beforeEach(() => {
        componentRendred = render(<ProfilePicture name='test' />);
    }),

        test("shoud render with default image if not passed to", async () => {
            
            const profilePicture = screen.getByRole('img');
            expect(profilePicture).toHaveAttribute('src', 'https://i.stack.imgur.com/l60Hf.png');
        }),

        test("shoud render with default props if not passed to the component", async () => {

            const profilePicture = screen.getByRole('img');
            const profilePictureParent = screen.getByRole('img').parentElement;
            expect(profilePicture).toHaveAttribute('width', "40");
            expect(profilePicture).toHaveAttribute('height', "40");
            expect(profilePictureParent).toHaveStyle("margin: 0.2rem;");
        })
});