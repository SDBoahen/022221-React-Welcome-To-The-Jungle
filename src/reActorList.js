import React from "react"



import ReActor from "./reActors"
import ReActorNEWForm from "./reActorNEWForm"




class ReActorList extends React.Component{ 
    state={ 

        actor: {}

        ,

            categories: [ "drama", "other types of plays...where's chris when you need 'em"]

        ,

        reActorAllNames: [ ]  //  Initially and Empty Array
        
        ,

        actorAllFrontendInsts: [ 
            
//             // id: 1
// ,            { name: "Sam", skill: "Instructor", prefernce: "Frontend - Core React" },
//             // id: 2
// ,            { name: "Corinna", skill: "Instructor", prefernce: "Functional Programming" },
//             // id: 3
// ,            { name: "Juan", skill: "Instructor", prefernce: "CSS" },

//             // id: 4
// ,            { name: "Amelia", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 5
// ,            { name: "Andrés", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 6
// ,            { name: "Angelo", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 7
// ,            { name: "Bhavani V", skill: "Junior Full-Stack Web Developer", prefernce: "" }, 
//             // id: 8
// ,            { name: "Carson", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 9
// ,            { name: "Chris", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 10,
//             { name: "Cel", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 11,
//             { name: "Christian", skill: "Junior Full-Stack Web Developer", prefernce: "" }, 
//             // id: 12,
//             { name: "Elena", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 13,
//             { name: "Ekaynuh", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 14,
//             { name: "G", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 15,
//             { name: "Jess", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 16,
//             { name: "Julian", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 17,
//             { name: "Kelvin", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 18,
//             { name: "Kevin J", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 19,
//             { name: "Kyle", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 20,
//             { name: "Leonetti", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 21,
//             { name: "Mac", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 22,
//             { name: "Matt", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 23,
//             { name: "Mcrea", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 24,
//             { name: "Mike", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 25,
//             { name: "Nana Ama", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 26,
//             { name: "Owen", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 27,
//             { name: "Ryan", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 28,
//             { name: "Scott", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 29,
//             { name: "Vic", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 30,
//             { name: "Vincent", skill: "Junior Full-Stack Web Developer", prefernce: "" },
//             // id: 31,
//             { name: "Wonjin", skill: "Junior Full-Stack Web Developer", prefernce: "" }
    
        ]

    } // Come On! Really????  "]}"🥴
    stateOfState =()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state) }
        stateOfOurReActors =()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state.actorAllFrontendInsts) }
        stateOfOurReActorNames =()=>{ console.log("🙌Where my Actorzz Aht??🙌    ", this.state.reActorAllNames) }




        // aSoftFetchOfEveryonesNames= [
                
        //     "Sam", "Corinna", "Juan",
        //     "Amelia", "Andrés", "Angelo", "Bhavani V", 
        //     "Carson", "Chris", "Cel", "Christian", 
        //     "Elena", "Ekaynuh", "G", "Jess", "Julian",
        //     "Kelvin", "Kevin J", "Kyle", "Leonetti",
        //     "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
        //     "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"

        // ]

        componentDidMount(){ console.log(this.state) 
        
            console.log(this.state.reActorAllNames)


            //  (setState) is actually doing the 2ND RENDER 
            // this.setState({ reActorAllNames: this.props.n })
                //this.setState({ reActorAllNames: this.aSoftFetchOfEveryonesNames})


            console.log(this.state.reActorAllNames)
            
        } //  ~  DOMContentLoaded
        //  ***  HIGHLIGHT OTHER USES FOR OUR COMPONENT DID MOUNT 






        submitHandlerNEWReActor =(newName)=>{ console.log(`✨🍃🌳🙌VVVWELCOME ${newName}🙌🌳🍃✨`) 

            //  Pre-Pending
            // this.setState({ reActorAllNames: [newName, ...this.state.reActorAllNames] })

            // Appending
            this.setState({ reActorAllNames: [...this.state.reActorAllNames, newName] })
    
        }




    ////////

    pleaseActuallyWorkSoWeCanMoveOn=()=>{
        
        this.setState({ reActorAllNames: this.props.n })
    
    }

    
    render(){  //this.stateOfState(); this.stateOfOurReActors(); this.stateOfOurReActorNames();

        //console.log(this.props)

        
        //X// this.pleaseActuallyWorkSoWeCanMoveOn();
        //X//  this.setState({ reActorAllNames: this.props.n })



        

        // const allOurActors = this.state.actorAll.map(actor =>{ return <h2>{actor}</h2> })
        const allOurActors = this.state.reActorAllNames.map(  (actorName)=>{  return <ReActor a={actorName} b={actorName}  s={this.submitHandlerNEWReActor}/> }  ) //{a: "Wonjin"}
        // innerHTML `<><><><><><Re>`
        
        // return(<>{allOurActors}</>);

        return(<>

                    {/* WOULD WANT SPEARATE DUVES FOR STYLING */}
                    <div> 
                        <ReActorNEWForm reActorNameSUBMIT={this.submitHandlerNEWReActor}/>
                    </div>
                        <div>
                            {allOurActors}
                        </div>
                    <div> 
                        <ReActorNEWForm reActorNameSUBMIT={this.submitHandlerNEWReActor}/>
                    </div>

        </>);







//   **** DIVS



    }
}
export default ReActorList
{/* <ReActorList /> */}




        // return(<>{allOurActors}<ReActorNEWForm></>);

        // return(<>
        //     <div>
        //     {allOurActors}
        //     </div>
        //     <div>
        //     <ReActorNEWForm>
        //     </div>
        // </>); 
        // {/* What's The Issue?? 📋🤓 */}

        
        // return(<>
        //             <div>
        //             {allOurActors}
        //             </div>
        //             <div>
        //                 <ReActorNEWForm reActorNameSUBMIT={this.submitHandlerNEWReActor}/>
        //             </div>
        //       </>);




        // submitHandlerNEWReActor =(newName)=>{ console.log(`✨🍃🌳🙌VVVWELCOME ${newName.name}🙌🌳🍃✨`) }
        // submitHandlerNEWReActor =(newName)=>{ console.log(`✨🍃🌳🙌VVVWELCOME ${newName}🙌🌳🍃✨`) }
        // submitHandlerNEWReActor =(newName)=>{ console.log(`✨🍃🌳🙌VVVWELCOME ${newName}🙌🌳🍃✨`) 

        //     this.setState({ reActorAllNames: [newName, ...this.state.reActorAllNames] })
        //     this.setState({ reActorAllNames: [...this.state.reActorAllNames, newName] })
    
        // }




