import { useState } from 'react'
import './FormPage.css'
export const FormPage = () => {

    const [ formState, setFormState ] = useState({
        nombre: "",
        email: "",
        telefono: "",
        consulta: ""
    });


    const onInputChange = (e) => {
        const {name, value} = e.target;
        console.log(value)
        setFormState( {
            ...formState,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

  return (
    <div className='formulario'>
        <h2>Formulario de contacto</h2>

        <form onSubmit={onSubmit}>

            <div >
                <label htmlFor="">Nombre</label>
                <input name="nombre" type="text" placeholder="Ingrese su nombre" onChange={onInputChange}/>
            </div>

            <div > 
                <label htmlFor="">Email</label>
                <input name="email" type="text" placeholder="Ingrese su email" onChange={onInputChange}/>
            </div>

            <div >
                <label htmlFor="">Teléfono</label>
                <input name="telefono" type="text" placeholder="Ingrese su telefono" onChange={onInputChange}/>
            </div>

            <div >
                <label htmlFor="">Consulta:</label>
                <textarea name="consulta" id="" rows="5" onChange={onInputChange}></textarea>
            </div>

            <button type="submit">Enviar</button>

        </form>
    </div>
  )
}
