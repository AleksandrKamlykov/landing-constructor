import { ReactElement } from 'react';

export interface IModal {
    open: boolean;
    title: string;
    content?: ReactElement;
    handleClose: () => void;
}