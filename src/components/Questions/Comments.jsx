import { useState } from "react";
import { useDispatch } from "react-redux";

function Comments (){
    const [comments, setComments] = useState();

    const dispatch = useDispatch();

    const handleSubmit = () => {
        //console.log("you are in handle submit!", comments);

        let action = {type: "ADD_COMMENTS", payload: comments};
        dispatch(action);

    }
    return(
    <>
        <section>
        <h3>Any comments you want to leave?</h3>
        <input
          id="comments"
          name="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          />
        <button onClick={handleSubmit}>Next</button>
        </section>
        </>);
}

export default Comments;
