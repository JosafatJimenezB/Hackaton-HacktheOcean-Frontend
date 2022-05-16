<template>
    <div class="container">
        <div class="biologo">
            <h2>Biologos registrados</h2>
            <div class="cards">

                <div class="card">
                    <img src="../assets/user.png" alt="">
                    <h3 id="nombre">Nombre</h3>
                    <h3 id="organizacion">Organizacion</h3>
                    <h3 id="especialidad">Especialidad</h3>
                    <h3 id="pais">País</h3>
                    <details>
                        <summary>Ver más</summary>
                        <h3 id="fecha-captura">fecha de captura</h3>
                        <h3 id="especie">Especie</h3>
                        <h3 id="ubicaciones">Ubicaciones</h3>
                    </details>
                </div>
                <div class="card">
                    <img src="../assets/user.png" alt="">
                    <h3 id="nombre">Nombre</h3>
                    <h3 id="organizacion">Organizacion</h3>
                    <h3 id="especialidad">Especialidad</h3>
                    <h3 id="pais">País</h3>
                    <details>
                        <summary>Ver más</summary>
                        <h3 id="fecha-captura">fecha de captura</h3>
                        <h3 id="especie">Especie</h3>
                        <h3 id="ubicaciones">Ubicaciones</h3>
                    </details>
                </div>
                <div class="card">
                    <img src="../assets/user.png" alt="">
                    <h3 id="nombre">Nombre</h3>
                    <h3 id="organizacion">Organizacion</h3>
                    <h3 id="especialidad">Especialidad</h3>
                    <h3 id="pais">País</h3>
                    <details>
                        <summary>Ver más</summary>
                        <h3 id="fecha-captura">fecha de captura</h3>
                        <h3 id="especie">Especie</h3>
                        <h3 id="ubicaciones">Ubicaciones</h3>
                    </details>
                </div>
                <div class="card">
                    <img src="../assets/user.png" alt="">
                    <h3 id="nombre">Nombre</h3>
                    <h3 id="organizacion">Organizacion</h3>
                    <h3 id="especialidad">Especialidad</h3>
                    <h3 id="pais">País</h3>
                    <details>
                        <summary>Ver más</summary>
                        <h3 id="fecha-captura">fecha de captura</h3>
                        <h3 id="especie">Especie</h3>
                        <h3 id="ubicaciones">Ubicaciones</h3>
                    </details>
                </div>
            </div>
            <a href="/#/registroBiologo">Registrar biologo</a>
        </div>

        <div class="especie">
            <h2>Especies registradas</h2>
            <div class="cards">
                <div class="card">
                    <img src="../assets/icono-pez.png" alt="">
                    <h3 id="especie-pez">Especie</h3>
                    <h3 id="nom-cienti">Nombre Cientifico</h3>
                    <h3 id="familia">Familia</h3>
                    <h3 id="biologo-id">Biologo</h3>
                    <details>
                        <summary>Ver más</summary>
                        <h3 id="fecha-captura">Fecha avistamiento</h3>
                        <h3 id="ubicacion">Ubicaciones</h3>
                    </details>
                </div>
                <div class="card">
                    <img src="../assets/icono-pez.png" alt="">
                    <h3 id="especie-pez">Especie</h3>
                    <h3 id="nom-cienti">Nombre Cientifico</h3>
                    <h3 id="familia">Familia</h3>
                    <h3 id="biologo-id">Biologo</h3>
                    <details>
                        <summary>Ver más</summary>
                        <h3 id="fecha-captura">Fecha avistamiento</h3>
                        <h3 id="ubicacion">Ubicaciones</h3>
                    </details>
                </div>
                <div class="card">
                    <img src="../assets/icono-pez.png" alt="">
                    <h3 id="especie-pez">Especie</h3>
                    <h3 id="nom-cienti">Nombre Cientifico</h3>
                    <h3 id="familia">Familia</h3>
                    <h3 id="biologo-id">Biologo</h3>
                    <details>
                        <summary>Ver más</summary>
                        <h3 id="fecha-captura">Fecha avistamiento</h3>
                        <h3 id="ubicacion">Ubicaciones</h3>
                    </details>
                </div>
                <div class="card">
                    <img src="../assets/icono-pez.png" alt="">
                    <h3 id="especie-pez">Especie</h3>
                    <h3 id="nom-cienti">Nombre Cientifico</h3>
                    <h3 id="familia">Familia</h3>
                    <h3 id="biologo-id">Biologo</h3>
                    <details>
                        <summary>Ver más</summary>
                        <h3 id="fecha-captura">Fecha avistamiento</h3>
                        <h3 id="ubicacion">Ubicaciones</h3>
                    </details>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .container{
        width: 100%;
        height: auto;
        padding: 50px 0;
        box-sizing: border-box;
    }

    .card {
        width: 200px;
        height: auto;
        padding: 20px;
        margin: 10px;
        background: rgb(236, 236, 236);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    .card img{
        width: 50px;
    }

    .biologo{
        width: 100%;
    }

    .biologo a {
        text-decoration: none;
        margin-top: 50px;
        padding: 15px 30px;
        background: rgba(255, 255, 255, .3);
        font-size: 1rem;
        color: #fff;
        outline: none;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 4px 8px 0px #59491E29;
        cursor: pointer;
        transition: background .3s ease-out;
    }

    .biologo a:hover{
        background: rgba(255, 255, 255, 0.5);
    }

    .biologo h2{
        font-size: 3rem;
        color: #fff;
        text-shadow: 0 0 10px rgb(126, 126, 126);
    }

    .especie h2{
        font-size: 3rem;
        color: #fff;
        text-shadow: 0 0 10px rgb(126, 126, 126);
    }

    .cards{
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 auto;
    }

</style>

<script>
import BiologoService from "../services/BiologoService";

export default {
    name: "list_biologos",
    data() {
        return {}
    },
    methods: {
        getAllBiologos(){
            BiologoService.getAll()
            .then(response =>{
                console.log(response.data)
            })
            .catch(e =>{
                console.log(e)
            })
        }
    },
    mounted() {
      this.getAllBiologos();
  }
}

</script>
