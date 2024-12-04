// src/App.jsx
import { useState } from 'react';
import './App.css';

const App = () => {
const [team, setTeam] = useState(
  []
)
const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const [hasTeam, sethasTeam] = useState('noTeam')
  const checkTeam = () => {
    setTeamStr(calcTotalStr(team))
    setTeamAgi(calcTotalAgi(team))
    if (team.length > 0){
      sethasTeam('team')
    } else
     sethasTeam('noTeam')
  }
  const [teamStr, setTeamStr] = useState(0)
  const [teamAgi, setTeamAgi] = useState(0)


  //functions

  const calcTotalStr = (team) => {
    return team.reduce((total, fighter) => total+fighter.strength, 0)
  }
  const calcTotalAgi = (team) => {
    return team.reduce((total, fighter) => total+fighter.agility, 0)
  }

  const handleAddFighter = (fighter) => {
    if(money < fighter.price) {
      console.log('no muhnies')
    } else {

    setMoney(money-fighter.price)
    console.log(fighter);
    team.push(fighter);
  }
  checkTeam();
    console.log(team);
    console.log(money);
    console.log(hasTeam);  
  }
  
  return (
    <>
    <h1>Zombie Fighters</h1>
    <h2>Money: {money}</h2>
    <h2>Team Strength: {teamStr}</h2>
    <h2>Team Agility: {teamAgi}</h2>
    <h2>Team</h2>
    <p class={hasTeam}>Pick some team members!</p>
    <ul>
      
      {team.map((fighter) => (
        <li>
          <img src ={fighter.img}/>
          <p>{fighter.name}</p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddFighter(fighter)  }>Remove</button>
        </li>

      ))}
    </ul>
    <h2>Fighters</h2>
    <ul>
      {zombieFighters.map((fighter) => (
        <li>
          <img src ={fighter.img}/>
          <p>{fighter.name}</p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddFighter(fighter) }>Add</button>
        </li>
      ))}
    </ul>
    </>
  );
}

export default App

// Display the list of zombieFighters by mapping the array into the UI of App.jsx. (We’ve provided some helpful CSS assuming you use a ul and lis)

// Each character should have an image, name, price, strength, and agility.
// Each character’s UI should also have an Add button to add them to your team.