import React from 'react';
import { useForm } from "react-hook-form";
import { Grid } from '@material-ui/core';

import Input from '../../atoms/Input/Input';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

const Form = ({ submitMethod }) => {
    const { handleSubmit, register, errors } = useForm();

    return (
        <>
            <form onSubmit={handleSubmit(submitMethod)}>
                <Grid container direction="column">
                    <Text tag="label">Produit :</Text>
                    <Input
                        type="text"
                        name="product"
                        refInput={register({ required: true })}
                    />
                    {errors.product && errors.product.message}
                    <Text tag="label">Quantité :</Text>
                    <Input
                        type="text"
                        name="quantity"
                        refInput={register({ required: true })}
                    />
                    {errors.quantity && errors.quantity.message}
                    <Text tag="label">Price :</Text>
                    <Input
                        type="text"
                        name="price"
                        refInput={register({ required: true })}
                    />
                    {errors.price && errors.price.message}
                    <Button>Ajouter</Button>
                </Grid>
            </form>
        </>
    )
};

export default Form;