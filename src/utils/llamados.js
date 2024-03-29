import axios from 'axios';


const url = 'http://localhost:3000/publicacion'

const traerDatosDePosteo = async (id) => {
    const endpoint = url + '/' + id;
    try {
        const respuesta = await axios.get(endpoint);

        if (respuesta.status === 200) {
            return respuesta.data;

        } else {
            return false;
        }

    } catch (error) {
        return false;
    }
}

const traerComentariosDePosteo = async (id) => {
    const endpoint = url + 'comentarios/' + idPosteo;
    try {
        const respuesta = await axios.get(endpoint);

        if (respuesta.status === 200) {
            return respuesta.data;

        } else {
            return false;
        }

    } catch (error) {
        return false;
    }
}

export { traerDatosDePosteo, traerComentariosDePosteo };