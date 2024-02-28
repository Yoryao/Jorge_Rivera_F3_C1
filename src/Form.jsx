import { useState } from "react";
import "./style/form.module.css"

const Form = () => {

	const [alumno, setAlumno] = useState({
		name: '',
		address: '',
		dni: "",
		materia: "",
	})
	const [error, setError] = useState(false);
	const [mostrar, setmostrar] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Handle Submit");
		if (
			alumno.nombre.length > 3 &&
			alumno.apellido.length > 3 &&
			alumno.dni.length == 8 
		) {
			console.log("valido")
			setmostrar(true);
			setError(false)
		} else {
			setError(true)
			console.log("error")

		}
	}








	return (
		<>
			{
				mostrar ? null : <form action="#" method="post" id="miFormulario" onSubmit={handleSubmit}>
					<label htmlFor="nombre">Nombre:</label>
					<input type="text" id="nombre" name="nombre" required  onChange={(event) => setAlumno({...alumno, nombre: event.target.value})}/>

					<label htmlFor="apellido">Apellido:</label>
					<input type="text" id="apellido" name="apellido" required  onChange={(event) => setAlumno({...alumno, apellido: event.target.value})} />

					<label htmlFor="dni">DNI:</label>
					<input type="text" id="dni" name="dni" required onChange={(event) => setAlumno({...alumno, dni: event.target.value})} />

					<label htmlFor="materia">Materia:</label>
					<input type="text" id="materia" name="materia"   onChange={(event) => setAlumno({...alumno, materia: event.target.value})}/>

					<button type="submit">Enviar</button>
				</form>
			}
			{
				mostrar ?
					<h3>Se agrego el Alumno: {alumno.nombre}</h3> :
					<p>Ingrese los datos del alumno.</p>
			}
			{
				error && <p>Verifique los datos ingresados.</p>
			}
		</>
	)
}
export default Form;