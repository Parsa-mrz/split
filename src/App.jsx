import FriendList from "./components/FriendList.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import Button from "./components/Button.jsx";
import FormSplitBill from "./components/FormSplitBill.jsx";
import {useState} from "react";
const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

export default function App() {
    const[showAddFriend,setShowAddFriend] =useState(false)
    const [friends,setFriends] =useState(initialFriends)
    const[selectedFriend,setSelectedFriend] = useState(false)

    function  handleAddFriend(friend){
        setFriends((friends)=>[...friends,friend])
        setShowAddFriend(false)
    }

    function handleSelection(friend){
        setSelectedFriend((cur) => friend.id === cur?.id ? null : friend)
        setShowAddFriend(false)
    }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection}/>

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}

        <Button onClick={() => setShowAddFriend((show) => !show)}>
            {showAddFriend ? 'Close' : 'Add friend'}
        </Button>

      </div>

        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
    </div>
  )
}
