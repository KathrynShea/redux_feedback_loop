import { useState } from "react";
import { useDispatch } from "react-redux";

function Understanding (){
    const [understanding, setUnderstanding] = useState();

    const dispatch = useDispatch();

    const handleSubmit = () => {
        //console.log("you are in handle submit!", understanding);

        let action = {type: "ADD_UNDERSTANDING", payload: understanding};
        dispatch(action);

    }

    return(
    <>
  
        <section>
        <h3>How well are you understanding the content?</h3>
        <select id="understanding" name="understanding" value={understanding} onChange={e =>setUnderstanding(e.target.value)}>
                <option value="0">---please select---</option>
                <option value="1">1 (Not well)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6 (Very well)</option>
            </select>
        <button onClick={handleSubmit}>Next</button>
        </section>
    </>);
}

export default Understanding;