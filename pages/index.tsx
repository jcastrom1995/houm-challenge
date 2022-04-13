import { Character } from "character/components";
import { Layout } from "common/components";
import s from "styles/Home.module.css";

import { useCharacterViewModel } from "character/controller";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const { characters, loading } = useCharacterViewModel();

  if (loading) {
    return <span>Cargando...</span>;
  }

  return (
    <section className={s.container}>
      <section className={s.characters}>
        {characters?.map((char) => (
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
