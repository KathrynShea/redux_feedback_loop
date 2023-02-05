import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function Understanding() {
  const [understanding, setUnderstanding] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    //console.log("you are in handle submit!", understanding);
    if (understanding === "") {
      swal("Please make a selection", "", "warning");
    } else {
      console.log("this is understanding", understanding);

      //send input to store
      let action = { type: "ADD_UNDERSTANDING", payload: understanding };
      dispatch(action);

      history.push("/support");
    }
  };

  return (
    <>
      <section>
        <h3>How well are you understanding the content?*</h3>
        <select
          class="form-control form-control-sm"
          id="understanding"
          name="understanding"
          value={understanding}
          onChange={(e) => setUnderstanding(e.target.value)}
        >
          <option value="0">---please select---</option>
          <option value="1">1 (Not well)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6 (Very well)</option>
        </select>
        <button
          type="button"
          class="btn btn-light"
          onClick={() => history.push("/feeling")}
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

export default Understanding;
