import React from 'react'
// import {useParams} from 'react-router-dom';
// import {Navigate} from 'react-router-dom';
import {Navigate, useNavigate, Route, Routes} from 'react-router-dom';


const Post = () => {
  // const params = useParams() 
  const status = 200
  // const status = 404

  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello')
    navigate('/about')
  }

  if(status === 404){
    return <Navigate to ='/notfound' />
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello world</h1>} />
      </Routes>
    {/* <h1>Post {params.id}</h1> */}
    {/* <p>Name: {params.name}</p> */}
    </div>
  )
  //  return (
  //   <div>
  //     <h1>Post</h1>
  //   </div>
  // )
}

export default Post;