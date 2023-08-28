import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err=> console.log(err))
  })

  return (
    <div style={{ paddingLeft: "300px", paddingTop: "90px" }}>
      <Link to="/create" className="btb btn-success">
        {" "}
        <button type="button" className="btn btn-outline-success">
          Add +
        </button>
      </Link>
      <br />
      <br />
      <br />
      <table className="table table-dark" style={{ width: "700px" }}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`/update${user._id}`} className="btb btn-success">
                  {" "}
                  <button type="button" className="btn btn-outline-success">
                    Edit
                  </button>
                </Link>{" "}
                <button className="btn btn-outline-danger" >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
