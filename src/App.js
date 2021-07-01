import logo from './logo.svg';
import './App.css';




import React from 'react';
import { render } from '@testing-library/react';
import {BrowserRouter, Switch} from 'react-router-dom'
//  ***  DISCLAIMER  ***  //




import LifecyclesInTheJungle from './lifecyclesInTheJungle'


import Header from './header'


// import reActorsList from "./reActorList"
////  WE GOT YELLED AT FOR IMPROPER CASING  ////
import ReActorsList from "./reActorList"

  // import ReActor from "./reActors"

import ReActorNEWForm from "./reActorNEWForm"









// function App(props) {
//   //  ***  >>>>  Class  >>>> 

  class App extends React.Component {


  //const 
  names = [ "Sam", "Corinna", "Juan",
   
    "Amelia", "Andrés", "Angelo", "Bhavani V", 
    "Carson", "Chris", "Cel", "Christian", 
    "Elena", "Ekaynuh", "G", "Jess", "Julian",
    "Kelvin", "Kevin J", "Kyle", "Leonetti",
    "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
    "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"
  ]  // In App 
     //// NOT THE SAME AS names[] in all other Components - State is Local and NOT SHARED 📜🤓
  

     //  Global/"Parent" Function

     //const 
     treeTopAppBell =()=>{ console.log("🌳🔔diiing🎶✨") }
     //  !!  IF WE PASSED AN ARRAY; THAT THING IS AN ARRAY - SAME FOR FUNCTIONS
  
  
  render(){
  // MakeACard
  return (
    <div className="App">


      <h1>  WILL SOON BE A NAVBAR - YAAAAAAAAY!  </h1>



      {/* < LifecyclesInTheJungle lifecycleNewName={"Mas💫"}/> */}
        < LifecyclesInTheJungle lifecycleNewName={123}/>
      {/* < LifecyclesInTheJungle /> */}










      <header className="App-header">

        

{/* 

  OUR ONLY PATHS AT THE MOMENT


  path="/"  >  "homepage"

  path="/ringthebell"   > the Form with Bell ding

  path="/reactors"


*/}

        

        {/* < IMG /> */}
          {/* <h1>YURRR</h1> */}
          <img src={logo} className="App-logo" alt="logo" />

            {/* 
              <img src={logo} className="App-logo" alt="logo" />
              <img src={logo} className="App-logo" alt="logo" /> 
            */}



                <Switch>
                <BrowserRouter path="/ringthebell">
                  {/* exact */}
                
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>  
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <ReActorNEWForm theBell={this.treeTopAppBell} /> 
                {/* a={actorName} */}
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                {/* YOU CAN'T PASSING THINGS UP  ~  'Why Fight Gravity ?🧘' */}
                
                </BrowserRouter>
                </Switch>
                  




          


                <Switch>
                  <BrowserRouter path="/reactors">
                  <br/><br/><br/><br/>
                  <br/><br/><br/><br/>
                  {/* <ReActorNEWForm /> */}
                  <br/><br/><br/><br/>

                  <ReActorsList n={this.names} />
                  {/* name={this.name} */}


                  </BrowserRouter>
                </Switch>

                {/* 
                

                  <SW:url>  ON : OFF
                  ReActorList
                  L>  
                      <SW:url> OFF : ON
                        ReActors
                      </SW>
                  </SW>

                
                */}


              {/* <reActorList /> */}

              {/* <Followers userID={u} />
              <Post/> <<<< like buton image ><</like> */}














          <Switch>
            <BrowserRouter exact path="/">

            <h1> OUR SOFT-HOMEPAGE YAY! WELCOME! </h1>

            <ul>


                {this.names.map(name =>{ return( name + "!") })}

                {/* {
                  names.map(name =>{ return name + "!" })
                } */}

                < Header />
                {
                  this.names.map(name =>{ return( 
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

            </BrowserRouter>
          </Switch>
                











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
  }  // CLOSING OUT     render(){ --- }
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