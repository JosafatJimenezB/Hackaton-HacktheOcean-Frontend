<template>
    <div class="form-section">
        <div class="form-section_left">
            <img src="../assets/ballena-azul.png" alt="">
        </div>
        <div class="form-section_right">
            <h3>Registra un avistamiento</h3>
            <form action="#">
                <div>
                    <label for="">Especie:</label>
                    <input type="text">
                    <label for="">Coordenadas:</label>
                    <input type="text">
                    <label for="">País:</label>
                    <input type="text">
                    <label for="">Estado:</label>
                    <input type="text">
                    <label for="">Municipio:</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">Nombre:</label>
                    <input type="text">
                    <label for="">Origen:</label>
                    <input type="text">
                    <label for="">Especialidad:</label>
                    <input type="text">
                    <label for="">Fecha:</label>
                    <input type="date">
                    <label for="">Ph del agua:</label>
                    <input type="text">
                </div>
            </form>
            <button>Quiero contribuir</button>
        </div>
    </div>
</template>



<style scoped>
    .form-section {
        width: 100%;
        height: auto;
        background-color:hsla(234,95%,64%,1);
        background-image:
        radial-gradient(at 93% 12%, hsla(234,95%,64%,1) 0px, transparent 50%),
        radial-gradient(at 9% 85%, hsla(234,95%,64%,1) 0px, transparent 50%),
        radial-gradient(at 17% 18%, hsla(176,46%,68%,1) 0px, transparent 50%),
        radial-gradient(at 72% 67%, hsla(191,93%,49%,1) 0px, transparent 50%);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        padding: 50px 0;
    }

    .form-section_left{
        width: 65%;
        height: 98%;
    }

    .form-section_right {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .form-section_right h3 {
        margin-bottom: 30px;
        color: #fff;
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
    }
    .form-section_right form {
        width: 100%;
        height: 80%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    .form-section_right div {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .form-section_right label {
        color: #fff;
        font-size: 1.6rem;
        text-align: start;
        font-weight: 700;
    }
    .form-section_right input {
        width: 160px;
        height: 22px;
        margin: 5px 0 15px;
        border-radius: 5px;
        outline: none;
    }

    .form-section_right button {
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

    .form-section_right button:hover{
        background: rgba(255, 255, 255, 0.5);
    }



    @media screen and (min-width: 992px) and (max-width: 1366px) {
        .form-section {
            width: 100%;
            height: auto;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
            padding: 50px 0;
        }

        .form-section_left{
            width: 100%;
            margin: 0;
        }

        .form-section_left img{
            padding-top: 100px;
            width: 100%;
        }

        .form-section_right h3 {
            font-size: 3rem;
            font-weight: 700;
        }

        .form-section_right form {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        .form-section_right label {
            font-size: 1.3rem;
            font-weight: 400;
        }

        .form-section_right input {
            width: 160px;
            height: 22px;
            margin: 5px 0 15px;
        }

        .form-section_right button {
            margin-top: 30px;
            padding: 15px 30px;
            background: rgba(255, 255, 255, .3);
            font-size: 1rem;
        }
    }



    @media screen and (min-width: 768px) and (max-width: 991px) {
        .form-section {
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        .form-section_left{
            width: 100%;
        }

        .form-section_left img{
            padding-top: 100px;
            width: 100%;
        }

        .form-section_right h3 {
            font-size: 2rem;
            font-weight: 700;
        }

        .form-section_right form {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        .form-section_right label {
            font-size: 1.3rem;
            font-weight: 400;
        }

        .form-section_right input {
            width: 160px;
            height: 22px;
            margin: 5px 0 15px;
        }
    }



    @media screen and (min-width: 300px) and (max-width: 767px) {
        .form-section {
            width: 100%;
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .form-section_left{
            width: 100%;
        }

        .form-section_left img{
            padding-top: 100px;
            width: 100%;
        }

        .form-section_right{
            padding: 0;
        }

        .form-section_right form {
            grid-template-columns: 1fr;
            gap: 0;
        }

        .form-section_right h3 {
            font-size: 2rem;
            font-weight: 700;
        }

        .form-section_right label {
            font-size: 1.3rem;
            font-weight: 400;
        }
    }


</style>