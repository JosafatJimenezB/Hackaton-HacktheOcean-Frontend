
<template>
    <div class="container">

        <div class="info-container">
            <div class="text-container">
                <h2>Especies que se encuentran en peligro</h2>
                <p>De sobra es ya conocido, que en el mar conviven numerosas especies acuáticas, bien sean animales o plantas, las cuales conforman un amplio y variado ecosistema. Sin embargo, dicho ecosistema está sufriendo importantes pérdidas, muchas de ellas irreversibles, debido a la acción humana incontrolada.
                    Hechos tales como la pesca incontrolada, la acidificación del agua, la gran contaminación que sufren los mares y océanos, y el cambio climático, del cual, somos los principales responsables, está teniendo como consecuencia que numerosas especies marinas se encuentren en peligro de extinción.</p>
            </div>
            <div class="img-slider">
               <div class="slide">
                   <img src="../assets/Vaquita-Marina.jpg" alt="">
                   <div class="info">
                       <h3>#01</h3>
                       <p>Vaquita Marina</p>
                   </div>
               </div>
            </div>
        </div>
        <details>
                    <summary>Ver Más Imagenes</summary>
                    <div class="container-cards">
                        <div class="card">
                            <img src="../assets/Delfín-maui.jpg" alt="">
                            <div class="card-info">
                                <h3>#02</h3>
                           <p>El delfín de Maui</p>
                        </div>
                        </div>
                        <div class="card">
                            <img src="../assets/Foca-monje.jpg" alt="">
                            <div class="card-info">
                                <h3>#03</h3>
                                <p>Foca monje</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="../assets/Pepinos-de-mar-300x200.jpg" alt="">
                            <div class="card-info">
                                <h3>#04</h3>
                                <p>Pepinos de mar</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="../assets/Anguila-europea-300x200.jpg" alt="">
                            <div class="card-info">
                                <h3>#05</h3>
                                <p>Anguila eruropea</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="../assets/Nacra-300x200.jpg" alt="">
                            <div class="card-info">
                                <h3>#06</h3>
                                <p>Nacra</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="../assets/ballena-gris-300x200.jpg" alt="">
                            <div class="card-info">
                                <h3>#07</h3>
                                <p>Ballena gris</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="../assets/tortuga-laúd-300x200.jpg" alt="">
                            <div class="card-info">
                                <h3>#08</h3>
                                <p>Tortuga Laúd</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="../assets/pez-guitarra-300x200.jpg" alt="">
                            <div class="card-info">
                                <h3>#09</h3>
                                <p>Pez guitarra</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="../assets/Rorcual-común-2-300x200.jpg" alt="">
                            <div class="card-info">
                                <h3>#10</h3>
                                <p>Rorcual común</p>
                            </div>
                        </div>
                    </div>
                </details>
    </div>
</template>


<style scoped>
    .container{
        padding: 150px 100px;
        background: #fff;
        height: auto;
    }

    .text-container h2{
        text-align: start;
        font-size: 3rem;
    }

    .info-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        padding: 0 50px;
    }

    .text-container p{
        font-size: 1.2rem;
        text-align: justify;
        line-height: 2rem;
    }

    .img-slider{
        width: 100%;
    }

    .slide{
        position: relative;
        width: 100%;
    }

    .info{
        position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 10;
        color: #fff;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(20px);
        border-radius: 5px;
        padding: 10px;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    .slide img{
        width: 100%;
        height: 100%;
    }


    details{
        margin-top: 30px;
    }



    .container-cards{
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        padding: 0 50px;
    }

    .card{
        position: relative;
        width: 100%;
    }

    .card-info{
        position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 10;
        color: #fff;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(20px);
        border-radius: 5px;
        padding: 10px;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    .card img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    

     @media screen and (min-width: 992px) and (max-width: 1366px){
        .container{
            padding: 100px 0;
            height: auto;
        }

        .text-container h2{
            text-align: start;
            font-size: 3rem;
        }

        .info-container{
            grid-template-columns: repeat(2, 1fr);
        }

        .text-container p{
            font-size: 1.2rem;
            text-align: justify;
            line-height: 2rem;
        }

        .img-slider{
            width: 100%;
        }

        .slide{
            position: relative;
            width: 100%;
        }

        .slide img{
            width: 100%;
            height: 100%;
        }

        .container-cards{
            width: 100%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }

        .card{
            position: relative;
            width: 100%;
        }

        .card-info{
            position: absolute;
        }
     }


     @media screen and (min-width: 768px) and (max-width: 991px){
        
         .container{
            padding: 50px 30px;
            height: auto;
         }

        .text-container h2{
            text-align: start;
            font-size: 2.4rem;
        }

        .info-container{
            grid-template-columns: repeat(2, 1fr);
            padding: 0 ;
        }

        .text-container p{
            font-size: 1rem;
            line-height: 1rem;
        }

        .img-slider{
            width: 100%;
            padding-top: 100px;
        }

        .container-cards{
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 0;
        }

        .card{
            position: relative;
            width: 100%;
        }

        .card-info{
            position: absolute;
        }
     }



     @media screen and (min-width: 300px) and (max-width: 767px){
        
         .container{
            padding: 50px 30px;
            height: auto;
         }

        .text-container h2{
            font-size: 2rem;
        }

        .info-container{
            grid-template-columns: 1fr;
            padding: 0 ;
        }

        .text-container p{
            line-height: 1.3rem;
        }

        .img-slider{
            padding-top: 30px;
        }

        .container-cards{
            grid-template-columns: 1fr;
            padding: 0;
        }

        .card{
            position: relative;
            width: 100%;
        }
     }


</style>
