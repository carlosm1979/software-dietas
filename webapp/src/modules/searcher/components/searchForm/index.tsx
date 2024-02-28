import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../core/components/button/indext"
import { Input } from "../../../../core/components/input"
import { useState } from "react";
import { makeSearch } from "../../store/reducer";
import { RootState } from "../../../../core/store";

export const SearchForm = ( ) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')
    const items = useSelector((state: RootState) => {
        return state.search.items
    });

    return (<div>
        <Input placeholder="search" onChange={(value) => setSearch(value)} />
        <Button label="Search" onClick={() => {
            dispatch(makeSearch(search) as any)
        }} />
        {items.map((i: any) => (<div key={i.id}>{i.description}</div>))}
    </div>)
}