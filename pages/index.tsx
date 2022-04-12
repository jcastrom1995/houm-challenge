import { useEffect, useState } from "react";
import { Character } from "character/components";
import { Layout } from "common/components";
import { getCharacters } from "character/repository/character.service";
import s from "styles/Home.module.css";
import { CharacterResponse } from "character/models";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const [characters, setCharacters] = useState<CharacterResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters()
      .then((res) => {
        console.log(res);
        setCharacters(res);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(characters?.results);

  return (
    <section className={s.container}>
      <section className={s.characters}>
        {loading && <span>Cargando...</span>}
        {characters?.results?.map((char) => (
          <Character
            key={char.id}
            photo={char.image}
            name={char.name}
            gender={char.gender}
            location={char.location.name}
          />
        ))}
      </section>
    </section>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
