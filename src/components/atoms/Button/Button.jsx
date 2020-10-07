import React from 'react';

const Button = ({
    children = 'Valider',
    onClick
}) => {
    return <button data-testid="button-test" onClick={onClick}>{children}</button>
};

export default Button;