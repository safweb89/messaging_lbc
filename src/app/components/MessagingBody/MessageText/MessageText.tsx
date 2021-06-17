import { IMessage } from 'app/types';
import moment from 'moment';
import React, { FC } from 'react';
import {IoTimeOutline} from 'react-icons/io5';

import styles from './MessageText.module.css';


interface IMessageTextProps {
    message?: IMessage;
}


export const MessageText: FC<IMessageTextProps> = ({message }: IMessageTextProps): JSX.Element => {
    let time : string = message?.time ?? '';
    return (
    <div className={styles.root}>
        <div>{message?.text}</div>
        <div className={styles.time}>
            <span><IoTimeOutline /></span>
            <span >{moment.unix(parseInt(time)).utc().format('hh:mm')}</span>
        </div>
    </div>
    );
}
