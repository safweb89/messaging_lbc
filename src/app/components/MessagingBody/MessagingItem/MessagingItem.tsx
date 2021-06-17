import { ProfilePicture } from 'app/shared';
import React, { Ref } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

import MessageText from '../MessageText';


import styles from './MessagingItem.module.css';
import { IMessage, IUser } from 'app/types';


interface IMessagingItemProps {
    message: IMessage | undefined;
    me: IUser | undefined;
    refelem: Ref<HTMLLIElement>;
}

const isMe = ({ fromId, myId }: { fromId: number; myId: number }): boolean => fromId === myId;


const MessagingItem = ({message,me, refelem}:IMessagingItemProps) => {
    let fromId: number = message?.from?.id!;

    return (
        <ListGroup.Item as='li' className={styles.item} ref={refelem}>
            {isMe({ fromId: fromId, myId: me?.id! }) ?

                <Row className={styles.rootReceiver}>
                    <Col className={styles.pictoContainerReceiver} sm={1} >
                        <ProfilePicture showStatus={false} imagesrc={me?.avatar} name={me?.name} />
                    </Col>
                    <Col className={styles.messageTextReceiver} >
                        <MessageText message={message} />
                        <div className={styles.pictosContainer}>
                            {message?.to?.map(member =>
                                <ProfilePicture key={member?.id} showStatus={false} width={20} height={20} imagesrc={member.avatar} name={member.name} />)}
                        </div>
                    </Col>
                </Row>
                :
                <Row className={styles.rootSender}>
                    <Col className={styles.pictoContainerSender} sm={1} >
                        <ProfilePicture showStatus={false} imagesrc={message?.from?.avatar} name={message?.from?.name} />
                    </Col>
                    <Col className={styles.messageTextSender} >
                        <MessageText message={message} />
                        <div className={styles.pictosContainer}>
                            {message?.to?.map(member =>
                                <ProfilePicture key={member.id} showStatus={false} width={20} height={20} imagesrc={member.avatar} name={member.name} />)}
                        </div>
                    </Col>
                </Row>

            }
        </ListGroup.Item>
    );
}

export default MessagingItem;