// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Character = (props) => {

    console.log(props)

    
    return(
        <CharacterCard>
            <h1>{props.props.name}</h1>
            <p>Height: {props.props.height}</p>
            <p>Weight: {props.props.mass}</p>
            <p>Born: {props.props.birth_year}</p>
        </CharacterCard>
    )
}

const CharacterCard = styled.div`
color: gold;
background-color: black;
display: flex;
flex-direction: column;
width: 15%;
opacity: 0.5;
border-radius: 10%;
`


export default Character