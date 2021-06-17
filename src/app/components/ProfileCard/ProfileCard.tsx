import React, { FC } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ProfilePicture } from 'app/shared';

import styles from './ProfileCard.module.css';


interface IProfileCardProps {
    imagesrc: string;
    showStatus: boolean;
    name: string;
    userStatus: string;
}


export const ProfileCard: FC<IProfileCardProps> = ({ imagesrc, showStatus, name ,userStatus}: IProfileCardProps): JSX.Element => {

    return (
        <Row className={styles.profileCardContainer}>
            <Col xs={4} md={4} >
                <ProfilePicture userStatus={userStatus} showStatus={showStatus} name={name} imagesrc={imagesrc} marginContainer=".2rem 1rem" />
                <div className={styles.container}>
                    <div className={styles.userName}>{name}</div>
                </div>

            </Col>
        </Row>
    );
}
