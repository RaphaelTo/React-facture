import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Alert from '../../molecules/Alert/Alert';

const useStyle = makeStyles({
    errorBanner: {
        width: '200px',
        height: '100px',
        backgroundColor: 'red',
        color: 'white'
    }
});

const ErrorAlert = ({
    children = "Error"
}) => {
    const classes = useStyle();

    return (
        <>
            <Grid container justify="center" alignItems="center" className={classes.errorBanner}>
                <Alert>{children}</Alert>
            </Grid>
        </>
    )
};

export default ErrorAlert;
