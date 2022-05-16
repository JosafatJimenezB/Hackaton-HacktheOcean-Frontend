<template>
    <div class="container">
        <h2>Mapa de especies marinas</h2>
        <img src="../assets/mapa.jpg" alt="">
        <a href="http://geoportal.conabio.gob.mx/#!l=peces:1@m=mixto" target="__blank">Ver mapa Completo</a>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: auto;
        padding: 30px 0 30px;
        margin: none;
        background: #fff;
    }

    .container h2{
        font-size: 3rem;
    }

    .container img{
        width: 100%;
        height: 100%;
    }

    .container a{
        text-decoration: none;
        margin-top: 70px;
        padding: 15px 30px;
        background: rgba(255, 255, 255, .3);
        font-size: 1rem;
        color: #000;
        outline: none;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 4px 8px 0px #59491E29;
        cursor: pointer;
        transition: background .3s ease-out;
    }

    .container a:hover{
        background: rgba(255, 255, 255, 0.5);
    }



</style>