import { useAuthContext } from '../context/AuthContext';

const EditarDatos = () => {
    const { id } = useParams();

    const { token, usuario } = useAuthContext();


    return (
        <CardBody>
            <FormularioEditar id={id} token={token} usuario={usuario} />
        </CardBody>
    )
}

export default EditarDatos;