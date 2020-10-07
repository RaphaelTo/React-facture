import React from 'react';
import { Grid } from '@material-ui/core';

import Company from '../../molecules/Company/Company';
import Client from '../../molecules/Client/Client';
import Text from '../../atoms/Text/Text';

const Header = ({
    onChangeInputImage,
    onChangeInputAddressCompany,
    inputValueAddressCompany,
    inputValueZipCompany,
    inputValueCityCompany,
    onChangeNameClient,
    valueNameClient,
    onChangeAddressClient,
    valueAddressClient,
    onChangeInputZipCompany,
    onChangeInputCityCompany,
    onChangeInputZipClient,
    valueZipClient,
    onChangeCityInputClient,
    valueCityClient,
}) => {
    return (
        <Grid container>
            <Text tag="h1">Section information de l'entreprise</Text>
            <Grid container direction="column">
                <Company
                    onChangeInputImage={onChangeInputImage}
                    onChangeInputAddress={onChangeInputAddressCompany}
                    onChangeInputZip={onChangeInputZipCompany}
                    onChangeInputCity={onChangeInputCityCompany}
                    inputValueAddress={inputValueAddressCompany}
                    inputValueZip={inputValueZipCompany}
                    inputValueCity={inputValueCityCompany}
                />
            </Grid>
            <Text tag="h1">Section information du client</Text>
            <Grid container justify="center">
                <Client
                    onChangeNameClient={onChangeNameClient}
                    valueNameClient={valueNameClient}
                    onChangeAddressClient={onChangeAddressClient}
                    valueAddressClient={valueAddressClient}
                    onChangeZipClient={onChangeInputZipClient}
                    valueZipClient={valueZipClient}
                    onChangeCityClient={onChangeCityInputClient}
                    valueCityClient={valueCityClient}
                />
            </Grid>
        </Grid>
    )
};

export default Header;