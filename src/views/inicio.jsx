import { useState, useEffect } from 'react';
import { CardBody } from 'react-bootstrap';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import TablaDeDatos from '../components/tablaDeDatos';


const Inicio = () => {
    const [lista, setLista] = useState([]);
    const { usuario } = useAuthContext();

    const cargarLista = async () => {
        const url = 'http://localhost:3000/publicaciones';

        const respuesta = await axios.get(url);
        //let respuesta = await fetch(url)

        if (respuesta.status === 200) {
            respuesta = await respuesta.json()

            setLista(respuesta);
        }

    }
    useEffect(() => {
        cargarLista();
    }, []);


    return (
        <CardBody>
            {usuario ? ('Hola ' + usuario.nombres) : 'Sesion no iniciada'}
            <TablaDeDatos lista={lista} usuario={usuario} />
        </CardBody>
    )
}

export default Inicio