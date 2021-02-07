import React, {Component} from "react";
import "./Pokecard.css";

class PokeCard extends Component{
    render(){
        const val = this.props.val
        // const val = {id: 4, name: 'Charmander', type: 'fire', base_experience: 62};
        return(
            <div className="PokeCard-div">
                <h1 className="PokeCard-h1">{val.name}</h1>
                <img className="PokeCard-img" alt={val.name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numTo000(val.id)}.png`} />
                <p>Type: {val.type}</p>
                <p>Exp: {val.base_experience}</p>
            </div>
        )
    }
}

function numTo000(num){
    let arr=[];
    num<10?arr.push(0,0,num):num<100?arr.push(0,num):arr.push(num);
    let str = arr.join("");
    return str;

}

export default PokeCard;