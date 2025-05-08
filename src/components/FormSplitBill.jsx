import Button from "./Button.jsx";
import {useState} from "react";

export default function FormSplitBill({selectedFriend}){
    const[bill,setBill]=useState(0);
    const[paidByUser,setPaidByUser] = useState(0);
    const[whoIsPaying,setWhoIsPaying]=useState('user')
    const paidByFriend = bill ? bill - paidByUser : 0;
    return(
        <form className='form-split-bill'>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <labe>💰Bill value</labe>
            <input type='number' value={bill} onChange={(e) => setBill(Number(e.target.value))}/>

            <labe>👤 Your expense</labe>
            <input type='number' value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>

            <labe>👬 {selectedFriend.name}'s expense</labe>
            <input disabled type='number' value={paidByFriend}/>

            <labe>🤑 Who is paying the bill?</labe>
            <select value={whoIsPaying} onChange={(e)=> setWhoIsPaying(e.target.value)}>
                <option value='user'>
                    You
                </option>
                <option value='friend'>
                    {selectedFriend.name}
                </option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}