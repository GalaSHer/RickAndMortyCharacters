import React from "react";
import styles from "./CharacterCard.module.scss";

interface CharacterCardProps {
  name: string;
  status: string;
  created: string;
  url: string;
  size: "large" | "small";
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  status,
  created,
  url,
  size,
}) => {
  const createdDate = created.split("T")[0];

  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.card} ${
          size === "large" ? styles.large : styles.small
        }`}
      >
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.footer}>
          <div className={styles.info}>
            <span className={styles.label}>Status: </span>
            <span
              className={
                status === "Alive"
                  ? styles.alive
                  : status === "Dead"
                  ? styles.dead
                  : styles.unknown
              }
            >
              {status}
            </span>
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Created: </span>
            <span className={styles.created}>{createdDate}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default CharacterCard;
