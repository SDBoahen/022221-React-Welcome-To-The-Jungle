// import React from "react"
import { Component } from "react"



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














//  IN A CLASS UTILITY BELT  // 
//
// -  state  -  {???? lifecyle method ????} -  this  -   -x- prop-Passing //
//
////
class ReActorNEWForm extends Component{ 

    state={ nameInputValue: "" }
    
    submitHandler=(e)=>{ e.preventDefault() }
    onChangeHandler=(e)=>{ //console.log("typing...") 

        console.log(e.target.value) 

        this.setState({ [e.target.name]: e.target.value })
        
    }

    render(){  
        
        // { const j = e.target.value }  
    
    return(<>
    
    <div>
        <form onSubmit={this.submitHandler}>

                {/* (e)=> this.submitHandler(e)  // FROWNED UPON */}

            <input type="text" placeholder="name" value={this.state.nameInputValue} onChange={this.onChangeHandler}
                name="nameInputValue"
            />
            <input type="submit" value="🌳🍃VVVWEHLCUHM TO THE JUNGLE!🌳🍃"/>
        </form>
    </div>

    </>);}

}
export default ReActorNEWForm
            














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