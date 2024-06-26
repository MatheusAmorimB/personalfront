import React from 'react';
import { BotaoPersonalizado } from './styles'

const BotaoLogin = ({
    type,
    text,
    onClick,
    disabled,
}) => {
    return(
        <BotaoPersonalizado
        type={type}
        text={text}
        onClick={onClick}
        disabled={disabled}>    
            {text}
        </BotaoPersonalizado>
    );
}

export default BotaoLogin;