{/* <ReActor a={actor} /> */}















        // actorAllFrontEndInsts: [ 
            
        //     { name: "Sam", skill: "Instructor", prefernce: "Frontend" },
        //     { name: "Amelia", skill: "Full-Stack Web Developer", prefernce: "" },

        //     "Sam", "Corinna", "Juan",
 
        //     "Amelia", "Andrés", "Angelo", "Bhavani V", 
        //     "Carson", "Chris", "Cel", "Christian", 
        //     "Elena", "Ekaynuh", "G", "Jess", "Julian",
        //     "Kelvin", "Kevin J", "Kyle", "Leonetti",
        //     "Mac", "Matt", "Mcrea", "Mike", "Nana Ama",
        //     "Owen", "Ryan", "Scott", "Vic", "Vincent", "Wonjin"
    
        // ]

        // ,








        // let finalStatement = "EVERYONE!";
        //     this.setState({ actorAll: finalStatement })
        //     this.stateOfOurActors();
            // !! rer-setstas !!//
            ////  DO NOT MUTATE STATE DIRECTLY


        // { name: "Sam", skill: "Instructor", prefernce: "Frontend" },
        // { name: "A", skill: "Full-Stack Web Developer", prefernce: "" }

























//////////  //////////  //////////  //////////










// class ReactorList{  }export 
// {/* <div class=reActorList>`</div> */}




// class reActorList{  /* methods, variable, state, ECT */  render(){  return(<></>);


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







