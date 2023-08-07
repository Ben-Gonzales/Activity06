'use client';
import styles from '../page.module.css'
import React, { useState, useEffect } from "react";

const Avatars =() => {
  const [faction, setFaction] = useState('');
  const [intelligence, setIntelligence] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [strength, setStrength] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [avatars, setAvatars] = useState([]);
  const [avatarId, setAvatarId] = useState('');
  const [avatarDetails, setAvatarDetails] = useState({});

  const handleFactionChange = (event) => {
    setFaction(event.target.value);
  };
  const handleIntelligenceChange = (event) => {
    setIntelligence(parseInt(event.target.value));
  };
  const handleDexterityChange = (event) => {
    console.log(typeof event.target.value)
    setDexterity(parseInt(event.target.value));
  };
  const handleWisdomChange = (event) => {
    setWisdom(parseInt(event.target.value));
  };
  const handleCharismaChange = (event) => {
    setCharisma(parseInt(event.target.value));
  };
  const handleStrengthChange = (event) => {
    setStrength(parseInt(event.target.value));
  };
  const handleConstitutionChange = (event) => {
    setConstitution(parseInt(event.target.value));
  };


  useEffect(() => {
    fetch('http://localhost:4000/avatars')
    .then(data => data.json())
    .then(data => setAvatars(data))
  }, [])

  useEffect(() => {
    if (avatarId !== '') {
        fetch(`http://localhost:4000/avatars/${avatarId}`)
        .then(res => res.json())
        .then(data => setAvatarDetails(data));
    }
  }, [avatarId])

  const createAvatar = () => {
    fetch('http://localhost:4000/avatars', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        class: faction,
        intelligence: intelligence,
        dexterity: dexterity,
        wisdom: wisdom,
        charisma: charisma,
        strength: strength,
        constitution: constitution,
      })
    });
  }

    return (
        <div>
            <div className={styles.description}>
                <div>
                <label htmlFor="faction">Faction:</label>
                <input
                    type="text"
                    id="faction"
                    value={faction}
                    onChange={handleFactionChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="intelligence">Intelligence:</label>
                <input
                    type="text"
                    id="intelligence"
                    value={intelligence}
                    onChange={handleIntelligenceChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="dexterity">Dexterity:</label>
                <input
                    type="text"
                    id="dexterity"
                    value={dexterity}
                    onChange={handleDexterityChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="wisdom">Wisdom:</label>
                <input
                    type="text"
                    id="wisdom"
                    value={wisdom}
                    onChange={handleWisdomChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="charisma">Charisma:</label>
                <input
                    type="text"
                    id="charisma"
                    value={charisma}
                    onChange={handleCharismaChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="strength">Strength:</label>
                <input
                    type="text"
                    id="strength"
                    value={strength}
                    onChange={handleStrengthChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="constitution">Constitution:</label>
                <input
                    type="text"
                    id="constitution"
                    value={constitution}
                    onChange={handleConstitutionChange}
                    required
                />
                </div>
            </div>
            <button onClick={createAvatar}>Input Avatar</button>
            <ul>
                {avatars.map(avatar => {
                    return <li key={avatar._id}
                    style={{ border: 'white 1px solid'}}
                    onClick={() => setAvatarId(avatar._id)}>
                        {avatar.class}
                        {avatarId === avatar._id &&
                        <span> | INT:{avatarDetails.intelligence} | DEX:{avatarDetails.dexterity} | WIS:{avatarDetails.wisdom} | CHA:{avatarDetails.charisma} | STR:{avatarDetails.strength} | CON:{avatarDetails.constitution}</span>}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Avatars;