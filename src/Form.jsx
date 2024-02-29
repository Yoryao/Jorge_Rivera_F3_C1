import { useState } from "react";
import "./style/form.module.css"
import Card from "./Card";

const Form = () => {

	const [banda, setBanda] = useState({
		cantante: '',
		nombre: '',
	})

	const [error, setError] = useState(false);
	const [mostrar, setMostrar] = useState(false);
	const [formulario, setFormulario] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(banda.cantante + " " + banda.nombre);
		if (banda.cantante[0] === " " || banda.cantante.length < 3 || banda.nombre.length < 6) {
			console.log("error en los imputs.")
			setError(true)
		} else {
			setError(false);
			setMostrar(true);
			setFormulario(false);
			console.log("Validación Correcta")
		}
	}

	const reintentar = () => {
		setError(false);
	}

	return (
		<>
			{
				formulario &&
				<form>
					<label >Cantante:</label>
					<input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre del cantante" required
						onChange={(event) => { setBanda({ ...banda, cantante: event.target.value }) }} />
					<label >Banda:</label>
					<input type="text" id="nombre" name="nombre" placeholder="Ingresa nombre el nombre de la banda" required
						onChange={(event) => { setBanda({ ...banda, nombre: event.target.value }) }} />
					<button onClick={handleSubmit}>Enviar</button>
					{error &&
						<button onClick={() => { reintentar }}>Reintentar</button>
					}
				</form>
			}
			{
				error && <p>Por favor chequea que la información sea correcta.</p>
			}
			{
				mostrar && <Card props={banda} />
			}
		</>
	)
}

export default Form;