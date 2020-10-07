import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Text from '../../atoms/Text/Text';

const useStyle = makeStyles({
    title: {
        width: '300px'
    },
    contain: {
        width: '300px'
    }
});

const Total = ({
    lessTVA,
    withTVA,
    TVA
}) => {

    const classes = useStyle();

    return (
        <>
            <Grid container justify="flex-end">
                <Grid container direction="column" alignContent="flex-end" className={classes.title}>
                    <Text tag="p">Total sans TVA</Text>
                    <Text tag="p">TVA</Text>
                    <Text tag="p">Total avec TVA</Text>
                </Grid>
                <Grid container direction="column" alignContent="flex-end" className={classes.contain}>
                    <Text tag="p">{lessTVA} €</Text>
                    <Text tag="p">{TVA} %</Text>
                    <Text tag="p">{withTVA} €</Text>
                </Grid>
            </Grid>
        </>
    )
};

export default Total;
