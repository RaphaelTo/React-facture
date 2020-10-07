import React from 'react';
import Pdf from "react-to-pdf";

import Button from '../../atoms/Button/Button';

const GeneratorPdf = ({
    targetPdf,
    filename
}) => {
    return (
        <Pdf targetRef={targetPdf} filename={filename}>
            {({ toPdf }) => <Button onClick={toPdf}>Télécharger le PDF</Button>}
        </Pdf>
    )
};

export default GeneratorPdf;