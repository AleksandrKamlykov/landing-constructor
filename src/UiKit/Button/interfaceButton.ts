import { ButtonHTMLAttributes } from "react";

export interface IButton {
    children: string;
    onClick: (event: React.MouseEvent) => void;
    size?: 'xs' | 'md' | 'lg' | undefined;
    color?: 'default' | 'warning' | 'success' | 'error' | 'primary' | 'active' | undefined;
    fullWidth?: boolean;
    variant?: 'text';
    type?: 'submit' | 'reset' | 'button' | undefined;

}