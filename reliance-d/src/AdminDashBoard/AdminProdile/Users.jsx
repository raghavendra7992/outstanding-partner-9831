import React, { useEffect, useState } from 'react'
import "./users.css"

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};



export default function Users() {

  const [data, setData]= useState()
  useEffect(() => {
    getData(`https://reqres.in/api/users`).then((res) => {
      setData(res);
    });
  }, []);


  return (
    <div><div>
    <table id="tabl">
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    {data && data.data.map((e)=>(
      <tr id={e.id} key={e.id}>
      <td>{e.first_name}</td>
      <td>{e.last_name}</td>
      <td>{e.email}</td>
    </tr>
    ))}
    </table>
    </div>
          
    </div>
  )
}
