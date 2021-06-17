import { ProfilePicture } from 'app/shared';
import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";


import styles from './MessagingHeader.module.css';
import { IUser } from 'app/types';


interface IMessagingHeaderProps {
    users?: Array<IUser>;
}

export const MessagingHeader: FC<IMessagingHeaderProps> = ({ users}: IMessagingHeaderProps): JSX.Element => {

    return (
        <Row className={styles.root}>
            <Col className={styles.container} sm={4} >
                {users?.map(user => <ProfilePicture key={user.id} showStatus={false} width={20} height={20} imagesrc={user.avatar} name={user.name} /> )}
            </Col>
            <Col className={styles.headerIconContainer} sm={4} md={{ span: 4, offset: 4 }}>
                <Button><AiOutlineSearch size={20} color="grey" /></Button>
                <Button><AiOutlinePhone size={20} color="grey"  /></Button>
                <Button><AiOutlineVideoCamera size={20} color="grey"  /></Button>
                <Button><AiOutlineUsergroupAdd size={20} color="grey"  /></Button>
            </Col>
        </Row>
    );
}
