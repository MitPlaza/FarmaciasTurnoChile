const Footer = () => {

    const fechasAnual = new Date();
    const fechaAnual = fechasAnual.getFullYear();

    return(

<>
<footer>
<div class="container">
<div className="row">
Desarrollado por Mitchel Plaza @{fechaAnual}
</div>
</div>

</footer>



</>


    )



}

export default Footer