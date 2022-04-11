import cn from "classnames"
import { ReactElement, ReactNode } from "react"
import s from "./Field.module.css"

interface FieldI {
    children: ReactNode
    spacing: "micro" | "tiny" | "small" | "base" | "semi" | "large" | "x-large"
}

const Field = ({ children, spacing }: FieldI): ReactElement => {
    const spacingClass = spacing ? `spacing-${spacing}` : null

    return <div className={cn(s.field, spacingClass)}>{children}</div>
}

export default Field
