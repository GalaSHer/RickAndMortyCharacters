import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./CharactersList.module.scss";
import { TCharacter } from "../../types";

interface CharactersListProps {
  characters: TCharacter[];
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  if (!Array.isArray(characters)) {
    return <p className={styles.error}>Персонажи не найдены</p>;
  }

  const largeCards = characters.slice(0, 2);
  const smallCards = characters.slice(2);

  return (
    <div className={styles.container}>
      <ul className={styles.largeCards}>
        {largeCards.map((char) => (
          <CharacterCard key={char.id} {...char} url={char.url} size="large" />
        ))}
      </ul>
      <ul className={styles.smallCards}>
        {smallCards.map((char) => (
          <CharacterCard key={char.id} {...char} size="small" />
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
