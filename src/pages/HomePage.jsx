import { CardProducto } from '../Components/CardProducto/CardProducto';
import './HomePage.css';

export const HomePage = () => {
  
  const listadoProductos = [
    {
      id: 1,
      titulo: "Lenovo V15",
      precio: 359.999,
      categoria: "Notebooks",
      imagen: 'notebook.jpg'
    },
    {
      id: 2,
      titulo: "Samsung S10 Pro ",
      precio: 139.999,
      categoria: "Celulares",
      imagen: 'celular.jpg'
    },
    {
      id: 3,
      titulo: "Smart Led TV 55 Sony",
      precio: 401.999,
      categoria: "Monitores",
      imagen: 'tele.jpg'
    },
    {
      id: 4,
      titulo: "Appel AirPods",
      precio: 104.599,
      categoria: "Accesorios",
      imagen: 'auriculares.png'
    },
    {
      id: 5,
      titulo: "Smart TV Curvo Samsung",
      precio: 699.999,
      categoria: "Monitores",
      imagen: 'tele2.jpg'
    },
    {
      id: 6,
      titulo: "Auriculares Lenovo Bluetooth",
      precio: 21.999,
      categoria: "Accesorios",
      imagen: 'auricularesnegros.png'
    },
    {
      id: 7,
      titulo: "Samsung Tab  S7  Plus ",
      precio: 219.699,
      categoria: "Tablets",
      imagen: 'tablet.jpg'
    },
    {
      id: 8,
      titulo: "Notebook Noblex",
      precio: 71.599,
      categoria: "Monitores",
      imagen: 'notebook2.jpg'
    },
    {
      id: 9,
      titulo: "Huawei Mate 9 ",
      precio: 171.999,
      categoria: "Celulares",
      imagen: 'celular2.jpg'
    },
  ]

  return (
    <main className="home-page">
        <aside className="menu-lateral">

        <button className="navbar-toggler mx-auto mb-4 text-black d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#botonesProductos" aria-controls="botonesProductos" aria-expanded="false" aria-label="Toggle navigation">
           Categorías
          </button>

          <div className="collapse navbar-collapse d-md-none" id="botonesProductos">
        <button>Tv, Monitores</button>
         <button>Celulares</button>
         <button>Noteboocks</button>
         <button>Electrodomesticos, Aires AC</button>
         <button>Accesorios</button>
         </div>

          <div className='d-none d-md-block'>
          <button>Tv, Monitores</button>
         <button>Celulares</button>
         <button>Noteboocks</button>
         <button>Electrodomesticos, Aires AC</button>
         <button>Accesorios</button>
          </div>
         

  
        </aside>

        <div className="contenido">
            {
              listadoProductos.map(({id, titulo, precio, categoria, imagen}) => {
                return (
                  <CardProducto key={id} titulo={titulo} precio={precio} categoria={categoria} imagen={imagen} />
                );
              })
            }
     
        </div>
    </main>
  )
}
