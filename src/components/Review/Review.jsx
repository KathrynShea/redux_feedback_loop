import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


function Review (){
    const feedback = useSelector(store => store);
    const history = useHistory();

    //console.log("this is all the feeback we got back in the review", feedback);

    let feeling = feedback.feeling;
    let understanding = feedback.understanding;
    let support = feedback.support;
    let comments = feedback.comments;

    const handleSubmit = () => {
        axios.post('/feedback', feedback )
        .then((res) =>{
                console.log("got a successful post response");
                history.push('/success');
        }).catch((err) => {
            console.log("error in posting feedback");
        });
        

    }

    return (<>
    <h1>Review</h1>
    <h4>Feeling: {feeling}</h4>
    <h4>Understanding: {understanding}</h4>
    <h4>Support: {support}</h4>
    <h4>Comments: {comments}</h4>
    <button onClick={ () => history.push('/comments')}>Back</button>
    <button onClick={handleSubmit}>Submit</button>
    
    </>);
}

export default Review;