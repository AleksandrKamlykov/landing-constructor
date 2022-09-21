import { HTMLInputTypeAttribute } from "react";

export interface ITextArea {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    fullWidth?: boolean | undefined;
    placeholder?: string;
    disabled?: boolean | undefined;
    name?: string;
    required?: boolean;
    resize?: 'both' | 'vertical' | 'horizontal' | 'none' | undefined;
}