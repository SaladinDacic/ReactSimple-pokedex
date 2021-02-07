import React, {Component} from "react";
import "./Pokegame.css"
class Pokegame extends Component{
    render(){
        const newData = this.props.data;
        const num = this.props.num === 1;
        const dataHalf1 = newData.slice(4);
        const dataHalf2 = newData.slice(0,4);
        const won = winner(dataHalf1, dataHalf2);
        console.log(dataHalf1, dataHalf2, won)
        return(
            <div className="Pokegame-div">
                {num?(won?<h1>Winner</h1>:<h1>Looser</h1>):(won?<h1>Looser</h1>:<h1>Winner</h1>)}
            </div>
        )
    }
}

function winner(arr1, arr2){
    let num1 = 0;
    let num2 = 0;
    for(let i = 0; i<arr1.length; i++){
        num1 = num1 + arr1[i].base_experience
        num2 = num2 + arr2[i].base_experience
    }
    console.log(num1, num2);
    if(num1>num2){
        return true
    }else{
        return false
    }
}

export default Pokegame