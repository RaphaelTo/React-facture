import React from 'react';
import Text from '../../atoms/Text/Text';

const GetDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return <Text tag="p">{`${dd}/${mm}/${yyyy}`}</Text>
};

export default GetDate;