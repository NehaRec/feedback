import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import React from 'react'
import FeedbackList from './components/FeedbackList';
import AboutIconLink from './components/AboutIconLink';
// import FeedbackItem from './components/FeedbackItem';
import Header from './components/Header';
// import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import  AboutPage from './pages/AboutPage';
// import Post from './components/Post';

import {FeedbackProvider} from './context/FeedbackContext';
// import FeedbackContext from './context/FeedbackContext'


function App() {


  return (
   <FeedbackProvider> 
    <Router>
        <Header />
        <div className="container">
          <Routes>           
            <Route exact path = '/' element={
              <>
                  <FeedbackForm/>
                  <FeedbackStats />
                  <FeedbackList />        
              </>
            }>
           </Route>

            {/* <Route path='/about'> this is the about route </Route> */}
            <Route path='/about' element={<AboutPage/>} />
            {/* <Route path='/post/*' element={<Post />} /> */}
            {/* <Route path='/post/:id/:name' element={<Post />} /> */}

          </Routes>

           {/* <Card>
              <NavLink to='/' activeClassName='active'>Home</NavLink>
              <NavLink to='/about' activeClassName='active'> About </NavLink>
           </Card>           */}

          <AboutIconLink />
          
       </div>
    </Router>
   </FeedbackProvider> 
  )
}

export default App;


// const comments=[
//     {id: 1, text: 'comment one'},
//     {id: 2, text: 'comment two'},
//     {id: 3, text: 'comment three'}
//   ]

// const loading = false
// const showComments = true

// const commentBlock = (
// <div className="comments">
//           <h3>Comments {comments.length} </h3>
//           <ul>
//             {comments.map((comment,index) => (
//                <li key={comment.id}>{comment.text}</li>
//             ))}
//           </ul>
//     </div> )

// if(loading) return <h1>Loading...</h1>

//   return (
//     <>
//     <h1>{title.toUpperCase()}</h1>
//     <p>{body}</p>
//     {showComments && commentBlock}
//     </>
//   )
// }

