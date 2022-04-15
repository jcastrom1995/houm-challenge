import Image from "next/image";
import { Character } from "character/components";
import { Layout } from "common/components";
import { useCharacterViewModel } from "character/controller";
import { Button, Heading, Field, Text, Modal, Loading } from "ui/components";
import * as Icon from "Icons";
import s from "styles/Home.module.css";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const {
    characters,
    loading,
    handleOpenModal,
    showModal,
    character,
    handleCloseModal,
  } = useCharacterViewModel();

  if (loading) {
    return (
      <span>
        <Loading />
      </span>
    );
  }

  if (characters && !characters.length) {
    return <div className={s.notFound}>Result not found</div>;
  }

  return (
    <section className={s.container}>
      <section className={s.characters}>
        {characters?.map(({ id, image, name, gender, location }) => (
          <Character
            key={id}
            photo={image}
            name={name}
            gender={gender}
            location={location.name}
            onSelect={() => handleOpenModal(id)}
          />
        ))}
      </section>
      {showModal && character && (
        <Modal>
          <Modal.Header>
            <Heading type="subtitle" rank={4} text={character.name} />
            <Button
              dataRole="primary"
              type="button"
              onClick={handleCloseModal}
              width={120}
            >
              Close
            </Button>
          </Modal.Header>
          <Modal.Content>
            <picture className={s.photo}>
              <Image
                src={character.image}
                width={200}
                height={200}
                alt={character.name}
              />
            </picture>
            <div className={s.information}>
              <Field className={s.field} spacing="tiny">
                <Icon.User size={20} />
                <Text tag="span">{character.gender}</Text>
              </Field>
              <Field className={s.field} spacing="tiny">
                <Icon.Home size={20} />
                <Text tag="span">{character.location.name}</Text>
              </Field>
              <Field className={s.field} spacing="tiny">
                <Icon.Globe size={20} />
                <Text tag="span">{character.origin.name}</Text>
              </Field>
              <Field className={s.field}>
                <Icon.Film size={20} />
                <Text tag="span">{character.episode.length}</Text>
              </Field>
            </div>
          </Modal.Content>
        </Modal>
      )}
    </section>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
