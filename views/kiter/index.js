
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const phoneInput = document.querySelector('#phone-input');
const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#form-btn')
const kiteButton = document.querySelector('#kite-button');
const foilButton = document.querySelector('#foil-button');
const windButton = document.querySelector('#windsurf-button');
const shopButton = document.querySelector('#shop-button');
const rentalButton = document.querySelector('#rental-button');
const lockerButton = document.querySelector('#locker-button');

const servicesInfo = document.querySelector('#services-info');

const name_regexr = /^[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1\s]*)$/
const phone_regexr = /^[+]{1}[0-9]{15}$/
const email_regexr = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const message_regexr = /^[a-zA-Z\W ]{2,254}$/

let nameValidation = false
let phoneValidation = false
let emailValidation = false
let messageValidation = false


const validateForm = () => {

    if (nameValidation,
        phoneValidation,
        emailValidation,
        messageValidation){
            sendButton.disabled = false
        } else {
            sendButton.disabled = true
        }
};

nameInput.addEventListener('input', e => {
    nameValidation = name_regexr.test (nameInput.value)
    validateForm(nameInput,nameValidation)
});

emailInput.addEventListener('input', e => {
    emailValidation = email_regexr.test (emailInput.value)
    validateForm(emailInput,emailValidation)
});

phoneInput.addEventListener('input', e => {
    phoneValidation = phone_regexr.test (phoneInput.value)
    validateForm(phoneInput,phoneValidation)
});

messageInput.addEventListener('input', e => {
    messageValidation = message_regexr.test (messageInput.value)
    validateForm(messageInput,messageValidation)
});

form.addEventListener('submit', async e =>  {
    e.preventDefault ();
    try {
        const newContact = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        }
        const response = await axios.post ('/api/contacts', newContact)
    } catch (error) {
        console.log(error);
    }
});

kiteButton.addEventListener('click', e => {
    const info = document.createElement('div')
    info.classList.add('flex', 'flex-col', 'min-h-screen', 'w-screen',  'justify-center', 'items-center','bg-slate-200');
    info.innerHTML = `
    <div class="p-4 h-[100vh] flex flex-col md:flex-row items-center md:justify-center md:gap-8 lg:gap-24 grow-0 text-black">
    <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 lg:w-[30%] md:h-[80%] border-solid bg-slate-300">
        <div class="flex flex-col justify-center items-center p-4 md:p-10 gap-4">
            <p class="font-bold text-lg md:text-xl">KITESURFING COURSE</p>
            <p class="font-thin text-justify text-xs md:text-base">
            In its essence, kitesurfing is about riding and 
            gliding across the water while holding onto a large 
            hand-controlled kite that is powered by the wind. 
            Kitesurfing is also known as kiteboarding and you don't 
            need waves to ride the board on the sea, wind and your 
            board should be doing all the work.</p>
                <p class="font-bold text-lg mt-4" >PRICES</p>
                <p class="font-thin text-justify text-xs md:text-base"> 4 hours: 220 $ <br>
                    6 hours: 330 $ <br>
                    8 hours: 440 $ <br>
                    </p>
            </div>
            <!-- <button class="flex lg:hidden">cerrar</button> -->
        </div>
    
        <div id="checkeds" class=" flex flex-col justify-center items-center w-full h-3/4 lg:w-[35%] md:h-[80%]">
            
            <div class="flex flex-col p-6 lg:p-10 gap-4">
    
             <p class="font-bold text-lg md:text-xl text-center"> FROM SIX HOURS ONWARDS </p>
    
                <div class="flex flex-row gap-4 font-light text-sm md:text-xl  items-center ">
                    <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg></p>
    
                    <p>ONE TO ONE CLASS</p>
                </div>
    
                <div class="flex flex-row gap-4 font-light text-sm md:text-xl  items-center text-justify">
                    <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg></p>
    
                    <p class="uppercase">Start riding left and right, know how to recover in any situation</p>
                </div>
    
                <div class="flex flex-row gap-4 font-light text-sm md:text-xl  items-center text-justify">
                    <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg></p>
    
                    <p>WALKIE TALKIE INCLUDED</p>
                </div>
    
                <div class="flex flex-row gap-4 font-light text-sm md:text-xl   items-center text-justify">
                    <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg></p>
    
                    <p>ON YOUR WAY TO BECOME INDEPENDENT</p>
                </div>
    
                <div class="flex flex-row gap-4 font-light items-center  text-sm md:text-xl  ">
                    <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg></p>
    
                    <p>IKO CERTIFICATION</p>
                </div>
                <a href="#contact-us" class="self-center text-center pt-1 h-[2rem] w-[5rem] border-[1px] border-black rounded-md font-bold hover:bg-slate-300 text-sm">Get info</a>
            </div>

        </div>
        </div> 

    <div class="flex w-[4rem] h-[4rem] self-center justify-center items-center p-4">
            <button class=" close-button absolute self-center w-[2.5rem]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </button>
    </div> 
    
    `
    servicesInfo.replaceChildren(info);

    // Boton cerrar escritorio 

    servicesInfo.addEventListener ('click', e => {
        if (e.target.closest('.close-button')){
            console.log(e.target.closest);
            info.classList.add('hidden')
        }
    })
    
});

