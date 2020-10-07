import React from 'react';
import { Grid } from '@material-ui/core';

import Text from '../../atoms/Text/Text';
import Input from '../../atoms/Input/Input';

const TVAField = ({
    nameLabel,
    onChangeTVA,
    valueTVA = '20'
}) => {
    return (
        <Grid container direction='column' alignContent="center">
            <Text tag="label">{nameLabel}</Text>
            <Input type="text" onChange={onChangeTVA} inputValue={valueTVA} />
        </Grid>
    )
};

export default TVAField;