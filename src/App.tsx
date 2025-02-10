import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "./services/store";
import {
  getCharacters,
  getCharactersSelector,
} from "./services/slices/charactersSlice";
import { Search } from "./components/Search/Search";
import CharactersList from "./components/CharactersList/CharactersList";
import styles from "./app.module.scss";

export const App: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const characters = useSelector(getCharactersSelector);

  useEffect(() => {
    if (text.length > 3) {
      dispatch(getCharacters(text));
    }
  }, [text, dispatch]);

  return (
    <div className={styles.app}>
      <Search
        text={text}
        setText={setText}
        foundingNumber={characters.length}
      />
      <CharactersList characters={characters} />
    </div>
  );
};
