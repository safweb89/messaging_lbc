import { ProfilePicture } from 'app/shared';
import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from 'moment';

import ListGroup from 'react-bootstrap/ListGroup';

import styles from './ContactItem.module.css';
import { IConversation } from 'app/types';


interface IContactItemProps {
    active?: boolean;
    data: IConversation;
    handleOnClick?: (e: any) => void;
}


export const ContactItem: FC<IContactItemProps> = ({ active, data, handleOnClick }: IContactItemProps): JSX.Element => {
    const sortedMessages = data?.messages?.slice()?.sort((m1, m2) => parseInt(m1.time) - parseInt(m2.time))
    let lastMessage = sortedMessages[sortedMessages?.length - 1]

    return (
        <ListGroup.Item as='li' active={active} action onClick={handleOnClick} className={styles.contactItemRoot}>
            <>
                <Row onClick={() => handleOnClick}>
                    <Col>
                        <div className={styles.message}>{lastMessage.text}</div>
                    </Col>
                    <Col sm={2} className={styles.timeBadgeContainer}>
                        <div className={styles.time}>{moment.unix(parseInt(lastMessage.time)).utc().format('hh:mm')}</div>
                    </Col>
                </Row>
                <Row>
                    <Col className={styles.membersContainer}>
                        {data?.members.map(({ id, status, avatar, name }) =>
                            <ProfilePicture key={id} width={20} height={20} userStatus={status} showStatus={false} imagesrc={avatar} name={name} />
                        )}
                    </Col>
                </Row>
            </>
        </ListGroup.Item>
    );
}
