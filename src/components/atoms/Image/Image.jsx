import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
    imgSize: {
        width: ({ imgWidth }) => imgWidth,
        height: ({ imgHeight }) => imgHeight
    }
}));

const Image = ({
    imgSrc,
    imgAlt,
    imgWidth,
    imgHeight
}) => {
    const classes = useStyle({ imgWidth, imgHeight });

    return <img src={imgSrc} alt={imgAlt} className={classes.imgSize} />
};

export default Image;