import React, { JSXElementConstructor } from 'react';
import { ITextArea } from './textareainterface';
import classes from './textArea.module.scss';

export const TextArea: JSXElementConstructor<ITextArea> = ({
    onChange,
    name,
    disabled,
    required,
    value,
    fullWidth,
    placeholder,
    resize
}: ITextArea) => {

    const classNames = [classes.textArea];

    if (fullWidth) {
        classNames.push(classes.fullWidth);
    }

    return (
        <textarea
            style={{ resize }}
            className={classNames.join(' ')}
            value={value}
            name={name}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};