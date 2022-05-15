<template>
    <div class="container">
        <div class="text-container">
            <h1>Protejamos la fauna marina</h1>
            <p>Únete a la lucha por salvar a estas especies en peligro</p>
            <a href="#">Quiero Contribuir</a>
        </div>
        <div class="img-container">
            <img src="../assets/tortuga-carey.png" alt="">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,149.3C384,181,480,203,576,181.3C672,160,768,96,864,74.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <b>Menos del 3% del océano esta protegido.<br> Necesitamos al menos el 30% para <br>salvaguardar la biodiversidad.</b>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 50px;
        gap: 1rem;;
        box-sizing: border-box;
        position: relative;
    }

    .container b{
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        font-size: 2rem;  
        text-align: end;
        color: #89D4CF;
        text-shadow: 0px 0px 10px #89D4CF;
    }

    svg{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .text-container{
        color: #fff;
        padding: 150px 100px 0;
    }

    .text-container h1{
        text-align: start;
        font-size: 4rem;
    }

    .text-container p{
        text-align: start;
        font-size: 1.5rem;
        margin-bottom: 50px;
    }

    .text-container a{
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
        padding: 10px 20px;
        border-radius: 5px;
        background: rgba(255,255,255,0.3);
        backdrop-filter: blur(20px);
        transition: background 0.3s ease-in-out;
    }

    .text-container a:hover{
        background: rgba(255,255,255,0.5);
    }

    .img-container{
        padding: 150px 0 0;
    }

    .img-container img{
        width: 90%;
    }

    @media screen and (min-width: 992px) and (max-width: 1366px){
        
        
        .text-container{
            padding: 100px 50px 0;
        }

        .container b{
            bottom: 1.4rem;
            right: 1.4rem;
            font-size: 1.5rem; 
        }

        .text-container h1{
            font-size: 3rem;
        }

        .text-container p{
            font-size: 1.5rem;
            margin-bottom: 40px;
        }

        .img-container{
            padding: 100px 0 0;
        }

        .img-container img{
            width: 90%;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px){
        .container{
            grid-template-columns: 1fr;
            padding: 0 50px;
        }
        
        .text-container{
            padding: 0;
            text-align: center;
        }

        .container b{
            bottom: 1rem;
            right: 1rem;
            font-size: 1rem; 
        }

        .text-container h1{
            font-size: 3rem;
        }

        .text-container p{
            font-size: 1.5rem;
            margin-bottom: 40px;
        }

        .img-container{
            padding: 100px 0 0;
        }

        .img-container img{
            width: 90%;
        }
    }

    @media screen and (min-width: 300px) and (max-width: 767px){
        .container{
            width: 100%;
            grid-template-columns: 1fr;
            padding: 0;
            gap: 0;
        }
        
        .text-container{
            padding: 0 30px;
            height: auto;
            text-align: center;
        }

        .container b{
            color: #fff;
            bottom: 6rem;
            right: 1rem;
            font-size: 1rem; 
        }

        .text-container h1{
            font-size: 2rem;
        }

        .text-container p{
            font-size: 1rem;
            margin-bottom: 40px;
        }

        .img-container{
            padding: 0;
        }

        .text-container a{
            font-size: 1rem;
        }

        .img-container{
            margin: 0;
            padding: 0;
        }

        .img-container img{
            width: 70%;
        }
    }



</style>