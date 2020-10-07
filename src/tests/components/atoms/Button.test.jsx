import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import expect from 'expect';

import Button from '../../../components/atoms/Button/Button';

describe('atom Button', () => {

    test('atom Button exist', () => {
        const getButton = render(<Button />);
        expect(getButton).toBeTruthy();
    });

    test('atom Button get a button Element', () => {
        const { getByTestId } = render(<Button />);

        const getButton = getByTestId('button-test');

        expect(getButton instanceof HTMLButtonElement).toBeTruthy();
    });

    test('atom Button can get a children', () => {
        const { getByTestId } = render(<Button>Click</Button>);

        const getButton = getByTestId('button-test');

        expect(getButton).toHaveTextContent('Click');
    });

    test('atom Button have default value for child', () => {
        const { getByTestId } = render(<Button />);

        const getButton = getByTestId('button-test');

        expect(getButton).toHaveTextContent('Valider');
    });

    test('atom Button can get a props function', () => {
        let text = 'Valider';
        function changeName() {
            text = "Change"
        };

        const { getByTestId, debug } = render(<Button onClick={changeName()}>{text}</Button>)

        const getButton = getByTestId('button-test');

        fireEvent.click(getByTestId('button-test'));

        expect(getButton).toHaveTextContent('Change')

    });
});