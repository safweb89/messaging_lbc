import React from 'react';

import SplitPane from 'app/features/splitPane';
import ContactList from 'app/features/contactList';
import Messaging from 'app/features/messaging';
import './App.css';

function App() {
  return (
    <div className="App">
      <SplitPane left={<ContactList />} right={<Messaging />} />
      
    </div>
  );
}

export default App;
