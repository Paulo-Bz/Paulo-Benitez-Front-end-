import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { traerDatosDePosteo } from '../utils/llamados';



const FormularioEditar = (props) => {
    const { id, token } = props;
    const url = 'http://localhost:3000/publicacion'

    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
    const [errores, setErrores] = useState({});
    const navigate = useNavigate();

    const cambiarTitulo = (e) => {
        setTitulo(e.target.value);
    }
    const cambiarContenido = (e) => {
        setContenido(e.target.value);
    }

    const controlarDatos = async () => {
        let datosVacios = {}

        if (titulo.length === 0) {
            datosVacios.titulo = 'Introducir al menos un titulo';
        }
        if (contenido.length === 0) {
            datosVacios.contenido = 'Introducir al menos un contenido';
        }
        setErrores(datosVacios);

        if (Object.entries(datosVacios).length === 0) {
            setDeshabilitarBoton(true);



            await enviarDatos();
        }
    }

    const enviarDatos = async () => {
        const datos = {
            id: id,
            titulo: titulo,
            contenido: contenido,
        }
        const headers = {
            token: token
        }

        try {
            const respuesta = await axios.put(url, datos, { headers: headers });

            if (respuesta.status === 200) {
                return navigate('/');
            } else {
                setErrores({ error: 'Ocurrio un error al enviar Datos' });
            }
        } catch (error) {
            setErrores({ error: 'Ocurrio un error' });
        }
        setDeshabilitarBoton(false);
    }

    const traerDatos = async () => {
        if (titulo) {
            const respuesta = await traerDatosDePosteo(id)
            if (respuesta) {
                if (titulo.id !== respuesta.autor) {
                    return navigate('/')
                }


                setTitulo(respuesta.titulo);
                setContenido(respuesta.contenido);

            } else {
                setErrores({ error: 'Ocurrio un error al traer Datos' });
                setDeshabilitarBoton(true);
            }
        } else {
            return navigate('/')
        }
    }

    useEffect(() => {
        traerDatos();
    }, [])


    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: "blue" }}>Titulo</Form.Label>
                <Form.Control type="text" onInput={cambiarTitulo} defaultValue={titulo} />
                {
                    errores.titulo && (<span style={{ color: "red" }}>{errores.titulo}</span>)
                }
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: "blue" }}>Contenido</Form.Label>
                <Form.Control type="text" onInput={cambiarContenido} defaultValue={contenido} />
                {
                    errores.contenido && (<span style={{ color: "red" }}>{errores.contenido}</span>)
                }
            </Form.Group>
            {
                errores.error && (<Alert variant="warning">{errores.error}</Alert>)
            }
            <Button variant="primary" onClick={controlarDatos} disabled={deshabilitarBoton}>Editar Publicacion</Button>
            {
                deshabilitarBoton ? 'Datos Enviados' : 'Esperando enviar datos'
            }
        </Form>
    );
}

export default FormularioEditar;
