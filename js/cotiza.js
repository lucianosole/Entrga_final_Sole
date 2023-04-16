const buscarCotizacion = async () => {
    
    mostrarloading();


    const cotiza = await fetch ("https://api.bluelytics.com.ar/v2/latest");
    const data = await cotiza.json();

    let contenido=`
    <div class="card m-1 shadow p-1 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Dolar - Oficial</h5>
            <p class="card-text">$ ${data.oficial.value_sell}</p>
            <p class="card-text">$ ${data.oficial.value_buy}</p>
        </div>
    </div>
    <div class="card m-1 shadow p-1 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Euro - Oficial</h5>
            <p class="card-text">$ ${data.oficial_euro.value_sell}</p>
            <p class="card-text">$ ${data.oficial_euro.value_buy}</p>
        </div>
    </div>
    <div class="card m-1 shadow p-1 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Dolar Blue</h5>
            <p class="card-text">$ ${data.blue.value_sell}</p>
            <p class="card-text">$ ${data.blue.value_buy}</p>
        </div>
    </div>
    <div class="card m-1 shadow p-1 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Euro Blue</h5>
            <p class="card-text">$ ${data.blue_euro.value_sell}</p>
            <p class="card-text">$ ${data.blue_euro.value_buy}</p>
        </div>
    </div>
    
    <div>
        <p class="fs-6 fst-italic text-end">Última actualización ${data.last_update}</p>
    </div>`;


    document.getElementById("cotizacion").innerHTML = contenido;

}
 function mostrarloading(){
    contenido = `<div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;

    document.getElementById("cotizacion").innerHTML = contenido;
}

buscarCotizacion();