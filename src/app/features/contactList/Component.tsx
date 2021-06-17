import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from 'app/redux/hooks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { AiOutlineSearch } from 'react-icons/ai';

import { ContactItem, ProfileCard } from 'app/components';

import { IConversation, IUser } from 'app/types';
import { selectUsers } from 'app/redux/reducers/userSlice';
import { selectConversation } from 'app/redux/reducers/conversationSlice';
import { setSelectedConversation, selectSelectedConversation } from 'app/redux/reducers/chatSlice';

import styles from './ContactList.module.css';

export interface IContactListProps {
  data?: {
    conversation: Array<IConversation>,
    users: Array<IUser>
  }
}

export default function ContactList(props: IContactListProps) {

  const dispatch = useAppDispatch();
  let users = useAppSelector(selectUsers);
  const selectedConversation = useAppSelector(selectSelectedConversation);

  let conversations = useAppSelector(selectConversation);
  const [searchValue, setsearchValue] = useState('');
  const [filtredUsers, setFiltredUsers] = useState(users);
  const [filtredConversations, setFiltredConversations] = useState(conversations);
  const [activeItem, setActiveItem] = useState(selectedConversation);

  const handleOnChange = (e: any) => {
    if (e?.target?.value?.length === 0) {
      setFiltredUsers(users);
      setFiltredConversations(conversations);
    }else {
      const userSearchResult = users.filter(user => user.name?.toUpperCase().includes(searchValue.toUpperCase()));
      userSearchResult.length > 0 ? setFiltredUsers(userSearchResult) : setFiltredUsers(users);
    }
    
    setsearchValue(e?.target?.value);
  
  }

  const handleOnItemClick = (id: string) => {
    const selectedConversationData = filtredConversations.filter(item => item.id === id)?.shift();
    setActiveItem(id);
    dispatch(setSelectedConversation({ id, conversation: selectedConversationData }));
  }


  return (
    <Container className={styles.root}>
      <Row className={styles.searchBlock}>
        <span><h4>Chat</h4></span>
        <InputGroup>
          <InputGroup.Prepend style={{display:'flex'}} >
            <InputGroup.Text className={styles.searchInput} id="btnGroupAddon"><AiOutlineSearch /></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            placeholder="Search messages or users"
            aria-label="Input search group"
            aria-describedby="btnSearchGroup"
            className={styles.searchInput}
            onChange={handleOnChange}
          />
        </InputGroup>
      </Row>

      <Row className={styles.profilesBlock}>
        {filtredUsers?.map(({ status, id, avatar, name }) =>
          <ProfileCard userStatus={status} key={id} showStatus={true} imagesrc={avatar} name={name} />
        )}
      </Row>
      <Row id='messagesBlock'>
        <Col>
          <span><h4>Recent</h4></span>
          <ListGroup as='ul'>
            {
              filtredConversations.map(conv => (<ContactItem active={activeItem === conv.id} handleOnClick={(e) => handleOnItemClick(conv.id)} key={conv.id} data={conv} />))
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
