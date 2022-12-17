import { useEffect } from "react"
import { useState } from "react"
// import './home.css'

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};


// https://relianceapi.onrender.com/


function Home() {
  const [data, setData]= useState()


  // const userData= data.data.length
// console.log(data)
// var sum = 0
// for(var i=1; i<data.data; i++){
// sum +=data.data[i]
// }
// console.log(sum)

  useEffect(() => {
    getData(`https://reqres.in/api/users`).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
<div>
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


export default Home