<template>
    <div class="min-h-screen flex flex-col">
        <p class="bg-white text-brown-2 text-4xl text-center">finesse<span class="font-semibold">Hub</span></p>

        <div class="h-full flex items-center justify-center bg-brown-2 py-10">
            <form class=" bg-white text-brown-2 flex flex-col gap-4 p-6">
                <span>
                    <p class="text-2xl text-center font-bold">Sign Up</p>
                    <p class="text-xs text-center">Register to start using finesseHub!</p>
                </span>

                <div class="flex flex-col gap-0.5 text-gray-400">
                    <label class="text-xs" for="name">Name</label>
                    <input class="w-full p-2 border" type="text" name="name">
                </div>
                
                <div class="flex flex-col gap-0.5 text-gray-400">
                    <label class="text-xs" for="name">Email</label>
                    <input class="w-full p-2 border" type="email" name="name">
                </div>
                
                <div class="flex flex-col gap-0.5 text-gray-400">
                    <label class="text-xs" for="name">Password</label>
                    <input class="w-full p-2 border" type="password" name="name">
                </div>

                <div class="flex flex-col gap-0.5 text-gray-400">
                    <label class="text-xs" for="name">Mobile Number</label>
                    <input class="w-full p-2 border" type="tel" name="name">
                </div>

                <div class="flex flex-col gap-0.5 text-gray-400">
                    <label class="text-xs" for="name">Country</label>
                    <input class="w-full p-2 border" type="country" name="name">
                </div>

                <button class="bg-brown-2 text-white p-2">Continue</button>

                <span class="flex gap-2">
                    <input class="inline" type="checkbox" name="" id="">
                    <p class="inline text-xs">Clicking the “continue” button means i agree to the terms and conditions of finesse<span class="font-bold">HUB</span></p>
                </span>
            </form>

        </div>
    </div>
</template>


<script>

</script>


<style lang="scss" scoped>

form {
    width: 500px;
}

</style>