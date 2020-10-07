import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
    text: {
        margin: ({ marginText }) => marginText,
        fontWeight: ({ weightText }) => weightText
    }
}));

const tuplesTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label'];

const Text = ({
    tag = 'p',
    marginText,
    weightText,
    children
}) => {
    const Component = tuplesTag.includes(tag) ? tag : 'p';
    const classes = useStyle({ marginText, weightText });

    return <Component data-testid='test-text' className={classes.text}>{children}</Component>
};

export default Text