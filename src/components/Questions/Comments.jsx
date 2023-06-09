import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    //console.log("you are in handle submit!", comments);

    //send input to store
    let action = { type: "ADD_COMMENTS", payload: comments };
    dispatch(action);
    history.push("/review");
  };
  return (
    <>
      <section>
        <h3>Any comments you want to leave?</h3>
        <input
          class="form-control form-control-sm"
          id="comments"
          name="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button
          type="button"
          class="btn btn-light"
          onClick={() => history.push("/support")}
        >
          Back
        </button>
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>
          Next
        </button>
      </section>
    </>
  );
}

export default Comments;
