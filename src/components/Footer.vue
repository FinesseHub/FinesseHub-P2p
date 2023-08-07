<template>

    <footer class="screen-size flex flex-col justify-between gap-16 bg-cool-pink text-brown-2 pt-24 pb-16">
        <div class="grid grid-cols-6 auto-cols-fr gap-6">
            <div class="col-span-2">
                <p class="text-3xl text-center mb-12 inline">finesse<span class="font-bold">HUB</span>
                </p>
                <p class="text-sm font-semibold">"Take control of your beauty journey. Book appointments with ease and confidence."</p>
            </div>

            <ul class="flex flex-col gap-3">
                <li class="text-xl font-semibold">Support</li>
                <li>Help Videos</li>
                <li>Customer Service</li>
                <li>View Bookings</li>
                <li>Support</li>
                <li>Features</li>
            </ul>
            
            <ul class="flex flex-col gap-3">
                <li class="text-xl font-semibold">Services</li>
                <li>Consultation</li>
                <li>Escrow Service</li>
                <li>Learn and Earn</li>
                <li>Customer Care</li>
                <li>Become a freelancer with finesseHUB</li>
            </ul>
            
            <ul class="flex flex-col gap-3">
                <li class="text-xl font-semibold">About Us</li>
                <li>Website</li>
                <li>Blog</li>
                <li>Social Media</li>
                <li>Affiliates</li>
            </ul>

            <ul class="flex flex-col gap-3">
                <li class="text-xl font-semibold">Our Address</li>
                <li>22, Ifesowapo, Adehun, Ado-Ekiti, Ekiti State, Nigeria</li>
            </ul>
            
        </div>

        <div class="flex justify-between text-sm">
            <p class="font-semibold">All rights reserved @homelux, {{ new Date().getFullYear() }}</p>

            <div class="flex gap-10 black-text">
                <p>Partners</p>
                <p>Feedbacks</p>
                <p>Bookings</p>
                <p>Academy</p>
            </div>
        </div>
    </footer>
    
</template>


<script>

</script>



<style lang="scss" scoped>

.grid div {
    grid-auto-columns: 2fr;
}

ul {
    font-size: 15px;
}
.black-text {
    color: #383838;
}
</style>