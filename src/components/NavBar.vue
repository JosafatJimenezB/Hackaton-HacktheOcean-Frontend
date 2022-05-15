<template>
    <div class="navbar">
        <div class="logo">
            <img src="../assets/logoV1.png" alt="">
        </div>
        <nav>
            <router-link class="nav-item" to="/">Home</router-link>
        </nav>
    </div>
</template>

<style scoped>
    .navbar{
        max-width: 1280px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }

    .navbar.scrolled{
        background-color: var(--bg-color-transparent);
        box-shadow: 0 5px 20px 0.1px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(20px);
    }

    .logo img{
        padding-top: 10px;
        height: 50px;
    }

</style>