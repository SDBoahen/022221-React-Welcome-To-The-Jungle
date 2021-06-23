import logo from './logo.svg';
import './App.css';


import Header from './header'

// import reActorsList from "./reActorList"
import ReActorsList from "./reActorList"




const names = ["Sam", "Corinna", "Juan",
 
  "Amelia", "Andrés", "Angelo", "Bhavani V", 
  "Carson", "Chris", "Cel", "Christian", 
  "Elena", "Ekaynuh", "G", "Jess", "Julian",
  "Kelvin", "Kevin J", "Kyle", "Leonetti",
  "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
  "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"

]


function App() {
  
  // MakeACard
  return (
    <div className="App">
      <header className="App-header">
        
        
        {/* < IMG /> */}
          {/* <h1>YURRR</h1> */}
          <img src={logo} className="App-logo" alt="logo" />

            {/* 
              <img src={logo} className="App-logo" alt="logo" />
              <img src={logo} className="App-logo" alt="logo" /> 
            */}


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
                    <h2>{name + "!"}</h2>
                    < Header />

                  </div>
                  // </>
                  ) 
                })
              }
              
          </ul>


              <ReActorsList />

              {/* <reActorList /> */}

              {/* <Followers userID={u} />
              <Post/> <<<< like buton image ><</like> */}




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


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>
    </div> 
  );
}
export default App;
