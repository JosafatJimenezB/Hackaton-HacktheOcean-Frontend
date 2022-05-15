<template>
    <div class="container">
        <div class="info">
            <p>Ocenautas es una organización<br> sin fines de lucro que lucha por la<br> conservación de la fauna marina.</p>
        </div>
        <div class="logo">
            <a href=""><img src="../assets/logov2.png" alt=""></a>
        </div>
        <div class="links">
            <li><a href="">Sobre Nosotros</a></li>
            <li><a href="">Contáctanos</a></li>
        </div>
    </div>    
</template>

<style scoped>
    .container{
        width: 100%;
        height: auto;
        padding: 30px 50px;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        box-sizing: border-box;
    }

    .info, 
    .logo, 
    .links{
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .info{
        color: #fff;
        text-align: start;
    }

    .links li{
        list-style: none;
    }

    .links a{
        color: #fff;
        text-align: start;
        text-decoration: none;
    }


    @media screen and (min-width: 992px) and (max-width: 1366px){
        .container{
            padding: 30px 50px;
            margin: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            box-sizing: border-box;
        }

        .info,
        .logo, 
        .links{
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px){
        .container{
            padding: 30px 30px;
            margin: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            box-sizing: border-box;
        }

        .info,
        .logo, 
        .links{
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .logo img{
            height: 50px;
        }
    }


    @media screen and (min-width: 300px) and (max-width: 767px){
        .container{
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 1rem;
        }

        .info,
        .logo, 
        .links{
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .logo img{
            height: 50px;
        }
    }



</style>