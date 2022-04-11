import { ReactElement } from "react"
import Image from "next/image"
import { Heading, Text } from "ui"
import s from "./User.module.css"

interface UserI {
    photo: string
    name: string
    gender: string
    location: string
}

const User = ({ photo, name, gender, location }: UserI): ReactElement => {
    return (
        <figure className={s.user}>
            <Image src={photo} alt={name} width={250} height={250} />
            <figcaption className={s.about}>
                <Heading rank={3} type="caption" text={name} />
                <div className={s.information}>
                    <Text tag="span">{gender}</Text>
                </div>
                <div className={s.information}>
                    <Text tag="span">{location}</Text>
                </div>
            </figcaption>
        </figure>
    )
}

export default User
