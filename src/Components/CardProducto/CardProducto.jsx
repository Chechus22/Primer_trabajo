import './CardProducto.css'

export const CardProducto = ({titulo, precio, categoria, imagen}) => {
  return (
    <div className="producto">
      <img src={`../../${imagen}`} alt="" />
      <span>{categoria}</span>
      <h3>{titulo}</h3>
      <h4>${precio}</h4>
      <h5>Envio Gratis</h5>
      <button className='btn-agregar' href="">Agregar al carrito</button>
    </div>
  )
}
