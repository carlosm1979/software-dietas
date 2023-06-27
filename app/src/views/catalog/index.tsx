import { useState } from "react"
import { Input } from "../../components/base/input"

export const FoodCatalog = () => {
    const [search, setSearch] = useState<string>('')

    return (<div>Catalog

        <Input onChange={(v) => setSearch(v)} value={search} />
    </div>)
}