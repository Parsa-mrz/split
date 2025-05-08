import Friend from "./Friend.jsx";
export default function FriendList({friends,onSelection,selectedFriend}){
    return (
        <ul>
            {friends.map((friend,index) => <Friend key={index} onSelection={onSelection} selectedFriend={selectedFriend} friend={friend}/>)}
        </ul>
    )
}