import { FC } from "react"

export const Input: FC<{onChange: (value: string) => void; }> = ({onChange}) => {

    return (<>
    <label htmlFor="sd-input">search</label>
    <input id="sd-input" type="text" onChange={(e) => {
        onChange(e.currentTarget.value)
    }} ></input></>)
}