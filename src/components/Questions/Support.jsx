import { useState } from "react";
import { useDispatch } from "react-redux";

function Support() {
    const [support, setSupport] = useState();

    const dispatch = useDispatch();

    const handleSubmit = () => {
        //console.log("you are in handle submit!", support);

        let action = {type: "ADD_SUPPORT", payload: support};
        dispatch(action);

    }
  return (
    <>

      <section>
        <h3>How well are you being supported?</h3>
        <select
          id="support"
          name="support"
          value={support}
          onChange={(e) => setSupport(e.target.value)}
        >
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
    </>
  );
}

export default Support;
