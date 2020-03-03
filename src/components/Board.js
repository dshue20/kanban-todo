import React from "react";
import Column from "./Column";
import "../stylesheets/board.css";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columns: [
                <Column id="winnie" color="#8E6E95" right="Bob" name="Winnie" />,
                <Column id="bob" color="#39A59C" name="Bob" />,
                <Column id="thomas" color="#344759" name="Thomas" />,
                <Column id="george" color="#E8741E" name="George" />
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