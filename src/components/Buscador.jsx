import Form from 'react-bootstrap/Form';
import Regiones from './Regiones';


const Buscador = ({search, setSearch, regionFilter, setRegionFilter}) => {
   
    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleRegionChange = (e) => {
        setRegionFilter(e.target.value);
      };



    return(
<>
<div>
    <div className="buscar">
    <Form.Control
    type="search"
    placeholder="Ingrese su comuna"
    className="mr-sm-2"
    role="search"
    value={search}
    onChange={handleInputChange}
    />
<Regiones handleRegionChange={handleRegionChange} regionFilter={regionFilter} />
    </div>
   
</div>
</>

    )
}

export default Buscador