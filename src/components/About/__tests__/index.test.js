import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
    // First Test
        // uses the render function to render About component using JSX
        it('renders', () => {
            render(<About />);
        });

    // Second Test
        it('matches snapshot DOM node structure', () => {
            // render About
            const { asFragment } = render(<About />);
            expect(asFragment()).toMatchSnapshot();
        })
})