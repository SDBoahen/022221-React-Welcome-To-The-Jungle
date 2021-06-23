import React from "react"

import reActor from "./reActors"
// import ReActor from "./reActors"






// class ReactorList{  }
// <div class=reActorList>`</div>




// class reActorList{ /* methods, variable */ render(){  return(<></>);


//     }
// } 
// export default reActorList




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
















//  This is where I extrapolated about State


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
// {/* <reActorList /> */}








class ReActorList extends React.Component {  
    //  e R.C  !!
    state={ actorAll: ["Sam", "Corinna", "Juan",
 
        "Amelia", "Andrés", "Angelo", "Bhavani V", 
        "Carson", "Chris", "Cel", "Christian", 
        "Elena", "Ekaynuh", "G", "Jess", "Julian",
        "Kelvin", "Kevin J", "Kyle", "Leonetti",
        "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
        "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"
    
    ] } // Come On! Really????  "] }"🥴
    stateOfOurActors =()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state.actorAll) }

    
    render(){  this.stateOfOurActors();
        
        const allOurActors = this.state.actorAll.map(  (actor)=>{ return <h3>{actor}</h3> }  )
        // <div>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // <h3></h3>
        // </div>

        
        
        return(<>{allOurActors}</>);



    }
}
export default ReActorList
{/* <ReActorList/> */}








// class ReActorList extends React.Component { 
//     state={ 
        
//         actorAll: ["Sam", "Corinna", "Juan",
 
//         "Amelia", "Andrés", "Angelo", "Bhavani V", 
//         "Carson", "Chris", "Cel", "Christian", 
//         "Elena", "Ekaynuh", "G", "Jess", "Julian",
//         "Kelvin", "Kevin J", "Kyle", "Leonetti",
//         "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
//         "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"
    
//         ] 

//     } // Come On! Really????  "] }"🥴
//     stateOfOurActors =()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state.actorAll) }


//     ////////


//     render(){  this.stateOfOurActors();
        
//         // const allOurActors = this.state.actorAll.map(actor =>{ return <h2>{actor}</h2> })
//         const allOurActors = this.state.actorAll.map(actor =>{ return <ReActor a={actor} /> })
        
        
//         return(<>{allOurActors}</>);
////   **** DIVS



//     }
// }
// export default ReActorList