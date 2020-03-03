import React from "react";
import Column from "./Column";
import "../stylesheets/board.css";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columns: [
                <Column id="winnie" right="Bob" name="Winnie" />,
                <Column id="bob" name="Bob" />,
                <Column id="thomas" name="Thomas" />,
                <Column id="george" name="George" />
            ]
        };
    }

    render(){
        return(
            <div className="board">
                {this.state.columns.map(column => 
                    <div>{column}</div>
                )}
            </div>
        )
    }
}

export default Board;