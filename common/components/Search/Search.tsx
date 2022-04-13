import { useCharacter } from "character/repository/characters.store";
import { Field } from "ui";

import * as Icon from "Icons";

import s from "./Search.module.css";

const Search = () => {
  const { state, dispatch } = useCharacter();

  const handleChange = (value: string) => {
    dispatch({ key: "search", payload: value });
  };

  return (
    <Field className={s.search}>
      <input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search character"
        type="text"
        className={s.field}
        value={state.search}
      />
      <Icon.Search size={19} />
    </Field>
  );
};

export default Search;
