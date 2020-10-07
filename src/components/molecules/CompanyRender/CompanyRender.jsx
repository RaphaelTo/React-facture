import React from 'react';
import Text from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Image';

const CompanyRender = ({
    imgSrc,
    imgAlt,
    imgWidth,
    imgHeight,
    addressCompany,
    zipCompany,
    cityCompany
}) => {
    return (
        <>
            <Image imgSrc={imgSrc} imgAlt={imgAlt} imgHeight={imgHeight} imgWidth={imgWidth} />
            <Text tag="p" marginText={0}>{addressCompany}</Text>
            <Text tag="p" marginText={0}>{zipCompany} {cityCompany}</Text>
        </>
    )
};

export default CompanyRender;