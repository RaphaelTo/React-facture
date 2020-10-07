import React from 'react';
import { Grid } from '@material-ui/core';

import Form from '../../organisms/Form/Form';
import TVAField from '../../molecules/TVAField/TVAField';
import Text from '../../atoms/Text/Text';

const Content = ({
    handleForm,
    nameLabelTVA,
    valueTVA = '20',
    onChangeTVA
}) => {

    return (
        <>
            <Grid container direction="column">
                <Text tag="h1">Section d'ajout de produit à la facture</Text>
                <Grid container justify="center">
                    <Form submitMethod={handleForm} />
                </Grid>
                <Text tag="h1">Section TVA</Text>
                <Grid container>
                    <TVAField
                        nameLabel={nameLabelTVA}
                        onChangeTVA={onChangeTVA}
                        valueTVA={valueTVA}
                    />
                </Grid>
            </Grid>
        </>
    )
};

export default Content;