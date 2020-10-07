import React from 'react';
import { Grid } from '@material-ui/core';

import Table from '../../molecules/Table/Table';
import Total from '../../organisms/Total/Total';
import GeneratorPdf from '../../molecules/GeneratorPdf/GeneratorPdf';

const ContentRender = ({
    titlesTables,
    itemsTables,
    lessTVATotal,
    withTVATotal,
    valueTVA,
    generatorTargetPdf,
    generatorFilename
}) => {
    return (
        <>
            <Grid container justify="center">
                <Table titles={titlesTables} contents={itemsTables} />
            </Grid>
            <Total
                lessTVA={lessTVATotal}
                withTVA={withTVATotal}
                TVA={valueTVA}
            />
            <GeneratorPdf
                targetPdf={generatorTargetPdf}
                filename={generatorFilename}
            />
        </>
    )
};

export default ContentRender