foilButton.addEventListener('click', e => {
    const info = document.createElement('div')
    info.classList.add('flex', 'flex-col','min-h-screen', 'w-screen',  'justify-center', 'items-center','bg-slate-200');
    info.innerHTML = `
    <div class="p-4 h-[100vh] flex flex-col md:flex-row items-center md:justify-center md:gap-8 lg:gap-24 grow-0 text-black">
    <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 lg:w-[30%] md:h-[80%] border-solid bg-slate-300">
        <div class="flex flex-col justify-center items-center p-4 md:p-10 gap-4">
        <p class="font-bold text-lg md:text-xl">FOIL COURSE</p>
        <p class="font-thin text-justify text-xs md:text-base">
        In foil surfing, the surface you actually stand on, 
        the board, is completely above the water. The foil 
        lifts the board above the surface by a whole foot or
         more. People describe the sensation of foil surfing 
         as if they're actually flying along the ocean. Flying! 
         Like the hoverboard in Back To The Future</p>
            <p class="font-bold text-lg mt-4" >PRICES</p>
            <p class="font-thin text-justify text-xs md:text-base"> 4 hours: 220 $ <br>
                6 hours: 330 $ <br>
                8 hours: 440 $ <br>
                </p>
        </div>
        <!-- <button class="flex lg:hidden">cerrar</button> -->
    </div>

    <div id="checkeds" class=" flex flex-col justify-center items-center w-full h-3/4 lg:w-[35%] md:h-[80%]">
        
        <div class="flex flex-col p-6 lg:p-10 gap-4">

         <p class="font-bold text-lg md:text-xl text-center"> FROM SIX HOURS ONWARDS </p>

            <div class="flex flex-row gap-4 font-light text-sm md:text-xl  items-center ">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>

                <p>ONE TO ONE CLASS</p>
            </div>

            <div class="flex flex-row gap-4 font-light text-sm md:text-xl  items-center text-justify">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>

                <p class="uppercase">Start riding left and right, know how to recover in any situation</p>
            </div>

            <div class="flex flex-row gap-4 font-light text-sm md:text-xl  items-center text-justify">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>

                <p>WALKIE TALKIE INCLUDED</p>
            </div>

            <div class="flex flex-row gap-4 font-light text-sm md:text-xl   items-center text-justify">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>

                <p>ON YOUR WAY TO BECOME INDEPENDENT</p>
            </div>

            <div class="flex flex-row gap-4 font-light items-center  text-sm md:text-xl  ">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>

                <p>IKO CERTIFICATION</p>
            </div>  
            <a href="#contact-us" class="self-center text-center pt-1 h-[2rem] w-[5rem] border-[1px] border-black rounded-md font-bold hover:bg-slate-300 text-sm">Get info</a>
          
        </div>
    </div> 
    </div> 
    <div class="flex w-[4rem] h-[4rem] self-center justify-center items-center p-4">
    <button class=" close-button absolute self-center w-[2.5rem]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    </button>
    </div>

    `
    servicesInfo.replaceChildren(info);

    // Boton cerrar escritorio 

    servicesInfo.addEventListener ('click', e => {
        if (e.target.closest('.close-button')){
            console.log(e.target.closest);
            info.classList.add('hidden')
        }
    })

});

