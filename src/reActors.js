import React from 'react'




const ReActor =(props)=>{  // props = { a: {value} }    NOT actor
    //console.log(props)

        console.log(props)
        console.log(props.a)
        //X//  X  console.log(props.actor.a)
            //X// console.log(props.actor)
        console.log(props.a.actor)
    
    return(//<>
    <div>

        <h2 onClick={   ()=>{ console.log("YAY!") }   }>
            {props.b}
        </h2>
        {/* <h2 onClick={function(){console.log("bill Murray 2")> HEY </h2> */}

        <h4>Flatiron Student Legit Abouta Finish....WHHHHAAAATT????</h4>
        <h6> A REALLY AWESOME PERSON!</h6>
            {/* <h2>{props.actor}</h2> */}
            
    </div>
    //</>
    )


} 
export default ReActor
{/* <ReActor/> */}
//a//






















{/* <h2 onClick={console.log(props.a)} >{props.a}</h2> */}


{/* <h2 onClick={  ()=>{console.log(props.a)}  } >{props.a}</h2> */}
