import React, { FC, useState } from 'react';
import classes from './inputtext.module.scss';
import { IInputText } from './interfaceInputtext';

export const Inputtext: FC<IInputText> = ({ value, onChange, fullWidth, placeholder, disabled, name, type = 'text', required = false }: IInputText) => {


    const classNames = [classes.inputText];

    if (fullWidth) {
        classNames.push(classes.fullWidth);
    }

    return (
        <input
            name={name}
            className={classNames.join(' ')}
            disabled={disabled}
            type={type}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
        />
    );
};