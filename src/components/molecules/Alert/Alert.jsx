import React from 'react';
import Text from '../../atoms/Text/Text';

const Alert = ({
    children
}) => {
    return <Text tag="p">{children}</Text>
};

export default Alert;