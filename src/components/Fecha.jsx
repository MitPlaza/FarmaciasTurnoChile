
const Fecha = ({ cantidadFarmacias, fechaActual }) => {
  const currentDate = fechaActual || new Date();
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const diaSemana = diasSemana[currentDate.getDay()];
  const diasMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const diaMes = diasMes[currentDate.getMonth()]
  const numeroDia = currentDate.getDate();
 

  return (
    <div>
     <h3>{cantidadFarmacias} Farmacias de turno, {diaSemana}, {numeroDia} de {diaMes}</h3>
      {/* Resto del componente */}
    </div>
  );
};

export default Fecha;