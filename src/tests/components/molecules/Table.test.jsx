import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import expect from 'expect';

import Table from '../../../components/molecules/Table/Table';

describe('molecules table', () => {
    test('molecule exist', () => {
        const getTable = render(<Table />);
        expect(getTable).toBeTruthy();
    });

    test('molecule table is HTML table element', () => {
        const { getByTestId } = render(<Table />);
        const getTable = getByTestId('table-test');

        expect(getTable instanceof HTMLTableElement).toBeTruthy();
    });

    test('molecule table can get props for title and content', () => {
        const { getAllByTestId } = render(<Table titles={['title1', 'title 2']} contents={['value 1', 'value 2']} />);

        const getTitle = getAllByTestId('title-test').map(item => item.textContent);
        const getContent = getAllByTestId('content-test').map(item => item.textContent);

        expect(getTitle).toEqual(['title1', 'title 2']);
        expect(getContent).toEqual(['value 1', 'value 2']);
    });

    test('molecule table get default value', () => {
        const { getAllByTestId } = render(<Table />);

        const getTitle = getAllByTestId('title-test').map(item => item.textContent);
        const getContent = getAllByTestId('content-test').map(item => item.textContent);

        expect(getTitle).toEqual(['Example titles 1', 'Example titles 2']);
        expect(getContent).toEqual(['Example value 1', 'Example value 2']);
    })
});
