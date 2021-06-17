import React, {useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useAppSelector } from 'app/redux/hooks';
import { MessagingHeader, MessagingBody, MessagingFooter } from 'app/components/index';

import styles from './Messaging.module.css';
import { IConversation } from 'app/types';

import {selectChat} from 'app/redux/reducers/chatSlice';


export default function Messaging() {

  const [conversation, setConversation] = useState<IConversation | undefined>();
  const converstationData: IConversation | undefined = useAppSelector(selectChat);

  
  useEffect(() => {
    setConversation(converstationData);
  },[converstationData])

  return (
    <Container fluid={'sm'} style={{ 'height': '100vh' }} >
      <Row className={styles.messagingHeaderContainer}>
        <Col style={{}}>
          <MessagingHeader users={conversation?.members} />
        </Col>
      </Row>
      <Row className={styles.messagingBodyContainer}>
        <Col>
          <MessagingBody conversationData={conversation} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MessagingFooter users={conversation?.members} />
        </Col>
      </Row>
    </Container>
  );
}
