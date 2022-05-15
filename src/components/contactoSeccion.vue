<template>
    <div class="container">
        <h2>Sucribete a nuestro News Letter</h2>
        <p>Ingresa tu correo para recibir las ultimas noticias ambientales</p>
        <div class="form">
            <form action="" method="post">
                <input id="email" type="text" placeholder="Ingresa tu email aquí">
                <button>Suscribe</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .container{
        margin: 0;
        width: 100%;
        height: auto;
        padding: 100px 0;
        background: #fff;
    }

    .container h2{
        text-align: center;
        font-size: 3rem;
        color: #2c3e50;
        margin: 0;
    }

    .container p{
        text-align: center;
        font-size: 1.5rem;
        color: #2c3e50;
        margin-bottom: 2rem;
    }

    .form{
        width: 40%;
        margin: 0 auto;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        border: 2px solid rgba(44, 62, 80, 0.2);
    }


    .form form input{
        width: 300px;
        height: 22px;
        margin-right: 40px;
        font-size: 1rem;
        outline: none;
        border: none;
        border-bottom: 2px solid rgba(44, 62, 80, 0.3);
    }

    .form form input:active{
        background: transparent;
    }

    .form form button{
        margin-top: 50px;
        padding: 15px 30px;
        background: #4D5DFB;
        font-size: 1rem;
        border: none;
        outline: none;
        border-radius: 5px;
        color: #fff;
    }


</style>