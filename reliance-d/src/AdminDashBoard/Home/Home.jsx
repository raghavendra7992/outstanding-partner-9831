import { useEffect } from "react"
import { useState } from "react"

// import 'home.css'

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

function Home() {
  const [data, setData]= useState()
  useEffect(() => {
    getData(`https://reqres.in/api/users`).then((res) => {
      setData(res);
    });
    // 3. DATA SHOULD BE CHANGED BASIS THE PAGE NUMBER
  }, []);

 

  // useEffect(()=>{

  //   setData(getData().then((res)=>{
  //     console.log(data)
  //   }))

  // },[])
  
// const userData = data.data.length;

// console.log(userData)

// var sum = 0;
// for(var i=1; i <= userData ; i++){
//     sum = i
//     console.log(sum)
// }


  return (
    <div>



<div>
<thead style={{border:"1px solid red"}} >
       <tr>
       <td>Name</td>
        <td>email</td>
        <td>Location</td>
       </tr>
      </thead>
{data && data.data.map((e)=>(
  <div key={e.id} id={e.id} >

     <table line >
     
      <tbody>
        <tr>
          <td>{e.first_name}</td>
          <td>{e.email}</td>
        </tr>
      
      </tbody>
     </table>

  </div>
))}
</div>
      



    </div>
  )
}


export default Home