// import React from "react"
import { Component } from "react"




//  IN A CLASS UTILITY BELT  // 
//
// -  state  -  {???? lifecyle method ????} -  this  - pros-Recived/prop-Passing  //
//
////
class ReActorNEWForm extends Component{  //X// DON'T NEED TO DECLARE  (props) in a  <Class Component>

    state={ nameInputValue: "" , hometown: "" 

        ,

        names:[]


    }
    //// s
    

    submitHandler=(e)=>{ e.preventDefault() 
    
    
        console.log("IN THE FORM - Name:  ", this.state.nameInputValue)
            console.log("IN THE FORM - Hometown:  ", this.state.hometown)

        this.props.reActorNameSUBMIT(this.state.nameInputValue)

        
    
    }
    onChangeHandler=(e)=>{ //console.log("typing...") 

        console.log(e.target.name, "  ::  ", e.target.value) 

        this.setState({ [e.target.name]: e.target.value })


        //  *  //  How Would We Clear the Form??👀 //
        

    }
    //  local --
    ringTheBell=()=>{

        
        if(this.props.theBell){  

            this.props.theBell()  

        }


            //X// this.props.treeTopAppBell()
            //X// App.treeTopAppBell()

    }  //  *** THIS IS OUT CLICK-HANDLER

    ////  THIS IS KIND OF WHAT'S HAPPENING: theBell === theTreeTopBell  HERE

        // f =()=>{ console.log("YAY!") }
        // t = f
        // t ={f}

        // console.log(f)
        // console.log(t)


    ////////


        // alertMe=(typingInput)=>{  if(typingInput.toLowerCase() === "sam"){ console.log("Hey-Hansome😉✨🖱") }  }



        render(){  //console.log(this.props);  //console.log("(ding!)") 

                // this.ringTheBell()  
            //this.alertMe(this.state.nameInputValue)
        

        //X//  { const j = e.target.value } 
        ////  WON'T WORK - DON'T TRY IT 😅
    

    return(<>
    
    <div>

        <form onSubmit={this.submitHandler}>

                {/* (e)=> this.submitHandler(e)  // FROWNED UPON */}

            <input type="text" placeholder="name" value={this.state.nameInputValue} onChange={this.onChangeHandler}
                name="nameInputValue"
            />
            <input type="text" placeholder="hometown" value={this.state.hometown} onChange={this.onChangeHandler}
                name="hometown"
            />
            <input type="submit" value="🌳🍃VVVWEHLCUHM TO THE JUNGLE!🌳🍃"/>
        </form>

            <h1 onClick={this.ringTheBell}>🔔🎋</h1>
            <h1                           >🍃🎋</h1>
            <h1 onClick={this.ringTheBell}>🔔🎋</h1>
            <h1                           >🍃🎋</h1>
            <h1 onClick={this.ringTheBell}>🔔🎋</h1>
            <h1                           >🍃🎋</h1>
            <h1 onClick={this.ringTheBell}>🔔🎋</h1>
            <h1                           >🍃🎋</h1>
        
    </div>

    </>);}

}
export default ReActorNEWForm




// ringTheBell=()=>{ console.log(this.props)

//     if(this.props.theBell){ this.props.theBell() }

// }


// onClick={this.ringTheBell}




// submitHandler=(e)=>{ e.preventDefault() 

//     console.log(this.props)
//     // this.props.reActorNameSUBMIT()
//
        // this.state  !!  WHO OBJECT !!
        //// ' WHY DON'T WE JUST PASS IN ALL OF STATE ?? 🤷🏾‍♂️
        //// json - Body - .stringify ({})
//     this.props.reActorNameSUBMIT(this.state.nameInputValue)

// }








// onSubmit={ }
// (e)=>{e.preventDefault()} 
// submitHandler=(e)=>{ e.preventDefault(); } 

// changeHandler =(e)=>{ console.log(e) }
// (e)=>{console.log(e)
// (e)=>{console.log(e.target.value)




// state={ name: "" }
//     ////
//     changeHandler =(e)=>{ console.log(e.target.value) 
    
//         this.setState({ [e.target.name]: e.target.value })

//     }
// name="name" />









// class ReActorNEWForm extends Component{ 
    

//     render(){ return(<>
    
//     <div>
//         <form>
//             <input type="text" placeholder="name" value="" onChange={""}/>
//             <input type="submit" value="🌳🍃VVVWEHLCUHM TO THE JUNGLE!🌳🍃"/>
//         </form>
//     </div>

//     </>);}

// }
// export default ReActorNEWForm








































// class ReActorNEWForm extends Component{ render(){ return(<></>);}

//  // - state - life - this - 

// }
// const ReActorNEWForm=()=>{ return(<></>);

// }

            // <br><br>
            // <h2>Editing This Actor In a Class!✨:</h2>
            // <form class="name-change-form">

            // <br>
            // <button class="close-button">✖️CLOSE✖️THE✖️EDIT✖️FORM✖️</button>
            // <br>

            // <h4>Name:</h4>
                // <input
                // type="text"
                // name="name"
                // value="${cardDiv.querySelector("h2").innerText}"
                // placeholder="${cardDiv.querySelector("h2").innerText}"
                // class="input-text-name"
                // />        
            // <br />
            // <h4>Image URL:</h4>
                // <input
                // type="text"
                // name="image"
                // value="${cardDiv.querySelector("img").src}"
                // placeholder="${cardDiv.querySelector("img").src}"
                // class="input-text-image"
                // />        
            // <br />
            // <input
            // type="submit"
            // name="submit"
            // value="Update Actor Name!!!!"
            // class="submit-button"
            // />
            // </form>
            // <br><br><br><br></br>




// class ReActorNEWForm extends Component{ 
    
//     render(){ return(<>
    
//     <div>
//         <form>
//             <input type="text"/>
//         </form>
//     </div>

//     </>);}

// }
// export default ReActorNEWForm








// class ReActorNEWForm extends Component{ 
    

//     submitHandler=(e)=>{ e.preventDefault() }

//     render(){ return(<>
    
//     <div>
//         <form onSubmit={this.submitHandler}>
//             {/* (e)=> this.submitHandler(e) */}

//             <input type="text" placeholder="name"/>
//             <input type="submit" value="🌳🍃VVVWEHLCUHM TO THE JUNGLE!🌳🍃"


//                 // onClick={this.submitHandler}

//             />

//             {/* <button onClick={console.log("YUR")}>🍃BUDDEN🍃</button> */}

//         </form>
//     </div>

//     </>);}

// }
// export default ReActorNEWForm



