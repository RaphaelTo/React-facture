import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Text from '../../../components/atoms/Text/Text';

describe('atom Text', () => {
    test('atom exist', () => {
        const getComponentText = render(<Text />);
        expect(getComponentText).toBeTruthy();
    });

    test('atom text return an paragraphe type by default', () => {
        const { getByTestId } = render(<Text />);

        const getParagraph = getByTestId('test-text');

        expect(getParagraph instanceof HTMLParagraphElement).toBeTruthy();
    });

    test('atom text return an paragraph by props', () => {
        const { getByTestId } = render(<Text tag="p" />);

        const getParagraph = getByTestId('test-text');

        expect(getParagraph instanceof HTMLParagraphElement).toBeTruthy();
    });

    test('atom text return an title type', () => {
        const { getByTestId } = render(<Text tag="h1" />);

        const getHeading = getByTestId('test-text');

        expect(getHeading instanceof HTMLHeadingElement).toBeTruthy();
    });

    test('atom text return content children', () => {
        const { getByTestId } = render(<Text tag="span">Hello !</Text>);

        const getSpan = getByTestId('test-text');

        expect(getSpan).toHaveTextContent('Hello !');
        expect(getSpan instanceof HTMLSpanElement).toBeTruthy();
    });

    test('atom text return an P element if the taf is not an tag "text" ', () => {
        const { getByTestId } = render(<Text tag="tr">Test du contenu soit en P</Text>);

        const getTr = getByTestId('test-text');

        expect(getTr).toHaveTextContent('Test du contenu soit en P');
        expect(getTr instanceof HTMLParagraphElement).toBeTruthy();
    })
});