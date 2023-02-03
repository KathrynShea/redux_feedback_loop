import { useState } from "react";
import { useDispatch } from "react-redux";



function Feeling (){
    const [feeling, setFeeling] = useState();

    const dispatch = useDispatch();

    const handleSubmit = () => {
        //console.log("you are in handle submit!", feeling);

        let action = {type: "ADD_FEELING", payload: feeling};
        dispatch(action);
    }
    return(
    <>

        <section>
            <h3>How are you feeling today?</h3>
    
            <select id="feeling" name="feeling" value={feeling} onChange={e =>setFeeling(e.target.value)}>
                <option value="0">---please select---</option>
                <option value="1">1 (feeling very bad)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6 (feeling great!)</option>
            </select>
        <button onClick={handleSubmit}>Next</button>
        </section>
    </>);
}

export default Feeling;