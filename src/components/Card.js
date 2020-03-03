import React from "react";

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ""
        };
        this.goLeft = this.goLeft.bind(this);
        this.goRight = this.goRight.bind(this);
    }

    goLeft(){
        this.props.column.deleteCard(this);
        this.props.leftNeighbor.insertCard(this);
    }

    goRight(){
        this.props.column.deleteCard(this);
        this.props.rightNeighbor.insertCard(this);
    }

    render(){
        return(
            <div>
                <button onClick={this.goLeft}>{"<"}</button>
                {this.props.text}
                <button>{">"}</button>
            </div>
        )
    }
}

export default Card;