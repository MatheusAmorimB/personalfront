import React from "react";
import { InputPersonalizado } from './styles'

const InputLogin = ({
    name,
    placeholder,
    onChange,
    type
}) => {
    return(
        <InputPersonalizado 
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
        />
    );
}

export default InputLogin;