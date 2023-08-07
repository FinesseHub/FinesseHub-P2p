<template>
    <div class="w-full h-10 bg-brown-2"></div>
    <header class="screen-size flex justify-between bg-white  top-10 py-4">
        <p class="text-brown-1 text-3xl logo">FINESSE<span class="font-bold">HUB</span></p>

        <nav class="flex items-center gap-2.5 text-brown-2">
            <p class="p-2.5">Home</p>
            <p class="flex items-center gap-2 p-2.5">Company
                <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.75L3.5 3.25L6 0.75" stroke="#8B3E00"/>
                </svg>
            </p>
            <p class="p-2.5">Services</p>
            <p class="p-2.5">Shop now</p>
            
            <router-link :to="{ name: 'sign-up' }" class="bg-brown-2 text-white py-2.5 px-6 rounded">Sign Up</router-link>
            
            <router-link :to="{ name: 'sign-in' }" class="py-2.5 px-6 border border-orange-2 rounded">Log In</router-link>
        </nav>
    </header>
    
</template>


<script>

</script>


<style lang="scss" scoped>

nav {
    font-size: 15px;
}

@media screen and (max-width:920px) {
    .logo {
        font-size: 1.4rem;
    }
    .gap-2\.5 {
        // gap: 0.3rem;
    }
    .p-2\.5 {
        padding: 0.3rem;
    }
    .py-2\.5 {
        padding-top: 0.42rem;
        padding-bottom: 0.42rem;
        line-height: normal;
    }
    .px-6 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
}

</style>