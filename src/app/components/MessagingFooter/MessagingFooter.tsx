import React, { useState, FC } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiOutlineSend } from "react-icons/ai";
import moment from 'moment';

import DropdownSelector from './DropdownSelector/index'

import { useAppSelector, useAppDispatch } from 'app/redux/hooks';
import { IConversation, IUser } from 'app/types';
import { selectChat, sendMessage } from 'app/redux/reducers/chatSlice';

import { messageBuilder } from 'app/utils';

import styles from './MessagingFooter.module.css';


interface IMessagingFooterProps {
    users?: Array<IUser>;
}

const PUBLIC = '99999';

export const MessagingFooter: FC<IMessagingFooterProps> = ({ users }: IMessagingFooterProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const [messageText, setMessageText] = useState('');
    const [selectedUsers, setSelectedUsers] = useState<IUser | string | undefined>(PUBLIC);
    const converstationData: IConversation | undefined = useAppSelector(selectChat);
    const computeReceivers = () => {

        if (selectedUsers === PUBLIC || selectedUsers === undefined) {
            return converstationData?.members!;
        } else if (typeof selectedUsers !== 'string') {
            return [selectedUsers!];
        }
    }

    const message = messageBuilder({
        to: computeReceivers()!,
        from: converstationData?.me,
        text: messageText,
        time: moment().unix().toString()
    });

    const handleSendMessage = () => {


        dispatch(sendMessage(message));
        setMessageText('');
    }

    const handleInputChange = (e: any) => {
        setMessageText(e?.target?.value);
    }

    const handleChooseOption = (selectedOption: number) => {
        const chosenOption: IUser | undefined = converstationData?.members?.find((f: IUser) => f.id === selectedOption);
        chosenOption ? setSelectedUsers(chosenOption) : setSelectedUsers(PUBLIC);
        return chosenOption
            ? chosenOption.name
            : "Public";
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(sendMessage(message));
            setMessageText('');
        }
    }


    return (
        <Row className={styles.root}>
            <Col sm={9} className={styles.inputSelectContainer}>
                <input className={styles.inputStyle} value={messageText} onChange={(e) => handleInputChange(e)} placeholder="Enter Message ..." onKeyUp={e => handleKeyDown(e)} />
                <div className="dropdown">
                    <DropdownSelector chooseOption={handleChooseOption} data={converstationData?.members} classname={styles.dropdownStyle} />
                </div>
            </Col>
            <Col sm={3} className={styles.btnContainer} onClick={() => handleSendMessage()}>
                <Button style={{ color: "#fff" }} >
                    <AiOutlineSend />
                </Button>
            </Col>
        </Row>
    );
}
