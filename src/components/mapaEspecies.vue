<template>
    <div class="container">
        <h2>Mapa de especies marinas</h2>
        <iframe src="http://geoportal.conabio.gob.mx/#!l=peces:1@m=mixto" frameborder="0"></iframe>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: 800px;
        margin: none;
        background: #fff;
    }

    .container h2{
        font-size: 3rem;
    }

    iframe{
        width: 100%;
        height: 100%;
    }
</style>