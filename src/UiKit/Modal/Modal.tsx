import React, { JSXElementConstructor } from 'react';
import { IModal } from './modalIntarface';
import classes from './modal.module.scss';
import cancel from '../images/cancel.svg';

export const Modal: JSXElementConstructor<IModal> = ({
    open,
    title,
    content,
    handleClose
}: IModal) => {

    function closeModal(event: any) {
        if (event.target.getAttribute('data-wrapper')) {
            handleClose();
        }
    }

    return (<div data-wrapper style={{ display: open ? 'flex' : 'none' }} className={classes.wrapper} onClick={closeModal}>
        <div className={classes.modalWrapper}>
            <div className={classes.title}>
                <h4>
                    {title}
                </h4>

                <img onClick={handleClose} src={cancel} height={24} alt="Close Modal" />
            </div>

            {content}

        </div>
    </div>);
};