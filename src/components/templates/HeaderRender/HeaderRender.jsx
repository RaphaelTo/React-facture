import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CompanyRender from '../../molecules/CompanyRender/CompanyRender';
import GetDate from '../../molecules/GetDate/GetDate';
import ClientRender from '../../molecules/ClientRender/ClientRender';


const useStyle = makeStyles({
    date: {
        padding: '30px 0'
    }
});


const HeaderRender = ({
    compagnyImgSrc,
    compagnyImgAlt,
    compagnyImgWidth,
    compagnyImgHeight,
    compagnyAddressCompany,
    compagnyZipCompany,
    compagnyCityCompagny,
    clientName,
    clientAddress,
    clientZip,
    clientCity
}) => {
    const classes = useStyle();

    return (
        <>
            <Grid container>
                <Grid container direction="column" >
                    <CompanyRender
                        imgSrc={compagnyImgSrc}
                        imgAlt={compagnyImgAlt}
                        imgWidth={compagnyImgWidth}
                        imgHeight={compagnyImgHeight}
                        addressCompany={compagnyAddressCompany}
                        zipCompany={compagnyZipCompany}
                        cityCompany={compagnyCityCompagny}
                    />
                </Grid>
                <Grid container justify="flex-end" className={classes.date}>
                    <GetDate />
                </Grid>
                <Grid container justify="flex-end">
                    <ClientRender
                        nameClient={clientName}
                        addressClient={clientAddress}
                        zipClient={clientZip}
                        cityClient={clientCity}
                    />
                </Grid>
            </Grid>
        </>
    )
};

export default HeaderRender