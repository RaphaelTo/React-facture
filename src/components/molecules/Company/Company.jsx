import React from 'react';
import { Grid } from '@material-ui/core';

import Input from '../../atoms/Input/Input';
import Text from '../../atoms/Text/Text';

const Company = ({
    onChangeInputImage,
    onChangeInputAddress,
    onChangeInputZip,
    onChangeInputCity,
    inputValueAddress,
    inputValueZip,
    inputValueCity
}) => {
    return (

        <Grid container>
            <Grid container direction="column" alignContent="center">
                <Text tag="label">Sélectionner l'image :</Text>
                <Input type="file" onChange={onChangeInputImage} />
            </Grid>
            <Grid container direction="column" alignContent="center">
                <Text tag="label">Ajout l'adresse de l'entreprise :</Text>
                <Input type="text" onChange={onChangeInputAddress} inputValue={inputValueAddress} />
                <Text tag="label">Ajout le code postal l'entreprise :</Text>
                <Input type="text" onChange={onChangeInputZip} inputValue={inputValueZip} />
                <Text tag="label">Ajout la ville de l'entreprise :</Text>
                <Input type="text" onChange={onChangeInputCity} inputValue={inputValueCity} />
            </Grid>
        </Grid>

    )
};

export default Company;