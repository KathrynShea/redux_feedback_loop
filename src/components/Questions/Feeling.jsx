import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function Feeling() {
  const [feeling, setFeeling] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    //console.log("you are in handle submit!", feeling);
    if (feeling === "") {
      swal("Please make a selection", "", "warning");
    } else {
      console.log("this is feeling", feeling);

      //send input to store
      let action = { type: "ADD_FEELING", payload: feeling };
      dispatch(action);

      history.push("/understanding");
    }
  };
  return (
    <>
      <section>
        <h3>How are you feeling today?*</h3>

        <select
          class="form-control form-control-sm"
          id="feeling"
          name="feeling"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
        >
          <option value="">---please select---</option>
          <option value="1">1 (feeling very bad)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6 (feeling great!)</option>
        </select>

        <button type="button" class="btn btn-primary" onClick={handleSubmit}>
          Next
        </button>
      </section>
    </>
  );
}

export default Feeling;
