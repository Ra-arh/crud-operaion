import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([])

  const navigate = useNavigate();

  useEffect(() =>{
    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])

  //Delete
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete...?");
    if(confirm){
      axios.delete('http://localhost:3000/users/' + id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
    }
  }


  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h1>User list</h1>
        <div className="w-75 rounded bg-white border shadow p-4">
          <div className="d-flex justify-content-end">
            <Link to="/add" className="btn btn-success">Add</Link>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  data.map((d, i) => (
                    <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.username}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                    <td>{d.address}</td>
                    <td>
                      <Link to={`/read/${d.id}`} className="btn btn-sm m-2 btn-info">Read</Link>
                      <Link to={`/update/${d.id}`} className="btn btn-sm m-2 btn-primary">Edit</Link>
                      <button onClick={e => handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                    </td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
        </div>
    </div>
  )
}

