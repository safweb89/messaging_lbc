import { createTestStore} from '../store';
import {
  sendMessage,
  setSelectedConversation,
} from './chatSlice';

let store:any;
describe('chat reducer', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  it('should handle setting the conversation ID', () => {
    const chat = store.dispatch(setSelectedConversation({id:'ABC', conversation: store.getState().chat?.conversation }));
    expect(chat?.payload?.id).toEqual('ABC')
  });

  it('should handle Sending Messages', () => {
    const messageData = {...store.getState().chat?.conversation?.messages.slice()?.shift(), time: '12345'}
    const message = store.dispatch(sendMessage(messageData));
    
    expect(message?.payload?.time).toEqual('12345')
  })

});
