import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './SplitPane.module.css';

export interface ISplitPaneProps {
  left: React.ReactElement,
  right: React.ReactElement
}

export default function SplitPane({ left, right }: ISplitPaneProps) {
  return (
    <Container fluid>
      <Row className={styles.root}>
        <Col id='left' style={{ "backgroundColor": "#f5f7fb"}} sm={4}>{left}</Col>
        <Col id='right' sm={8}>{right}</Col>
      </Row>
    </Container>
  );
}

