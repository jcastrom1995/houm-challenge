import { Field } from "ui";
import * as Icon from "Icons";

import s from "./Search.module.css";

const Search = () => {
  return (
    <Field className={s.search}>
      <input placeholder="Search character" type="text" className={s.field} />
      <Icon.Search size={19} />
    </Field>
  );
};

export default Search;
