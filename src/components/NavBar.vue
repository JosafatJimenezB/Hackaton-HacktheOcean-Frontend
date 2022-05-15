<template>
    <div class="navbar">
        <div class="logo">
            <img src="../assets/logoV1.png" alt="">
        </div>
        <nav>
            <router-link class="nav-item" to="/">Home</router-link>
            <router-link class="nav-item" to="/login"> login</router-link>
            <!-- <router-link class="nav-item" to="/dashboard"> Dashboard</router-link> -->
        </nav>
    </div>
</template>

<style>
    .navbar{
        width: 100%;
        height: 100px;
        max-width: 1366px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }

    .logo img{
        padding-top: 10px;
        height: 50px;
    }


    @media screen and (min-width: 992px) and (max-width: 1366px) {
        .navbar{
            width: 100%;
            max-width: 800px;
        }

        .logo img{
            padding-top: 10px;
            height: 50px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        .navbar{
            width: 100%;
            max-width: 600px;
        }

        .logo img{
            padding-top: 10px;
            height: 40px;
        }
    }

    @media screen and (min-width: 300px) and (max-width: 767px) {
        .navbar{
            width: 100%;
        }

        .logo img{
            padding-top: 10px;
            height: 40px;
            margin-left: 30px;
        }

        nav{
            margin-right: 30px;
        }
    }

</style>