import React, { useState } from 'react';
import { Menu } from '../../Components/Menu/Menu';
import classes from './constructor.module.scss';

export const Constructor = () => {

    const [elements, setElements] = useState<any[]>([]);

    function addElement(elem: any) {
        setElements((prev) => ([...prev, elem]));
    }
    function removeElement(id: number) {
        setElements((prev: any[]) => {
            return prev.filter((elem: any) => elem.id !== id);
        });
    }

    return (<div className={classes.wrapper}>
        <Menu
            addElement={addElement}
            removeElement={removeElement}
            elementsCount={elements.length}
        />
        <div className={classes.previewBlock}>
            {
                elements.length > 0 && elements.map((elem: any) => {
                    return React.createElement(elem.type, {
                        style: {
                            padding: 10,
                            backgroundColor: elem.data.bgColor
                        },
                        ...elem.data,
                        key: elem.id,

                    },
                        `${elem.data.value || ''}`
                    );
                })
            }
        </div>
    </div>);
};