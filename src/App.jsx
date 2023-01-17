import { useState } from "react";
import {BaseColaboradores} from "./api/array.js"

const App = () => {
    const [colaboradores, setColaboradores] = useState(BaseColaboradores)
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [search, setSearch] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        const newColaboradores = {
            nombre: nombre,
            correo: correo,
            id: Date.now()
        }

        if(nombre === "" || correo === "") {
            return alert("Faltan campos por llenar")
        }

        setColaboradores([...colaboradores, newColaboradores])
        setNombre("")
        setCorreo("")
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredColaboradores = colaboradores.filter((colaborador) => {

        if (colaborador.nombre.toLowerCase().includes(search.toLowerCase())) {
        
        return true;
        
        }
        
        return false;
        
        });

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                <div className="container-fluid bg-black">
                    <h1 className="navbar-brand text-white">Buscador de Colaboradores</h1>
                    <form className="d-flex text-white" role="search">
                        <input className="form-control me-2 my-3" type="search" placeholder="Busca un colaborador" aria-label="Search" value={search} onChange={handleChange}/>
                    </form>
                </div>
            </nav>
            <form onSubmit={handleSubmit} action="">
                <div className="mt-5">
                    <h4>Nombre del colaborador</h4>
                    <input className="mt-3 ms-3" type="text" placeholder="Ingresa nombre del colaborador" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div className="mt-4">
                    <h4>Correo del colaborador</h4>
                    <input className="mt-3 ms-3" type="text" placeholder="Ingresa correo del colaborador" onChange={(e) => setCorreo(e.target.value)} value={correo}/>
                </div>
                <button className="mt-5 btn btn-primary" type="submit">Agregar colaborador</button>
            </form>
            <div className="mt-5">
                <h2>Listado de colaboradores</h2>
                <ul>
                    {
                        filteredColaboradores.map(({nombre, correo , id,}) => {
                            return (
                                <li key={id}>{nombre} - {correo}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )        
}

export default App;