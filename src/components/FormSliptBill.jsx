import Button from "./Button.jsx";

export default function FormSliptBill(){
    return(
        <form className='form-split-bill'>
            <h2>Split a bill with X</h2>

            <labe>💰Bill value</labe>
            <input type='number'/>

            <labe>👤 Your expense</labe>
            <input type='number'/>

            <labe>👬 X's expense</labe>
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