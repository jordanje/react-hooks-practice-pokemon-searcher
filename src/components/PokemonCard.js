import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({char}) {
  const [ isClicked, setIsClicked ] = useState(true)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const {id, name, sprites, hp } = char;
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={isClicked? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
