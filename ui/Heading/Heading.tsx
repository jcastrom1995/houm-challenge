import { ReactElement } from "react"
import cn from "classnames"

import s from "./Heading.module.css"

export type HeadingProps = {
    rank: 1 | 2 | 3 | 4 | 5 | 6
    type: "headline" | "title" | "subtitle" | "caption"
    text: string
}

const Heading = ({
    rank = 2,
    text,
    type = "headline",
}: HeadingProps): ReactElement => {
    const Tag = (rank > 6 ? "h6" : `h${rank}`) as keyof JSX.IntrinsicElements

    return <Tag className={cn(s.heading, s[`heading-${type}`])}>{text}</Tag>
}

export default Heading
