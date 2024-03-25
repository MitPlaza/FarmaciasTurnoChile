import { useState,  useEffect} from 'react'
import './App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header'
import MiApi from './components/MiApi'
import Fecha from './components/Fecha'
import Buscador from "./components/Buscador";
import Footer from './components/Footer';


function App() {
  const [search, setSearch] = useState("")
  const [regionFilter, setRegionFilter] = useState("");
  const [cantidadFarmacias, setCantidadFarmacias] = useState(0);
  const [fechaActual, setFechaActual] = useState(new Date());

  useEffect(() => {
    // Función para obtener la cantidad de farmacias
    const obtenerCantidadFarmacias = async () => {
      try {
        const response = await fetch('https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php');
        const data = await response.json();
        setCantidadFarmacias(data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    obtenerCantidadFarmacias(); // Llamar a la función al cargar el componente
  }, []);

  return (
    <>
    <header fluid>
        <Header/>
        <h1> Farmacias De Turno</h1>
     
    </header>
    <div className="container principal">
      <Row className='bloque'>
        <Col>
        <Buscador search={search} setSearch={setSearch} regionFilter={regionFilter} setRegionFilter={setRegionFilter}/>
        </Col>
        <Col>
        <Fecha cantidadFarmacias={cantidadFarmacias} fechaActual={fechaActual} />
        </Col>
      </Row>
      <div className="row">   
     
<MiApi search={search} regionFilter={regionFilter}/>    
      </div>
    </div> 
    <Footer />    
    </>
  )
}

export default App
