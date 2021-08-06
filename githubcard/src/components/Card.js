import React from "react"

class Card extends React.Component{

  
    render(){
        return(
            <div>
            <h1>Hello, {this.props.login}</h1>
            <h2>How is the weather in {this.props.location}?</h2>
            <h3>These are your followers {this.props.followers}</h3>
           <ul>
           {this.list}
           </ul>
           
            </div>
        )
    }
}

export default Card;