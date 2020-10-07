import React from 'react';
import { Grid } from '@material-ui/core';

import Text from '../../atoms/Text/Text';

const ClientRender = ({
    nameClient,
    addressClient,
    zipClient,
    cityClient
}) => {
    return (
        <>
            <Grid container justify="flex-end">
                <Text tag='p' weightText="bold" marginText={0}>{nameClient}</Text>
            </Grid>
            <Grid container direction="column" alignContent="flex-end" alignItems="flex-end">
                <Text tag='p' marginText={0}>{addressClient}</Text>
                <Text tag='p' marginText={0}>{zipClient} {cityClient}</Text>
            </Grid>
        </>
    )
};

export default ClientRender;