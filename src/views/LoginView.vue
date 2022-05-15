<template>
    <div class="login">
      <div class="container">
            <div class="welcome">
                <div class="text">
                    <h2>Bienvenido de nuevo</h2>
                    <p>Mira profundamente en la naturaleza y entonces comprenderás todo mejor</p>
                    <span>- Albert Einstein</span>
                </div>
            </div>
            <div class="form">
                <div class="form-container">
                    <img src="">
                    <h2>Iniciar Sesión</h2>
                    <form action="" method="post">
                        <label for="user"><i class="uil uil-user"></i> User</label>
                        <br>
                        <input type="email" name="user" id="user">
                        <br>
                        <label for="password"><i class="uil uil-lock"></i> Password</label>
                        <br>
                        <input type="password" name="password" id="password">
                        <br>
                        <input class="btn-send" type="submit" value="Login">
                    </form>
                </div>
            </div>
        </div>
        <a href="/"><i class="uil uil-left-arrow-to-left"></i> Regresar</a>
    </div>
</template>



<style scoped>
  .login{
    position: relative;
    width: 100%;
    height: calc(100vh - 100px);
  }

  .login a{
      position: absolute;
      text-decoration: none;
      color: #fff;
      top: 50px;
      left: 50px;
  }

  .container{
      width: 100%;
      height: 100vh;
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
  }

  .welcome{
      padding: 30px;
      background: url(../assets/fondo-login.jpg) rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(20px);
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .text{
      max-height: 600px;
      color: #fff;
  }

  .text h2{
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 40px;
      text-align: center;
  }

  .text p{
      font-size: 1rem;
      line-height: 2rem;
      margin-bottom: 10px;
  }



  /* -------------- Seccion del form ------------- */


  .form{
      position: relative;
      background: #fff;
      padding: 30px 50px;
  }

  .form-container{
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%);
      margin: auto;
      width: 400px;
      box-sizing: border-box;
  }

  .form-container h2{
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px;
  }

  /* --------------- Secciones del formulario --------------- */

  .form-container form label{
      margin: 0;
      padding: 0;
  }


  #user, 
  #password{
      width: 100%;
      color: #000;
      margin: none;
      outline: none; 
      padding: 3px 10px;
      border: none;
      border-bottom: 2px solid #000;
      margin-bottom: 20px;
  }

  .btn-send{
      margin-top: 40px;
      width: 300px;
      height: 40px;
      background-color: #4D5DFB;
      outline: none;
      cursor: pointer;
      border: none;
      transition: all 0.3s;
      color: #fff;
  }

  .btn-send:hover{
      background-color: transparent;
      border: 1px solid #4D5DFB;
      color: #4D5DFB;
  }


  /* Diseño responsive */

  @media screen and (max-width: 920px){
      .container{
          grid-template-columns: 1fr;
      }

      .welcome{
          height: 300px;
      }

      .form{
          height: 300px;
          padding: 0 0 30px 0;
      }

      .form-container{
          top: 0;
          height: 100%;
      }
  }


  @media screen and (max-width: 820px){

      .login a{
          top: 20px;
          left: 20px;
      }

      /* .container{
          grid-template-columns: 1fr;
      }
      .welcome{
          height: 300px;
      } */

      .form{
          height: 300px;
          padding: 0;
      }

      .form-container{
          top: 0;
          height: 100%;
      }
  }



  @media screen and (max-width: 500px){
      .login a{
          color: #000;
      }

      .welcome{
          display: none;
      }

      .form{
          height: 100vh;
      }

      .form-container{
          width: auto;
          top: 200px;
          height: 100%;
      }    
  }  
</style>
