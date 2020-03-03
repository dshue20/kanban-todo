import React from "react";
import "../stylesheets/board.css";
import Card from './Card';

class Column extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            cards: [
                <Card column={this} text="text 1" />,
                <Card column={this} text="text 2" />
            ],
            text: ""
        };
        this.addCard = this.addCard.bind(this);
    }

    addCard(){
        let text = window.prompt("What text would you like this card to display?");
        let card = <Card column={this} text={text}/>
        this.setState({ cards: this.state.cards.concat(card) });
    }

    deleteCard(card){
        for (let i=0; i < this.state.cards.length; i++){
            if (this.state.cards[i] === card){
                this.setState({ cards: this.state.cards.splice(i, 1)});
            };
        };
    }

    insertCard(card){
        this.setState({ cards: this.state.cards.concat(card) });
    }

    render(){
        return(
            <div className="column">
                <h1 className="column-header">{this.props.name}</h1>
                <ul>
                    {this.state.cards.map((card, idx) => <li key={idx} className="card-li">{card}</li>)}
                </ul>
                <button onClick={this.addCard}>Add a card</button>
            </div>
        )
    }
}

export default Column;