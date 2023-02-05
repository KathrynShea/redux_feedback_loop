import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
  const [allFeedback, setAllFeedback] = useState([]);

  useEffect(() => {
    console.log("in useEffect");

    getAllFeedback();
  }, []);

  const getAllFeedback = () => {
    //getting all the feedback from the database to display
    axios
      .get("/feedback")
      .then((res) => {
        console.log("successfully got feedback from server", res.data);
        setAllFeedback(res.data);
      })
      .catch((err) => console.log("error getting feedback from server", err));
  };
  //console.log("allfeedback is", allFeedback);

  return (
    <>
      <table class="table table-hover">
        <thead>
          <tr class="table-dark">
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {allFeedback.length !== 0 &&
            allFeedback.map((item, index) => {
              return (
                <tr key={index} class="table-dark">
                  <td>{item.feeling}</td>
                  <td>{item.understanding}</td>
                  <td>{item.support}</td>
                  <td>{item.comments}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
