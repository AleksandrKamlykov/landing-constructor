import React, { JSXElementConstructor, useCallback, useEffect, useState } from 'react';
import { Inputtext } from '../TextInput/TextInput';
import classes from './select.module.scss';
import { ISelect } from './selectInterface';
import cancel from '../images/cancel.svg';
import arrowBottom from '../images/arrow-bottom.svg';

export const Select: JSXElementConstructor<ISelect> = ({ value, onChange, placeholder, searchFilter, fullWidth, defaultValue }) => {

    const [openList, setOpenList] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState<string>(defaultValue || value[0].name || '');

    const openHandler = () => setOpenList(prev => !prev);
    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => setSearchInput(event.target.value);
    // const cancelHandler = () => {
    //     setSearchInput('');
    //     onChange('');
    // };
    const clickHandler = (event: any) => {
        const value = event.target.getAttribute('data-value');
        const text = event.target.textContent;

        onChange(value);
        setSearchInput(text);
        setOpenList(false);
    };

    const closer = useCallback((event: any) => {

        if (!event.target.getAttribute('data-list')) {
            setOpenList(false);
        };
    }, []);

    useEffect(() => {

        if (openList) {
            document.addEventListener('mousedown', closer);
        }
        return () => document.removeEventListener('mousedown', closer);

    }, [openList, closer]);

    useEffect(() => {
        onChange(value[0].value);
    }, []);

    const filterValue = (data: any[]) => {
        if (!searchFilter || !searchInput) return data;

        return data.filter(({ name }: { [key: string]: string; }) => name.toString().toLowerCase().includes(searchInput.toLowerCase()));
    };


    const classNames = [classes.wrapper];

    if (fullWidth) {
        classNames.push(classes.fullWidth);
    }

    return (<div className={classNames.join(' ')}>
        <div onFocus={openHandler}  >
            <Inputtext fullWidth placeholder={placeholder ?? ''} value={searchInput} onChange={searchHandler} />
            <img data-open={true} onClick={openHandler} height={24} src={arrowBottom} alt='open menu' />

        </div>
        <ul style={{ display: !openList ? 'none' : 'block' }} className={classes.list}>
            {
                filterValue(value).map(({ id, name, value }: { [key: string]: string; }) => (
                    <li
                        data-list={true}
                        key={id}
                        data-value={value}
                        onClick={clickHandler}
                    >
                        {name}
                    </li>
                ))
            }
        </ul>
    </div>);
};