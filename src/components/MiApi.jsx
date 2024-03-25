import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';


const MiApi = ({search, regionFilter}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  

  const filteredUsers = users.filter((user) => {
    const localidad = user.localidad_nombre || ''; 
    const searchTerm = search || '';
    const region = user.fk_region || '';
    return (
      localidad.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
      (regionFilter ? region === regionFilter : true)
     
  );
});



  const getUsers = async () => {
    try {
      const response = await fetch('https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php');
      const data = await response.json();
//ordenar por orden alfabetico de comunas
      const sortedData = data.sort((a, b) => (a.localidad_nombre > b.localidad_nombre) ? 1 : -1);
      setUsers(sortedData);
      setLoading(false); // Indicar que la carga ha terminado
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
<div>

{loading ? (
        <h3 className='cargando'>Cargando Datos...por favor espere</h3>
      ) : (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        
          <th>Comuna</th>
          <th>Farmacia</th>
          <th>Horario Apertura</th>
          <th>Horario Cierre</th>
          <th>Dirección</th>
          <th>Mapa</th>

        </tr>
      </thead>
      
      <tbody striped>
      {filteredUsers.map((user, index) => (
        <tr key={index}>       
          <td>{user.localidad_nombre}</td>
          <td>{user.local_nombre}</td>
          <td>{user.funcionamiento_hora_apertura.substring(0, 5)} {parseInt(user.funcionamiento_hora_apertura.substring(0, 2)) >= 20 ? 'PM' : 'AM'}</td>
          <td>{user.funcionamiento_hora_cierre.substring(0, 5)} {parseInt(user.funcionamiento_hora_cierre.substring(0, 2)) >= 20 ? 'PM' : 'AM'}</td>
          <td className='alt'>{user.local_direccion}</td>
          <td><a href={`https://www.google.com/maps/search/?api=1&query=${user.local_lat},${user.local_lng}`} target="_blank" rel="noopener noreferrer">Ver Mapa</a></td>


        </tr>
           ))}
      </tbody>
    
    </Table>

      )}
     
    </div>
  
  );
};

export default MiApi;




