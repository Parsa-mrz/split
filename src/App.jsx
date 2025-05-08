import FriendList from "./components/FriendList.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import Button from "./components/Button.jsx";
export default function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList/>
        <FormAddFriend/>
        <Button>Add friend</Button>
      </div>
    </div>
  )
}
