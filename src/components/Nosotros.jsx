import React from "react";
import { NavLink } from "react-router-dom";

const Nosotros = () => {
  const [equipo, setEquipo] = React.useState([]);

  //solo se ejecutara una ves  ya que se coloca un arreglo vacio
  React.useEffect(() => {
    // console.log('useEffect');
    // setEquipo(datos);
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const resData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await resData.json();
    console.log("Datos", users);
    setEquipo(users);
  };

  return (
    <div>
      <ul className="list-group">
        {equipo.map((item, index) => {
          return (
            <li key={item.id} className="list-group-item">
              <NavLink className="nav-link" to={`nosotros/${item.id}`}>
                Titulo: {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nosotros;
