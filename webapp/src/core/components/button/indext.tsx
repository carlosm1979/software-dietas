import { FC } from "react"

interface IButtonComponent {
    onClick: () => void;
    label: string;
}

export const Button: FC<IButtonComponent> = ({onClick, label}) => {
    return (<button onClick={() => {onClick()}} >{label}</button>)
}