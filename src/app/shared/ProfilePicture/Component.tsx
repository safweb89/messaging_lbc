import React, { FC } from 'react';

import Image from 'react-bootstrap/Image';

import styles from './ProfilePicture.module.css';


interface IProfilePictureProps {
    imagesrc?: string ;
    userStatus?: string;
    name: string | undefined;
    showStatus?: boolean;
    width?: number;
    height?: number;
    marginContainer?:string

}

const defaultProfilePic = 'https://i.stack.imgur.com/l60Hf.png';


export const ProfilePicture: FC<IProfilePictureProps> = ({ imagesrc = defaultProfilePic, showStatus, width = 40, height = 40, marginContainer='0.2rem' , name=''}: IProfilePictureProps): JSX.Element => {
    return (
        <div style={{margin: marginContainer}}>
            <Image  alt='profile picture' src={imagesrc} roundedCircle width={width} height={height} />
            {showStatus ? <div className={styles.absent} ></div> : null}
        </div>
    );
}
