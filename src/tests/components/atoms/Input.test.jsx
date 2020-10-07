import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../../components/atoms/Input/Input';

describe('atom Input', () => {
    test('atom Input exist', () => {
        const getAtomInput = render(<Input />);
        expect(getAtomInput).toBeTruthy();
    });

    test('atom Input is Input', () => {
        const { getByTestId } = render(<Input />);

        const getInput = getByTestId('input-test');

        expect(getInput instanceof HTMLInputElement).toBeTruthy();
    });

    test('atom Input get a props type', () => {
        const { getByTestId } = render(<Input type="text" />);

        const getInput = getByTestId('input-test');

        expect(getInput.type).toBe('text');
    });

    test('atom Input get props value default "text"', () => {
        const { getByTestId } = render(<Input />);

        const getInput = getByTestId('input-test');

        expect(getInput.type).toBe('text');
    });

    test('atom Input can get only option who work with type', () => {
        const { getByTestId } = render(<Input type='throwerror' />);

        const getInput = getByTestId('input-test');

        expect(getInput.type).toBe('text');
    });
});