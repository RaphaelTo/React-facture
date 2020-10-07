import React from 'react';

const tuplesType = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number',
    'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];


const Input = ({
    type = 'text',
    onChange,
    inputValue,
    refInput,
    name
}) => {

    const checkType = tuplesType.includes(type) ? type : 'text';

    return <input type={checkType} data-testid="input-test" onChange={onChange} value={inputValue} name={name} ref={refInput} />
};

export default Input;