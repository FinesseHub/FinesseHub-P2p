<template>

    <Header />
    <div>
        <div class="screen-size h-screen md:grid md:grid-cols-2 flex flex-wrap-reverse gap-10 items-center justify-around relative page1-container">
            <div class="md:col-span-1 flex flex-col flex-wrap items-start gap-6 ">
                <div class="lg:text-4xl md:text-2xl text-xl text-white">
                    <p>&ldquo;A GREAT LOOK IS NOT BY <span class="block lg:text-7xl md:text-5xl text-3xl font-bold">ACCIDENT</span> IT'S BY <span class="block lg:text-7xl md:text-5xl text-3xl font-bold">APPOINTMENT&rdquo;</span>
                    </p>
                    <p class="lg:text-3xl md:text-xl text-lg text-right">- FINESSE<span class="font-bold">HUB</span></p>
                </div>

                <input type="text" class="w-5/6 md:py-3 md:px-7 py-1.5 px-3.5 md:text-lg rounded z-10" placeholder="Search for a service">
                
                <div class="flex flex-wrap items-center gap-4 md:text-lg text-white">
                    Popular:
                    <span class="border rounded-md md:py-1 py-0.5 md:px-5 px-3">Skin Retouch</span>
                    <span class="border rounded-md md:py-1 py-0.5 md:px-5 px-3">Hair Treatment</span>
                    <span class="border rounded-md md:py-1 py-0.5 md:px-5 px-3">Spa</span>
                    <span class="border rounded-md md:py-1 py-0.5 md:px-5 px-3">Pedicure</span>
                </div>
            </div>

            <img class="md:col-span-1 self-center min-w-0 flex-shrink-0" src="@/assets/home/hero-image.png" alt="model-lady">
        </div>

        <div class="screen-size flex flex-col gap-20 p-6">
            <span class="flex items-center justify-center gap-4 text-orange">
                <p class="inline">Trusted by: </p>
                <p class="inline border border-orange-2 py-1 px-5 rounded">Adom</p>
                <p class="inline border border-orange-2 py-1 px-5 rounded">Wave</p>
                <p class="inline border border-orange-2 py-1 px-5 rounded">HOE</p>
            </span>

            <div class="text-brown-2">
                <p class="text-3xl font-bold mb-4">Popular Services</p>

                <div class="relative flex gap-3 justify-between">
                    <nav class="absolute top-1/3 flex justify-between w-full">
                        <img class="relative right-8" src="@/assets/home/left-arrow.svg" alt="move left">
                        <img class="relative left-8" src="@/assets/home/right-arrow.svg" alt="move right">
                    </nav>
                    <div class="service-card flex flex-col items-start justify-center gap-6">
                        <img src="@/assets/home/model-1.png" alt="beauty model">
                        <span>
                            <p class="text-1.5xl font-bold mb-1.5">Skin Retouch</p>
                            <p>Get your skin done in top notch styles</p>
                        </span>
                    </div>

                    <div class="service-card flex flex-col items-start justify-center gap-6">
                        <img src="@/assets/home/model-2.png" alt="beauty model">
                        <span>
                            <p class="text-1.5xl font-bold mb-1.5">Spa</p>
                            <p>Spa Up your looks to your taste</p>
                        </span>
                    </div>

                    <div class="service-card flex flex-col items-start justify-center gap-6">
                        <img src="@/assets/home/model-3.png" alt="beauty model">
                        <span>
                            <p class="text-1.5xl font-bold mb-1.5">Make-Over</p>
                            <p>Experience Make-overs in a whole new level</p>
                        </span>
                    </div>

                    <div class="service-card flex flex-col items-start justify-center gap-6">
                        <img src="@/assets/home/model-4.png" alt="beauty model">
                        <span>
                            <p class="text-1.5xl font-bold mb-1.5">Hair Treatment</p>
                            <p>Give your hair a whole new dazzling feel</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="screen-size bg-light-yellow text-brown-2 p-10">
            <p class="text-3xl text-center mb-12">AT  
                <span class="inline">FINESSE<span class="font-bold">HUB</span></span>
            </p>

            <div class="perks flex flex-wrap justify-center text-center gap-12">
                <div class="flex flex-col gap-2 items-center">
                    <img src="@/assets/home/shake-fill.svg" alt="meet professionals">
                    <p>You get a variety of top notch professionals at your advantage</p>
                </div>
                <div class="flex flex-col gap-2 items-center">
                    <img src="@/assets/home/money.svg" alt="meet professionals">
                    <p>You get services at your comfort without breaking the bank</p>
                </div>
                <div class="flex flex-col gap-2 items-center">
                    <img src="@/assets/home/globe.svg" alt="meet professionals">
                    <p>You get geo-diversified professionals from anywhere in the world</p>
                </div>
                <div class="flex flex-col gap-2 items-center">
                    <img src="@/assets/home/customer-support.svg" alt="get customer support">
                    <p>You get a reliable customer support services 24/7 without fail</p>
                </div>
                <div class="flex flex-col gap-2 items-center">
                    <img src="@/assets/home/shake-outline.svg" alt="meet professionals">
                    <p>You get quality escrow services to ensure you pay when satisfied with services rendered</p>
                </div>
            </div>
        </div>
        
        <div class="screen-size py-14 bg-light-blue text-brown-2 text-center">
            <p class="text-3xl mb-7">Have Beauty Needs? Meet Them Here</p>

            <div class="all-services flex flex-wrap justify-center gap-8">
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/hair-treatment.png" alt="hair treatment">
                    <p>Hair Treatment</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/manicure.png" alt="manicure">
                    <p>Manicure</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/massage.png" alt="massage">
                    <p>Massage</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/skin-retouch.png" alt="Skin Retouch">
                    <p>Skin Retouch</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/hair-makeover.png" alt="Hair Makeover">
                    <p>Hair Makeover</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/natural-skincare.png" alt="Natural Skincare">
                    <p>Natural Skincare</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/product-consultation.png" alt="Product Consultation">
                    <p>Product Consultation</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/hair-barbing.png" alt="Hair Barbing">
                    <p>Hair Barbing</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/hair-colouring.png" alt="Hair Colouring">
                    <p>Hair Colouring</p>
                </div>
                <div class="flex flex-col items-center gap-6">
                    <img src="@/assets/home/all-services/consultation.png" alt="Consultation">
                    <p>Consultation</p>
                </div>
            </div>
        </div>

        <div class="screen-size bg-brown-2 grid grid-cols-2 items-center justify-center gap-4 py-6 business">
            <div class="flex flex-col items-start gap-6 md:text-xl text-base text-white">
                <p>finesse<span class="font-semibold">Hub Business</span> <sup class="bg-white text-brown-2 px-0.5 rounded leading-normal relative right-1 -top-2.5">extra</sup></p>
                <p>An <span class="md:font-bold font-medium">opportunity</span> for <span class="md:font-bold font-medium">professionals</span> to make <span class="md:font-bold font-medium">money</span></p>
                <p class="md:text-lg text-base">Get <span class="md:font-bold font-medium">hired</span> and earn extra <span class="md:font-bold font-medium">money</span></p>
                <ul class="list-inside list-disc md:text-lg text-base">
                    <li><span>Register an account as a service provider</span></li>
                    <li><span>Set up your profile and get listed</span></li>
                    <li><span>Accept customer service requests</span></li>
                    <li><span>Get paid up on completion</span></li>
                </ul>
                <button class="text-xs bg-white text-brown-2 py-1.5 px-3.5 rounded leading-normal">Start finesse<span class="font-bold">Hub</span> Business</button>
            
            </div>

            <img src="@/assets/home/business/group-37.png" alt="finesseHub business">
        </div>
        <div class="screen-size bg-mixed grid grid-cols-2 py-24 px-10">
            <svg class="mx-auto" width="338" height="337" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M24.8222 8.85625C23.6072 11.9004 22.6968 15.0575 22.1044 18.2812H43.8956C43.302 15.0574 42.3903 11.9003 41.1738 8.85625C39.951 5.87844 38.5413 3.59937 37.0788 2.10031C35.6244 0.605312 34.2472 0 33 0C31.7528 0 30.3756 0.605312 28.9213 2.10031C27.4588 3.60344 26.0491 5.87844 24.8222 8.85625ZM24.4322 1.14156C23.1566 2.87219 22.0353 4.96438 21.0685 7.30844C19.7685 10.4772 18.7122 14.1903 17.9728 18.2812H3.76627C5.79549 14.1201 8.68821 10.4392 12.2517 7.48374C15.8152 4.52831 19.9676 2.36623 24.4322 1.14156ZM41.5719 1.14156C42.8435 2.87219 43.9688 4.96438 44.9316 7.30844C46.2316 10.4772 47.2878 14.1903 48.0272 18.2812H62.2338C60.2045 14.1201 57.3118 10.4392 53.7484 7.48374C50.1849 4.52831 46.0365 2.36623 41.5719 1.14156ZM63.8831 22.3438H48.6406C49.0388 25.5734 49.25 28.9819 49.25 32.5C49.25 36.0181 49.0388 39.4266 48.6406 42.6562H63.8831C64.9582 39.3782 65.504 35.9498 65.5 32.5C65.5028 29.0503 64.957 25.6221 63.8831 22.3438ZM62.2338 46.7188H48.0272C47.2878 50.8097 46.2356 54.5269 44.9316 57.6875C44.0641 59.8722 42.936 61.9442 41.5719 63.8584C46.0358 62.6333 50.1874 60.4709 53.7502 57.5155C57.3129 54.5601 60.205 50.8795 62.2338 46.7188ZM33 65C34.2472 65 35.6244 64.3947 37.0788 62.8997C38.5413 61.3966 39.951 59.1216 41.1738 56.1437C42.3903 53.0997 43.302 49.9426 43.8956 46.7188H22.1044C22.7869 50.2653 23.7172 53.4503 24.8263 56.1437C26.0491 59.1216 27.4588 61.4006 28.9213 62.8997C30.3756 64.3947 31.7528 65 33 65ZM24.4281 63.8584C19.965 62.6327 15.8142 60.4702 12.2522 57.5148C8.69014 54.5594 5.79868 50.879 3.77033 46.7188H17.9769C18.7163 50.8097 19.7685 54.5269 21.0725 57.6875C22.0353 60.0356 23.1606 62.1278 24.4363 63.8584H24.4281ZM2.12096 42.6562H17.3594C16.9497 39.2864 16.7462 35.8947 16.75 32.5C16.75 28.9819 16.9613 25.5734 17.3594 22.3438H2.1169C1.04185 25.6218 0.496052 29.0502 0.500021 32.5C0.500021 36.0466 1.07283 39.4591 2.12096 42.6562ZM20.8125 32.5C20.8125 28.9453 21.04 25.5328 21.4544 22.3438H44.5456C44.96 25.5328 45.1875 28.9453 45.1875 32.5C45.1875 36.0547 44.96 39.4631 44.5456 42.6562H21.4544C21.0223 39.2882 20.8079 35.8957 20.8125 32.5Z" fill="#ffffff"/>
            </svg>

            <div class="flex flex-col gap-6 bg-white mx-auto text-brown-2 w-4/5">
                <p class="text-xl inline-block">With <span class="large-text">finesse<span class="font-semibold">Hub</span></span></p>

                <p class="text-3xl">You can hire professionals that are not in your location</p>

                <p>These professionals can either be:</p>
                <ul class="list-inside list-disc text-lg">
                    <li><span>Near you</span></li>
                    <li><span>Far from you</span></li>
                    <li><span>Across borders (Overseas)</span></li>
                </ul>
                
                <button class="self-start bg-light-yellow py-2.5 px-14">Get Started</button>
            </div>
        </div>

        <div class="screen-size flex flex-col gap-16 py-16">
            <p class="text-3xl font-semibold text-brown-2 text-center my-5 leading-normal">What Our Customers Are Saying</p>

            <div class="relative flex gap-3">
                <nav class="absolute top-1/2 flex justify-between w-full">
                    <img class="relative right-3" src="@/assets/home/small-left-arrow.svg" alt="move left">
                    <img class="relative left-3" src="@/assets/home/small-right-arrow.svg" alt="move right">
                </nav>

                <div class="flex bg-brown-2 text-white">
                    <img src="@/assets/home/customers/customer-1.png" alt="A finesseHub customer">
                    <div class="relative flex flex-col my-auto py-5 px-2 items-center">
                        <p>FinesseHub offers superb professionals to offer their services... My ability to source for freelancers even from other location made my search very easy...</p>
                        <p class="absolute bottom-0 right-12 text-xs">- Mary Jones</p>
                    </div>
                </div>

                <div class="flex bg-brown-2 text-white">
                    <img src="@/assets/home/customers/customer-2.png" alt="A finesseHub customer">
                    <div class="relative flex flex-col my-auto py-5 px-2 items-center">
                        <p>FinesseHub offers superb professionals to offer their services... My ability to source for freelancers even from other location made my search very easy...</p>
                        <p class="absolute bottom-0 right-12 text-xs">- Mary Jones</p>
                    </div>
                </div>
            </div>


            <div class="info flex flex-col w-full py-10 text-brown-2">

                <div class="w-1/2 self-end">
                    <p class="font-semibold mb-4">With <span class="text-2xl">finesseHUB,</span> you have the power to</p>
                    
                    <ol class="list-inside list-decimal flex flex-col gap-3">
                        <li>“Transform your beauty routine with our streamlined appointment booking process.”</li>
                        <li>“Effortlessly schedule your next beauty transformation with our booking system.”</li>
                        <li>"Say goodbye to waiting! Book your beauty appointments hassle-free."</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>



<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    console.log(import.meta.env.MODE)
  }
}

</script>



<style lang="scss" scoped>

.page1-container {
    background-color: #8B3E00;

    // &::after {
    //     content: "";
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background-image: url('@/assets/home/lady-model.svg');
    //     background-size: cover;
    //     opacity: 0.5; /* Adjust the opacity to control the blending effect */
    // }
}

input {
    &::placeholder {
        color: #ff77016e;
    }
}

.service-card {
    width: 250px;
}
.perks > div {
    max-width: 220px;
    min-width: 150px;

    img {
        height: 57px;
    }
}

.all-services div {
    max-width: 185px;
    min-width: 150px;
}

sup {
    font-size: 8px;
}
.business {
    margin-bottom: 4rem;
}
ul li {
    span {
        position: relative;
        left: -15px;
        bottom: 3px;
    }
    
    &::marker {
        font-size: 28px;
    }
}
.bg-mixed {
    background-image: linear-gradient(to right, #8B3E00 50%, white 50%);
}
.large-text {
    font-size: 45px;
}

.info {
    background: url("@/assets/home/info-girl.png"), rgb(255 207 86);
    background-size: cover;
    background-repeat: no-repeat;
    mix-blend-mode: color-burn;
}
</style>