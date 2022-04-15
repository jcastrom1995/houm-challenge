import { Field } from "ui/components";

import * as Icon from "Icons";

import s from "./Search.module.css";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

const Search = ({ value, onChange }: SearchProps) => {
  const handleChange = (val: string) => {
    onChange(val);
  };

  return (
    <Field className={s.search}>
      <input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search character"
        type="text"
        className={s.field}
        value={value}
      />
      <Icon.Search size={19} />
    </Field>
  );
};

export default Search;
