import React from "react"



// class LifecyclesInTheJungle extends React.Component { render(){ return(<></>); }

// }
// export default LifecyclesInTheJungle
// !!  //  fog/fade


















//  mounting    >    update     >    unmounting
//  creation    >   "updation"  >    deletion
//  WITHOUT HOOKS - Only Class Components Have LifeCycle Methods 

class LifecyclesInTheJungle extends React.Component { 
    

        //  Optional
        // constructor(){
        constructor(props){  console.log("LIFECYLCES====In(1):  constructor()")
            // We Are NOT binding - Arrow Functions Handling That 💪🏹💫✨

            // super()
            super(props)
            

            this.state = {

                name: "Sam",

                student: {}

                ,

                blastFromThePastActLikeYouKnow: []

            }


        }
        ////  **  (Class)(Components)



        //  Optional + Not Widely Used
        static getDerivedStateFromProps(props, state){  console.log("LIFECYLCES====In(2):  getDerivedStateFromProps()")
            ////  Manipulate State Before It's Rendered
            ////////  SHOULD NOT 😅 - Avoid Bugs
            ////  Animations

                // state = this.state
                // console.log("getDerivedStateFromProps:  ", state)

            return { name: props.lifecycleNewName }

        }




    // * More Commonly Used * BUT THE MOST IMPORTANT.... AFTER Render() ofcorse 😅 //
    componentDidMount(){  console.log("LIFECYLCES====In(4):  componentDidMount()")


        const actLikeYouKnow = "http://localhost:3000/actors"

        fetch(actLikeYouKnow)
        .then(response => response.json())
        .then(blastFromThePast =>{

            this.setState({ blastFromThePastActLikeYouKnow: blastFromThePast })

            console.log(this.state)

        })
        // .then(console.log)

        console.log(this.state)


    }


    

    // * More Commonly Used * //
    shouldComponentUpdate(nextProps, nextState){  console.log("LIFECYLCES====In(5):  shouldComponentUpdate()")

        return true
        // return false

    }  // Usually Dependent on componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState){ console.log("LIFECYLCES====In(6):  shouldComponentUpdate()")
        // Comparison

    }
    componentDidUpdate(){  console.log("LIFECYLCES====In(7):  componentDidUpdate()")

        
    }




    componentWillUnmount(){  console.log("LIFECYLCES====In(8):  componentWillUnmount()")
        // At Somepoint, this will be removed/unmounted from the DOM

        
    }

    
    

    //  * *  M A N D A T O R Y  * *    
    render(){  console.log("LIFECYLCES====In(3):  render()")
        console.log(this.props)

        console.log("getDerivedStateFromProps:  ", this.state.name)


        return(<></>); 
    }

}
export default LifecyclesInTheJungle