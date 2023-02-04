import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";



function Success (){
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        //clear store
        let action = {type: "CLEAR"};
        dispatch(action);


        //take to /feeling
        history.push("/feeling");
    }
    return (
    <>
    <h1>Success</h1>
    <button onClick={handleClick}>Submit another feedback survey</button>
    </>
    );
}

export default Success;