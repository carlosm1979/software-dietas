import { FC } from "react"

interface IInuptComponent {
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Input: FC<IInuptComponent> = ({onChange, placeholder = ''}) => {

    return (<>
    <input id="sd-input" type="text" placeholder={placeholder} onChange={(e) => {
        onChange(e.currentTarget.value)
    }} ></input></>)
}