import React from 'react';

const Regiones = ({ handleRegionChange }) => {
  const regionActual = [
    { fk_region: '1', nombreRegion: 'Región de Arica y Parinacota' },
    { fk_region: '2', nombreRegion: 'Región de Tarapacá' },
    { fk_region: '3', nombreRegion: 'Región de Antofagasta' },
    { fk_region: '4', nombreRegion: 'Región de Atacama' },
    { fk_region: '5', nombreRegion: 'Región de Coquimbo' },
    { fk_region: '6', nombreRegion: 'Región de Valparaiso' },
    { fk_region: '7', nombreRegion: 'Región Metropolitana' },
    { fk_region: '8', nombreRegion: 'Región del Libertador General Bernardo OHiggins' },
    { fk_region: '9', nombreRegion: 'Región del Maule' },
    { fk_region: '10', nombreRegion: 'Región del Biobío' },
    { fk_region: '11', nombreRegion: 'Región de La Araucanía' },
    { fk_region: '12', nombreRegion: 'Región de Los Ríos' },
    { fk_region: '13', nombreRegion: 'Región de Los Lagos de Chile' },
    { fk_region: '14', nombreRegion: 'Región de Aysén del General Carlos Ibáñez del Campo' },
    { fk_region: '15', nombreRegion: 'Región de Magallanes y la Antártica Chilena' },
    { fk_region: '16', nombreRegion: 'Región de Ñuble' }
  ];

  console.log(handleRegionChange)

  return (
    <div className="select-region">
      <select onChange={handleRegionChange}>
        <option value="">Todas las regiones</option>
        {regionActual.map((region) => (
          <option key={region.fk_region} value={region.fk_region}>
            {region.nombreRegion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Regiones;