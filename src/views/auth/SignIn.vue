<template>
    <div class="min-h-screen flex flex-col">
        <p class="bg-white text-brown-2 text-4xl text-center">finesse<span class="font-semibold">Hub</span></p>

        <div class="h-full flex items-center justify-center bg-brown-2 py-10">
            <form class=" bg-white text-brown-2 flex flex-col gap-4 p-6">
                <span>
                    <p class="text-2xl text-center font-bold">Sign In</p>
                    <p class="text-xs text-center">Log in to your finesseHUB account</p>
                </span>

                
                <div class="flex flex-col gap-0.5 text-gray-400">
                    <label class="text-xs" for="email">Email</label>
                    <input class="w-full p-2 border" type="email" name="email">
                </div>
                
                <div class="flex flex-col gap-0.5 text-gray-400">
                    <label class="text-xs" for="password">Password</label>
                    <input class="w-full p-2 border" type="password" name="password">
                </div>

                <p class="text-xs self-end text-light-brown">Forgot Password?</p>
                
                <button class="bg-brown-2 text-white p-2">Continue</button>

                <p class="text-xs text-light-brown">Don’t have an account, <span class="text-brown-3">SIGN-UP</span></p>

                <span class="flex items-center justify-between text-xs my-3.5">
                    <hr class="inline-block">
                    Or Log In with
                    <hr class="inline-block">
                </span>
    
                <button class="flex items-center justify-center gap-1.5 border p-2.5 text-xs font-medium light-brown-text">
                    <img src="@/assets/sign-in/apple.svg" alt="apple logo"> Apple
                </button>

                <button class="flex items-center justify-center gap-1.5 border p-2.5 text-xs font-medium light-brown-text">
                    <img src="@/assets/sign-in/google.svg" alt="apple logo"> Google
                </button>

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

hr {
    width: 37%;
    height: 1.2px;
    border-color: #904000;
}

.light-brown-text {
    color: #9F4800;
}
</style>