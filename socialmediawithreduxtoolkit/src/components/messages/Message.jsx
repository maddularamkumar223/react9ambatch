import { useDispatch, useSelector } from "react-redux";
import Style from "./messages.module.css";
import { useEffect, useState } from "react";
import { fetchMessages, sendMessage } from "./../../apiCalls/MessageThunk";

const Message = () => {
  let { users, currentUser } = useSelector((state) => state.auth);
  let { messages, loading } = useSelector((state) => state.messages);
  console.log(messages);

  let filterTheFollowingUsers = users?.filter((user) =>
    currentUser?.following.includes(user?.id),
  );
  let [message, setMessage] = useState("");
  let [messageUser, setMessageUser] = useState(null);
  let filterMessages = messages.filter(
    (message) =>
      (message.senderId === currentUser?.id &&
        message.receiverId === messageUser?.id) ||
      (message.senderId === messageUser?.id &&
        message.receiverId === currentUser?.id),
  );
  console.log(filterMessages);
  let handleChange = (e) => {
    setMessage(e.target.value);
  };
  let dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();

    let messageDetails = {
      message: message,
      receiverId: messageUser.id,
      senderId: currentUser.id,
    };
    dispatch(sendMessage(messageDetails));
    setMessage("");
  };
  useEffect(() => {
    dispatch(fetchMessages());
  }, [loading]);
  return (
    <section id={Style.messageContainer}>
      <article id={Style.displayUsers}>
        {filterTheFollowingUsers?.map((user) => {
          return <p onClick={() => setMessageUser(user)}>{user.name}</p>;
        })}
      </article>
      <article id={Style.displayMessages}>
        <div>{messageUser?.name}</div>
        <div>
          {filterMessages?.map((message) => {
            return <p>{message.message}</p>;
          })}
        </div>
        <div id={Style.sendMessages}>
          <form action="" onSubmit={handleSubmit}>
            <aside>
              <input
                type="text"
                placeholder="Enter Your Message"
                value={message}
                onChange={handleChange}
              />
            </aside>
            <aside>
              <button>Submit</button>
            </aside>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Message;