windButton.addEventListener('click', e => {
    const info = document.createElement('div')
    info.classList.add('flex', 'flex-col', 'min-h-screen', 'w-screen',  'justify-center', 'items-center','bg-slate-200');
    info.innerHTML = `
    <div class="p-4 h-[100vh] flex flex-col md:flex-row items-center md:justify-center md:gap-8 lg:gap-24 grow-0 text-black">
    <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 lg:w-[30%] md:h-[80%] border-solid bg-slate-300">
        <div class="flex flex-col justify-center items-center p-4 md:p-10 gap-4">
        <p class="font-bold text-lg md:text-xl">WINDSURFING COURSE</p>
        <p class="font-thin text-justify text-xs md:text-base">
       Windsurfing is a form of sailing. You stand on a board,
        holding a sail (which is attached to the board) and are 
        powered across the water by the wind. You steer by adjusting
         the position of the sail and moving your feet. Ifyou have 
         an understanding of wind direction and an OK sense of 
         balance, you're half way there.</p>
            <p class="font-bold text-lg mt-4" >PRICES</p>
            <p class="font-thin text-justify text-xs md:text-base"> 4 hours: 220 $ <br>
                6 hours: 330 $ <br>
                8 hours: 440 $ <br>
                </p>
        </div>
        <!-- <button class="flex lg:hidden">cerrar</button> -->
    </div>

    <div id="checkeds" class=" flex flex-col justify-center items-center w-full h-3/4 lg:w-[35%] md:h-[80%]">
        
        <div class="flex flex-col p-6 lg:p-10 gap-4">

         <p class="font-bold text-lg md:text-xl text-center"> FROM SIX HOURS ONWARDS </p>

            <div class="flex flex-row gap-4 font-light text-sm md:text-xl  items-center ">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>

                <p>ONE TO ONE CLASS</p>
            </div>

            <div class="flex flex-row gap-4 font-light text-sm md:text-xl  items-center text-justify">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>
                <p class="uppercase">Start riding left and right, know how to recover in any situation</p>
            </div>

            <div class="flex flex-row gap-4 font-light text-sm md:text-xl  items-center text-justify">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>

                <p>WALKIE TALKIE INCLUDED</p>
            </div>

            <div class="flex flex-row gap-4 font-light text-sm md:text-xl   items-center text-justify">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>

                <p>ON YOUR WAY TO BECOME INDEPENDENT</p>
            </div>

            <div class="flex flex-row gap-4 font-light items-center  text-sm md:text-xl  ">
                <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg></p>

                <p>IKO CERTIFICATION</p>
            </div> 
            <a href="#contact-us" class="self-center text-center pt-1 h-[2rem] w-[5rem] border-[1px] border-black rounded-md font-bold hover:bg-slate-300 text-sm">Get info</a>
        </div>
    </div>
    </div> 
    <div class="flex w-[4rem] h-[4rem] self-center justify-center items-center p-4">
    <button class=" close-button absolute self-center w-[2.5rem]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    </button>
    </div>

    `
    servicesInfo.replaceChildren(info);

    // Boton cerrar escritorio 

    servicesInfo.addEventListener ('click', e => {
        if (e.target.closest('.close-button')){
            info.classList.add('hidden')
        }
    })
});

