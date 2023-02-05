import { useHistory } from "react-router-dom";

function StartPage(){
    let history = useHistory();

    const handleClick = () => {
      console.log("you clicked!", history);
      history.push("/feeling");
    }
    return (
        <button onClick={handleClick}>Begin Feedback</button>
    )

}

export default StartPage;