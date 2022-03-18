let password = [];
let passwordEl = document.querySelector(".password-el");
let buttonEl = document.querySelector(".button-el");
let passwordOne

let robertsonEl = document.querySelector(".robertson-el")
let yidarmysEl = document.querySelector(".yidarmys-el")
let rungeEl = document.querySelector(".runge-el")
let kimjaneEl = document.querySelector(".kimjane-el")
let ruudEl = document.querySelector(".ruud-el");
let olayemiEl = document.querySelector(".olayemi-el")
let adeekoEl = document.querySelector(".adeeko-el")


function enterPassword (){
    password.push(passwordEl.value)

    for(let i =0; i<password.length; i++)

    passwordOne = password[i]

    console.log(passwordOne)
}

buttonEl.addEventListener("click", function(){

    enterPassword ()

    if (passwordOne === "Tifejnr."){
        console.log( "Nice")
        passwordsList ()
    }

    else{
        console.log(" Wrong passowrd")
    }


})


function passwordsList (){

    robertsonEl.innerHTML = ` Name:  Robertson Shayn 
                              Email: robertsonshayn11@yahoo.com
                              UpworkPassword : robertsonshayn11
                              Email Password: Fabregas4. `;

    kimjaneEl.innerHTML = ` Name : Kim Jane 
                            Email : sonkim2030@gmail.com 
                            Password: fabregas4 `

    yidarmysEl.innerHTML = ` Name:  Yidarmsy Pursaks
                             Email:temidireblessing2021@gmail.com
                             UpworkPassword : Yidarmys2021
                             Security Answer: Glory
                             Email Passowrd: Temidirejnr1. `

    rungeEl.innerHTML = ` Name: Runge Herman
                          Email : rungeherman@yahoo.com
                          UpworkPasswordE: RungeHerman.
                          Email Password: Fabregas4. `

    ruudEl.innerHTML= ` Name: Ruud Persie
                          Email : aregbesolablessing2021@gmail.com
                          UpworkPasswordE: Ruudjnr1.
                          Email Password: not inputted. 
                          
                          
                          " Gmail password : Josephjnr1."
                          Gmail username : Josephlydia2090
                          Gmail username  : TemidireBlessing2021"
                          Gmail password : Temidirejnr1.
                         Upwork username  :akinolaoladapo2021@gmail.com"
                         Upwork password : Axeljnr1.
                         Upwork username  :koladetolutope@yahoo.com"
                         Upwork password : Koladejnr.`


    olayemiEl.innerHTML = `
                            Freelancer.com: Aribisalajnr1.
                          Instagram.com : Tachlanoq ; Kimjnr1.
                          Paypal : twitterhottest3@gmail.com; Isaacjnr1.
                          Proton VPN : Tifejnr; Fabregas4.
                          Yahoomail: koladetolutope ; Rashford10.

                          upwork password : Twitterhottest3@mail.com: Twitterjnr1.

    
    
    `

    adeekoEl.innerHTML = `  Upwork username  : adeekojnr1@gmail.com
                            Upwork password : Victorjnr1.
                            Security question Answer : Wizkid
                            twilio.com : lilblessingjnr@gmail.com; ;u?,MdZ7TC-8Tifejnr1.
                            
                            Williams Victor Upwork username : Williamsvictor2030@gmail.com
                            Password : Williamsjnr1.
                             `
                       
                         
}


