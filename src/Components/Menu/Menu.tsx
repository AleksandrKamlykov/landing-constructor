import React, { JSXElementConstructor, useEffect, useState } from 'react';
import { Button } from '../../UiKit/Button/Button';
import { Select } from '../../UiKit/Select/Select';
import { TextArea } from '../../UiKit/TextArea/TextArea';
import { Inputtext } from '../../UiKit/TextInput/TextInput';
import classes from './menu.module.scss';
import { typeList } from './variant.menu';

export interface ItypeItem {
    name: string;
    value: string;
    id: number;
}

export enum typeBlock {
    image = 'img', text = 'span', block = 'div', paragraph = 'p', form = 'form'
}

interface IMenu {
    addElement: (elem: any) => void;
    removeElement: (id: number) => void;
    elementsCount: number;
}

export const Menu: JSXElementConstructor<IMenu> = ({ addElement, removeElement, elementsCount }: IMenu) => {

    const [blockType, setBlockType] = useState<typeBlock>(typeBlock.image);
    const [blockData, setBlockData] = useState<{ [key: string]: string; }>({});

    useEffect(() => {
        if (blockType === typeBlock.form) {
            setBlockData({ input1: '' });
        }

    }, [blockType]);

    const addFormItem = () => {
        setBlockData((prev) => ({ ...prev, [`input${Object.keys(blockData).length + 1}`]: '' }));
    };

    function typeHandler(event: any) {
        setBlockType(event);
    }

    function datahandler(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {

        const name = event.target.name;
        const value = event.target.value;

        setBlockData((prev) => ({ ...prev, [name]: value }));
    }

    function SubmitAddElement(event: React.MouseEvent) {
        event.preventDefault();
        const newElem: any = {
            id: `${blockType}${elementsCount + 1}`,
            type: blockType,
            data: blockData
        };
        addElement(newElem);
        setBlockData({});
    }

    return (<form className={classes.menuWrapper}>
        <Select fullWidth value={typeList} onChange={typeHandler} />

        {
            blockType === typeBlock.image && <>
                <Inputtext
                    required
                    fullWidth
                    placeholder='Посилання для зображення'
                    name='src'
                    value={blockData.src}
                    onChange={datahandler}
                    type='url'

                />
                <Inputtext
                    required
                    fullWidth
                    placeholder='ALT текст'
                    name='alt'
                    value={blockData.alt}
                    onChange={datahandler}
                />

            </>
        }
        {
            blockType === typeBlock.paragraph && <>
                <TextArea
                    resize='vertical'
                    fullWidth
                    placeholder='Вкажіть текст'
                    name='value'
                    value={blockData.value}
                    onChange={datahandler}
                />
            </>
        }
        {
            blockType === typeBlock.text && <>
                <Inputtext
                    fullWidth
                    placeholder='Вкажіть текст'
                    name='value'
                    value={blockData.value}
                    onChange={datahandler}
                />
            </>
        }
        {
            blockType === typeBlock.form && <>
                {
                    Object.keys(blockData).map((key: string) => {
                        return (<Inputtext
                            key={key}
                            required
                            fullWidth
                            placeholder='Імʼя поля'
                            name={key}
                            value={blockData[key]}
                            onChange={datahandler}
                        />);
                    })
                }
                <Button
                    fullWidth
                    // color='success'
                    onClick={addFormItem}

                >
                    Додати пункт форми
                </Button>
            </>
        }
        <Inputtext
            type='color'
            //fullWidth
            placeholder='CSS стилі - css syntax'
            name='bgColor'
            value={blockData.bgColor}
            onChange={datahandler}
        />
        <Inputtext
            fullWidth
            placeholder='CSS стилі - css syntax'
            name='style'
            value={blockData.style}
            onChange={datahandler}
        />
        <Button
            fullWidth
            color='success'
            onClick={SubmitAddElement}
            type='submit'
        >
            Додати елемент
        </Button>
    </form>);
};