shopButton.addEventListener('click', e => {
    const info = document.createElement('div')
    info.classList.add('flex', 'flex-col', 'bg-white', 'items-center', 'w-screen', 'min-h-screen');
    info.innerHTML = `
    <div class="flex flex-col md:flex-row bg-white md:justify-center">
    <div class="md:hidden min-h-screen w-screen flex lg:gap-24 grow-0 text-black">
    <div id="service-info" class="flex flex-col items-center my-8 w-full h-3/4 md:h-[80%]">
        <img src="/img/harnesses.webp"  class="hover:animate-pulse w-[70%] h-auto bg-slate-200 " alt="">
        <p class="font-bold text-2xl m-8" >Harnesses</p>
        <img src="/img/vest.webp"  class=" hover:animate-pulse  w-[70%] h-auto bg-slate-200 " alt="">
        <p class="font-bold text-2xl m-8" >Protection</p>
        <img src="/img/wtsuit.webp" class="hover:animate-pulse  w-[70%] h-auto bg-slate-200 " alt="">
        <p class="font-bold text-2xl m-8" >Neoprene</p>
        <img src="/img/apparel.webp" class="hover:animate-pulse  w-[70%] h-auto bg-slate-200 " alt="">
        <p class="font-bold text-2xl m-8" >Apparel</p>
        <img src="/img/leash.webp" class="hover:animate-pulse  w-[70%] h-auto bg-slate-200 " alt="">
        <p class="font-bold text-2xl m-8" >Accesories</p>
        <img src="/img/parts.webp" class="hover:animate-pulse w-[70%] h-auto bg-slate-200 " alt="">
        <p class="font-bold text-2xl mt-8" >Parts</p>
    </div>

</div>

<div class="hidden md:flex md:w-[50%] h-screen justify-center items-center lg:gap-24 grow-0 text-black">
    <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 md:h-[80%]">
        <p class="font-bold text-2xl mb-8" >Harnesses</p>
        <img src="/img/harnesses.webp"  class="hover:animate-pulse  w-[62%] h-auto bg-slate-200 " alt="">
        <p class="font-bold text-2xl m-8" >Protection</p>
        <img src="/img/vest.webp"  class="hover:animate-pulse  w-[62%] h-auto bg-slate-200 " alt="">
    </div>
</div>

<div class="hidden md:flex md:w-[50%] h-screen justify-center items-center gap-8 lg:gap-24 grow-0 text-black">
    <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 md:h-[80%]">
        <p class="font-bold text-2xl mb-8" >Neoprene</p>
        <img src="/img/wtsuit.webp" class=" hover:animate-pulse  w-[62%] h-auto bg-slate-200 " alt="">
        <p class="font-bold text-2xl m-8" >Apparel</p>
        <img src="/img/apparel.webp" class="hover:animate-pulse  w-[62%] h-auto bg-slate-200 " alt="">
    </div>
</div>  

<div class="hidden md:flex md:w-[50%] h-screen justify-center items-center gap-8 lg:gap-24 grow-0 text-black">
    <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 md:h-[80%]">
        <p class="font-bold text-2xl mb-8" >Accesories</p>
        <img src="/img/leash.webp" class="hover:animate-pulse  w-[62%] h-auto bg-slate-200 " alt="">
        <p class="font-bold text-2xl m-8" >Parts</p>
        <img src="/img/parts.webp" class="hover:animate-pulse  w-[62%] h-auto bg-slate-200 " alt="">
    </div>
</div> 
</div>
<div class="flex w-[4rem] h-[4rem] self-center justify-center items-center p-4">
<button class="closeShop absolute self-center w-[2.5rem]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
  </svg>
</button>
</div>
    `
    servicesInfo.replaceChildren(info);

    // Boton cerrar escritorio 

    servicesInfo.addEventListener ('click', e => {
        if (e.target.closest('.closeShop')){
            info.classList.add('hidden')
        }
    })
});

