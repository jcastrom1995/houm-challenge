import { ReactElement } from "react";
import Image from "next/image";
import { Text, Field } from "ui";
import * as Icon from "Icons";
import s from "./Character.module.css";

interface CharacterI {
  photo: string;
  name: string;
  gender: string;
  location: string;
}

const Character = ({
  photo,
  name,
  gender,
  location,
}: CharacterI): ReactElement => {
  return (
    <Field className={s.character}>
      <picture className={s.photo}>
        <Image src={photo} alt={name} width={250} height={250} />
      </picture>
      <Field className={s.about}>
        <Field className={s.information} spacing="tiny">
          <Icon.Identification size={20} />
          <Text tag="span">{name}</Text>
        </Field>
        <Field className={s.information} spacing="tiny">
          <Icon.User size={20} />
          <Text tag="span">{gender}</Text>
        </Field>
        <Field className={s.information}>
          <Icon.Globe size={20} />
          <Text tag="span">{location}</Text>
        </Field>
      </Field>
    </Field>
  );
};

export default Character;
