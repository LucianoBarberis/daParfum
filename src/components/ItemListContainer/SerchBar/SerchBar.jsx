import { useState } from "react";

export const SerchBar = ({ data, setFilteredResults}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        const results = data.filter((item) =>
            item.descripcion.toLowerCase().includes(value.toLowerCase())
        );     
        setFilteredResults(results);
    };
    return (
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Buscar..." className="inputSearch" />
    )
}
