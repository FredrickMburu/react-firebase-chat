import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import Login from "./components/login/Login";
import List from "./list/List"
import Notification from "./components/notification/Notification";
const App = () => {
const user = true;

  return (
    <div className='container'>
      {
        user ? (
          <>
          <List/>
          <Chat/>
          <Detail/>
          </>
        ) : (
          <Login/>
        )
      }
      <Notification/>
    </div>
  )
}

export default App