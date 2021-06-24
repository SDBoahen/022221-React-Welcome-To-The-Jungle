import React from "react"


import ReActor from "./reActors"




// class ReActorList extends React.Component {  
//     //  e R.C  !!
//     state={ actorAll: ["Sam", "Corinna", "Juan",
 
//         "Amelia", "Andrés", "Angelo", "Bhavani V", 
//         "Carson", "Chris", "Cel", "Christian", 
//         "Elena", "Ekaynuh", "G", "Jess", "Julian",
//         "Kelvin", "Kevin J", "Kyle", "Leonetti",
//         "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
//         "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"
    
//     ] } // Come On! Really????  "] }"🥴
//     stateOfState =()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state) }
//     stateOfOurActors =()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state.actorAll) }

    
//     render(){  this.stateOfState(); this.stateOfOurActors();
        
//         const allOurActors = this.state.actorAll.map(  (actor)=>{ return<div>
//             <h3>{actor}</h3>
//             <h4>Flatiron Student Legit Abouta Finish....WHHHHAAAATT????</h4>
//             <h6> A REALLY AWESOME PERSON!</h6>
//         </div>
//      }  )
//         // <div>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//             // <h3></h3>
//         // </div>

        
        
//         return(<>{allOurActors}</>);



//     }
// }
// export default ReActorList
{/* <ReActorList/> */}








class ReActorList extends React.Component { 
    state={ 
        
        actorAll: [ 
            
            "Sam", "Corinna", "Juan",
 
            "Amelia", "Andrés", "Angelo", "Bhavani V", 
            "Carson", "Chris", "Cel", "Christian", 
            "Elena", "Ekaynuh", "G", "Jess", "Julian",
            "Kelvin", "Kevin J", "Kyle", "Leonetti",
            "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
            "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"
    
        ] 

    } // Come On! Really????  "]}"🥴
    stateOfState =()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state) }
    stateOfOurActors =()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state.actorAll) }


    ////////

    
    render(){  this.stateOfState(); this.stateOfOurActors();



        

        // const allOurActors = this.state.actorAll.map(actor =>{ return <h2>{actor}</h2> })
        const allOurActors = this.state.actorAll.map(  (actor)=>{  return <ReActor a={actor} b={actor}/> }  ) //{a: "Wonjin"}
        
        
        return(<>{allOurActors}</>);
//   **** DIVS



    }
}
export default ReActorList




{/* <ReActor a={actor} /> */}














        // let finalStatement = "EVERYONE!";
        //     this.setState({ actorAll: finalStatement })
        //     this.stateOfOurActors();
            // !! rer-setstas !!//
            ////  DO NOT MUTATE STATE DIRECTLY

























//////////  //////////  //////////  //////////










// class ReactorList{  }export 
// {/* <div class=reActorList>`</div> */}




// class reActorList{  /* methods, variable */  render(){  return(<></>);


//     }
// } 
// export default reActorList
// const reActor =(props)=>{  /* */ return(<></>);
// }




// class reActorList{ 
//     state={ actorAll: []  }
//     // static all []
//     //// Actor.all


//     render(){  return(<></>);



//     }
// }
// export default reActorList




// class reActorList{ 
//     state={ actorAll: ["Sam", "Corinna", "Juan"] } 
//     // Come On! Really????  "] }"🥴

//     render(){  return(<></>);



//     }
// }
// export default reActorList
















////  This is Where I Extrapolated About State  ////


// class reActorList{ 
    
//     // static 
//     state={ 
        
//         actorAll: ["Sam", "Corinna", "Juan",
 
//         "Amelia", "Andrés", "Angelo", "Bhavani V", 
//         "Carson", "Chris", "Cel", "Christian", 
//         "Elena", "Ekaynuh", "G", "Jess", "Julian",
//         "Kelvin", "Kevin J", "Kyle", "Leonetti",
//         "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
//         "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"
    
//         ]
        
//         , 

//         actorOnStage: ""
//         // actorOnStage: {} 
//         //// If These Were Actor Objects 
        
//         ,

//         categories: [
//             "",
//             "",
//             "",
//             ""
//         ]

//     } // Come On! Really????  "] }"🥴
//         stateOfOurActors=()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state.actorAll) }




//     ///////////////////////  RENDER/RETURN  ////




//     render(){  this.stateOfOurActors();
        
//         const allOurActors = this.state.actorAll.map(actor =>{ return })
        
//         return(<></>);



//     }
// }
// export default reActorList
{/* <reActorList /> */}