rentalButton.addEventListener('click', e => {
    const info = document.createElement('div')
    info.classList.add('flex', 'flex-col', 'bg-white', 'items-center', 'w-screen', 'min-h-screen');
    info.innerHTML= `
    <div class="flex flex-col md:flex-row bg-white md:justify-center">

 <div class="md:hidden min-h-screen w-screen flex lg:gap-24 grow-0 text-black">
           <div id="service-info" class="flex flex-col items-center my-8 w-full h-3/4 md:h-[80%]">
               <img src="/img/boards.webp"  class="hover:animate-pulse w-[70%] h-auto bg-slate-200 " alt="">
               <p class="font-bold text-2xl m-8" >Boards</p>
               <img src="/img/kites.webp"  class="hover:animate-pulse  w-[70%] h-auto bg-slate-200 " alt="">
               <p class="font-bold text-2xl m-8" >Kites</p>
               <img src="/img/bars.webp" class="hover:animate-pulse  w-[70%] h-auto bg-slate-200 " alt="">
               <p class="font-bold text-2xl m-8" >Bars</p>
           </div>
   
       </div>
   
       <div class="hidden md:flex md:w-[100%] h-screen justify-center items-center lg:gap-24 grow-0 text-black">
           <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 md:h-[80%]">
               <p class="font-bold text-2xl mb-8" >Boards</p>
               <img src="/img/boards.webp"  class="hover:animate-pulse  w-[80%] h-auto bg-slate-200 " alt="">
           </div>
       </div>
   
       <div class="hidden md:flex md:w-[100%] h-screen justify-center items-center gap-8 lg:gap-24 grow-0 text-black">
           <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 md:h-[80%]">
               <p class="font-bold text-2xl mb-8" >Kites</p>
               <img src="/img/kites.webp" class="hover:animate-pulse  w-[80%] h-auto bg-slate-200 " alt="">
           </div>
       </div>  
   
       <div class="hidden md:flex md:w-[100%] h-screen justify-center items-center gap-8 lg:gap-24 grow-0 text-black">
           <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 md:h-[80%]">
               <p class="font-bold text-2xl mb-8" >Bars</p>
               <img src="/img/bars.webp" class="hover:animate-pulse  w-[80%] h-auto bg-slate-200 " alt="">
           </div>
       </div> 
    </div>

<div class="flex w-screen h-[4rem] self-center justify-center items-center p-4">
        <p class="mt-[2rem] md:mt-0 mb-[10rem] font-bold text-sm text-center" >Rental equipment for any area of surfing. <br> Leave it in our hands and we'll give you the best option for your specs!</p>
        <button class="closeRental absolute self-center w-[2.5rem]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </button>
    </div>
    `
    servicesInfo.replaceChildren(info);

    // Boton cerrar escritorio 

    servicesInfo.addEventListener ('click', e => {
        if (e.target.closest('.closeRental')){
            info.classList.add('hidden')
        }
    })
});

lockerButton.addEventListener('click', e => {
    const prueba = document.createElement('div')
    prueba.classList.add('flex', 'flex-col', 'h-screen', 'w-screen', 'bg-cover', 'items-center','bg-[url(`/img/startsocean.jpg`)]', 'text-white');
    prueba.innerHTML = `
    <div class="p-8 md:px-32 h-screen flex items-center justify-between ">
    <div id="service-info" class="flex flex-col justify-center items-center w-full h-3/4 lg:w-[35%] md:h-[80%] border-solid bg-black bg-opacity-50 border-zinc-400 border-[1px] rounded-2xl">
        <div class="flex flex-col justify-center items-center p-10 gap-4">
            <p class="font-bold text-xl">WINDSURF COURSE</p>
            <p class="font-thin text-justify text-sm">Duotone's brand and product experience 
                continuously redefines benchmarks. Our central goal is to create outstanding 
                equipment. As a result, we guarantee our customers unforgettable moments on 
                the water - in any weather, at any location and in any discipline. Whether 
                its kiteboarding, windsurfing or wing & foiling.</p>
            <p class="font-bold text-xl mt-4" >PRICES</p>
            <p class="font-thin text-justify text-sm"> For hours: 220 $ <br>
                Six hours: 330 $ <br>
                Eight hours: 440 $ <br>
                </p>
        </div>
        <button class="cerrarLocker1 flex font-bold lg:hidden justify-center items-center border-[1px] rounded-lg border-white h-[3rem] w-[7rem]">I got it</button>
    </div>
    <button class="cerrarLocker2 hidden font-bold lg:flex self-end justify-center items-center border-[1px] rounded-lg border-white h-[3rem] w-[7rem] ">I got it</button>
    </div>
    `
    pruebaInfo.append(prueba);

    // Boton cerrar escritorio 

    pruebaInfo.addEventListener ('click', e => {
        if (e.target.closest('.cerrarLocker2')){
            prueba.classList.add('hidden')
        }
    })

    // Boton cerrar movil 

    pruebaInfo.addEventListener ('click', e => {
        if (e.target.closest('.cerrarLocker1')){
            prueba.classList.add('hidden')
        }
    })
});


