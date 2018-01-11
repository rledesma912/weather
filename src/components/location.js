import React from 'react';

//const Location = (props) => {
const Location = ({city}) => ( //DESTRUCTURING EN EL PARÁMETRO

    //console.log(props.city);
    //let {city} = props; //DESTRUCTURING

    <div><h1>{city}</h1></div>
)

export default Location;
