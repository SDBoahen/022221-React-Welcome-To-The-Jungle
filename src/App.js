import logo from './logo.svg';
import './App.css';




import React from 'react';
import { render } from '@testing-library/react';


import Header from './header'


// import reActorsList from "./reActorList"
////  WE GOT YELLED AT FOR IMPROPER CASING  ////
import ReActorsList from "./reActorList"

  // import ReActor from "./reActors"

import ReActorNEWForm from "./reActorNEWForm"










function App() {


  const names = [ "Sam", "Corinna", "Juan",
   
    "Amelia", "Andrés", "Angelo", "Bhavani V", 
    "Carson", "Chris", "Cel", "Christian", 
    "Elena", "Ekaynuh", "G", "Jess", "Julian",
    "Kelvin", "Kevin J", "Kyle", "Leonetti",
    "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
    "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"
  ]  // In App 
     //// NOT THE SAME AS names[] in all other Components - State is Local and NOT SHARED 📜🤓
  

     //  Global/"Parent" Function
     const treeTopAppBell =()=>{ console.log("🌳🔔diiing🎶✨") }
     //  !!  IF WE PASSED AN ARRAY; THAT THING IS AN ARRAY - SAME FOR FUNCTIONS
  
     
  // MakeACard
  return (
    <div className="App">
      <header className="App-header">
        

        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        

        {/* < IMG /> */}
          {/* <h1>YURRR</h1> */}
          <img src={logo} className="App-logo" alt="logo" />

            {/* 
              <img src={logo} className="App-logo" alt="logo" />
              <img src={logo} className="App-logo" alt="logo" /> 
            */}




                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <ReActorNEWForm theBell={treeTopAppBell} /> 
                {/* a={actorName} */}
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                {/* YOU CAN'T PASSING THINGS UP  ~  'Why Fight Gravity ?🧘' */}
                




          




                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                {/* <ReActorNEWForm /> */}
                <br/><br/><br/><br/>

                <ReActorsList n={names} />
                {/* name={this.name} */}




              {/* <reActorList /> */}

              {/* <Followers userID={u} />
              <Post/> <<<< like buton image ><</like> */}














          <ul>
              {names.map(name =>{ return( name + "!") })}

              {/* {
                names.map(name =>{ return name + "!" })
              } */}

              < Header />
              {
                names.map(name =>{ return( 
                  // <>
                  <div className="Almost">
                    <h2>🍃 {name + "!"} 🍃</h2>
                    < Header />

                  </div>
                  // </>
                  ) 
                })
              }
              
          </ul>




          {/* 

            < Header />
              <h1>{names[0]}</h1>
            < Header />
              <h1>{names[1]}</h1>
            < Header />
              <h1>{names[2]}</h1>
            < Header />
            < Header />
            < Header />
            < Header />
            < Header />
            < Header /> 
          
          */}




          {/*  Just Messing Around  */}
          {/* <code>

          < Header />

          </code> */}
        
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}


        <br/><br/><br/><br/><br/><a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>
    </div> 


  );  // CLOSING OUT  return( ---  );
}  //  CLOSING OUT OUR  class {  ---  }
export default App;
// <App />

















// class App extends React.Component { render(){
  

//   // MakeACard
//   return (
//     <div className="App">
//       <header className="App-header">
        
        
//         {/* < IMG /> */}
//           {/* <h1>YURRR</h1> */}
//           <img src={logo} className="App-logo" alt="logo" />

//             {/* 
//               <img src={logo} className="App-logo" alt="logo" />
//               <img src={logo} className="App-logo" alt="logo" /> 
//             */}


//           <ul>
//               {names.map(name =>{ return( name + "!") })}

//               {/* {
//                 names.map(name =>{ return name + "!" })
//               } */}

//               < Header />
//               {
//                 names.map(name =>{ return( 
//                   // <>
//                   <div className="Almost">
//                     {/* < ReActor /> */}
//                       <h2>{name + "!"}</h2>
//                     < Header />

//                   </div>
//                   // </>
//                   ) 
//                 })
//               }
              
//           </ul>


//               <ReActorsList />

//               {/* <reActorList /> */}

//               {/* <Followers userID={u} />
//               <Post/> <<<< like buton image ><</like> */}




//           {/* 

//             < Header />
//               <h1>{names[0]}</h1>
//             < Header />
//               <h1>{names[1]}</h1>
//             < Header />
//               <h1>{names[2]}</h1>
//             < Header />
//             < Header />
//             < Header />
//             < Header />
//             < Header />
//             < Header /> 
          
//           */}




//           {/*  Just Messing Around  */}
//           {/* <code>

//           < Header />

//           </code> */}
        
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}


//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>


//       </header>
//     </div> 
//   );}


// }
// export default App;