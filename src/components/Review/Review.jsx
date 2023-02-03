import { useSelector } from "react-redux";

function Review (){
    const feedback = useSelector(store => store);

    //console.log("this is all the feeback we got back in the review", feedback);

    let feeling = feedback.feeling;
    let understanding = feedback.understanding;
    let support = feedback.support;
    let comments = feedback.comments;

    return (<>
    <h1>Review</h1>
    <h4>Feeling: {feeling}</h4>
    <h4>Understanding: {understanding}</h4>
    <h4>Support: {support}</h4>
    <h4>Comments: {comments}</h4>
    </>);
}

export default Review;