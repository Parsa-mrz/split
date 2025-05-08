import Button from "./Button.jsx";

export default function FormSplitBill({selectedFriend}){
    return(
        <form className='form-split-bill'>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <labe>💰Bill value</labe>
            <input type='number'/>

            <labe>👤 Your expense</labe>
            <input type='number'/>

            <labe>👬 {selectedFriend.name}'s expense</labe>
            <input disabled type='number'/>

            <labe>🤑 Who is paying the bill?</labe>
            <select>
                <option value='user'>
                    You
                </option>
                <option value='friend'>
                    X
                </option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}