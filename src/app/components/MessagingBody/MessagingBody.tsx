import React, { useRef, useEffect, FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import MessagingItem from './MessagingItem';
import ListGroup from 'react-bootstrap/ListGroup';

import { IConversation, IMessage } from 'app/types';


interface IMessagingBodyProps {
    conversationData: IConversation | undefined;
}


export const MessagingBody: FC<IMessagingBodyProps> = ({ conversationData }: IMessagingBodyProps): JSX.Element => {


    const messagesEndRef = useRef<HTMLLIElement>(null)

    const scrollToBottom = () => {
      messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(scrollToBottom, [conversationData]);

    return (
        <ListGroup as='ul' >
            <Row >
                <Col>
                    {conversationData?.messages?.map((message: IMessage) => (
                        <MessagingItem refelem={messagesEndRef} key={`${conversationData?.id}-${message?.time}`} message={message} me={conversationData?.me}/>)
                    )}
                </Col>
            </Row>
        </ListGroup>
    );
}
