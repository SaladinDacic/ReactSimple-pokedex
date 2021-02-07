import React, {Component} from "react";
import PokeCard from "./Pokecard";
import Pokegame from "./Pokegame";
import "./Pokedex.css";


class Pokedex extends Component{
    render(){
        const data = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
        const newData = randomData(data);
        return(
            <div className="Pokedex-body">
                <div className="Pokedex-div div1">
                    <PokeCard val={newData[0]}/>
                    <PokeCard val={newData[1]}/>
                    <PokeCard val={newData[2]}/>
                    <PokeCard val={newData[3]}/>
                </div>
                <Pokegame data={newData} num={1}/>
                <div className="Pokedex-div div2">
                    <PokeCard val={newData[4]}/>
                    <PokeCard val={newData[5]}/>
                    <PokeCard val={newData[6]}/>
                    <PokeCard val={newData[7]}/>
                </div>
                <Pokegame data={newData} num={2}/>
            </div>
        )
    }
}

function randomData(data){
    let newData=[];
    while(newData.length !== data.length){
        let randomObj = data[Math.floor(Math.random()*data.length)];
        if(newData.indexOf(randomObj) === -1){
            newData.push(randomObj)
        }
    }
    return newData;
}

export default Pokedex;