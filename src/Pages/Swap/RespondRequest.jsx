import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Landing/DataContext";

function RespondRequest() {
  const { user } = useContext(DataContext)
  const [requestId, setRequestId] = useState([]);

  const accept = async (id, toid, title) => {
    await axios.post(`https://skill-swap-pro-app.onrender.com/accept-request`, {
      from: id,
      to: toid,
      _id: title
    });
    alert("Accepted");
  };

  const reject = async (id) => {
    await axios.post(`https://skill-swap-pro-app.onrender.com/reject-request/${id}`);
    alert("Rejected");
  };
  useEffect(() => {
    axios.get(`https://skill-swap-pro-app.onrender.com/fetchRequest/${user.UserName}`)
      .then((res) => {
        setRequestId(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex w-screen h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-center justify-center grid grid-cols-1 p-[5px] overflow-y-auto">
      <h1>Requests</h1>
      {requestId.map((req) => (
        <div key={req._id}>
          {req.status === "pending" ? <div className="flex flex-row justify-between items-center w-<86> h-15 bg-cyan-500 p-[5px] rounded-2xl mb-4"><p>{req.from} → {req.to}</p>
            <div className="flex justify-around gap-5">
              <button onClick={() => accept(req.from, req.to, req._id)}>Accept</button>
              <button onClick={() => reject(req._id)}>Reject</button>
            </div>
          </div> : <div>
            <div className="flex flex-row justify-between items-center w-<86> h-15 bg-cyan-500 p-[5px] rounded-2xl mb-4">
              <p>{req.from} → {req.to}</p>
              <h4>{req.status}</h4>
            </div>
          </div>}
        </div>
      ))}
    </div>
  );
}

export default RespondRequest;