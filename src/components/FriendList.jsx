import Friend from "./Friend.jsx";
export default function FriendList({friends}){
    return (
        <ul>
            {friends.map((friend,index) => <Friend key={index} friend={friend}/>)}
        </ul>
    )
}