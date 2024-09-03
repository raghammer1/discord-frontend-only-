import { styled } from '@mui/material';
import { connect } from 'react-redux';
import MessagesHeader from './MessagesHeader';
import DUMMY_MESSAGES from './DUMMY_MESSAGES';
import Message from './Message';
import DateSeperator from './DateSeperator';

const MainContainer = styled('div')({
  overflow: 'auto',
  height: 'calc(100vh - 240px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <div>
      <MessagesHeader name={chosenChatDetails?.name} />
      <MainContainer>
        {messages.map((message, index) => {
          const sameAuthor =
            index > 0 &&
            messages[index].author._id === messages[index - 1].author._id;

          const sameDay =
            index > 0 &&
            convertDateToHumanReadable(new Date(message.date), 'dd/mm/yyyy') ===
              convertDateToHumanReadable(
                new Date(messages[index - 1].date),
                'dd/mm/yyyy'
              );
          console.log(messages);

          return (
            <div key={message._id} style={{ width: '97%' }}>
              {(!sameDay || index === 0) && (
                <DateSeperator
                  date={convertDateToHumanReadable(
                    new Date(message.date),
                    'dd/mm/yyyy'
                  )}
                />
              )}
              <Message
                key={message._id}
                content={message.content}
                username={message.author.username}
                sameAuthor={sameAuthor}
                date={convertDateToHumanReadable(
                  new Date(message.date),
                  'dd/mm/yyyy'
                )}
                sameDay={sameDay}
              />
            </div>
          );
        })}
      </MainContainer>
    </div>
  );
};

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};

const mapStoreToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreToProps, null)(Messages);
