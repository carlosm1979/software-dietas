import { useEffect, useState } from "react"
import { Input } from "../../../../components/base/input"
import { useCatalog } from "../../hooks/useCatalog"

export const FoodSearchInput = () => {
    const [search, setSearch] = useState<string>('');
    const {searchFood} = useCatalog();
    useEffect(() => {
        if (search) {
            searchFood(search);
        }
        
    // eslint-disable-next-line
    }, [search])


    return (<Input onChange={(v) => {
        setSearch(v);
    } } value={search} />)
}