import styles from "./search.module.scss";

interface ISearchProps {
  text: string;
  setText: (value: string) => void;
  foundingNumber?: number;
}

export const Search: React.FC<ISearchProps> = ({
  text,
  setText,
  foundingNumber,
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor="search" className={styles.label}>
        <input
          id="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Search characters..."
          autoFocus
        ></input>
        {foundingNumber ? (
          <span className={styles.found}>
            Found characters: {foundingNumber}
          </span>
        ) : null}
      </label>
    </div>
  );
};
