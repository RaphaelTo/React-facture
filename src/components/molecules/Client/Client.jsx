import React from 'react';
import { Grid } from '@material-ui/core';

import Text from '../../atoms/Text/Text';
import Input from '../../atoms/Input/Input';

const Client = ({
    onChangeNameClient,
    valueNameClient,
    onChangeAddressClient,
    onChangeZipClient,
    valueZipClient,
    onChangeCityClient,
    valueCityClient,
    valueAddressClient
}) => {
    return (
        <>
            <Grid container direction="column" alignContent="center">
                <Text tag="label">Nom du client :</Text>
                <Input type="text" onChange={onChangeNameClient} value={valueNameClient} />
            </Grid>
            <Grid container direction="column" alignContent="center">
                <Text tag="label">Adresse du client :</Text>
                <Input type="text" onChange={onChangeAddressClient} value={valueAddressClient} />
                <Text tag="label">Code postal du client :</Text>
                <Input type="text" onChange={onChangeZipClient} value={valueZipClient} />
                <Text tag="label">Ville du client :</Text>
                <Input type="text" onChange={onChangeCityClient} value={valueCityClient} />
            </Grid>
        </>
    )
};

export default Client