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
        </div>

        <div class="especie">

        </div>
    </div>
</template>

<style>
    .container{
        width: 100%;
        height: 1000px;
        box-sizing: border-box;
    }

    .card {
        width: 200px;
        height: auto;
        padding: 20px;
        background: rgb(236, 236, 236);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    .card img{
        width: 50px;
    }

    .biologo{
        width: 100%;
    }

    .biologo h2{
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
</script>
