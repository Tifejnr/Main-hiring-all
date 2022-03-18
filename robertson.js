
let niche = [];
let week = [];
let firstName = [];
let sex = [];
let PossesiveAdjective =[]
let jobTitle;
let jobDescription;
let jobDetails;
let jobReviews;
let error = "Please Enter All Values"
let namer = "Robertson";


let nicheEl = document.getElementById("Select-niche")
let weekEl = document.getElementById("select-week")
let firstNameEl = document.getElementById("first-name")
let sexEl = document.getElementById("Sex");
let resultElr = document.getElementById("result-elro") ; console.log(resultElr)
let resultElar = document.getElementById("result-elaro")
let resultElbr = document.getElementById("result-elbro")
let resultElcr = document.getElementById("result-elcro")
let submitAll = document.getElementById("submit-all")
let clearAll = document.getElementById("clear-all")
let errorRob = document.getElementById("error-rob");


function nicheO (){
    niche.push(nicheEl.value)  
    return niche;
}

function weekO (){
    week.push(weekEl.value)
    return week;
}

function freelancerName(){
    firstName.push(firstNameEl.value);
    return firstName
}

function sexElO (){
    sex.push(sexEl.value)
    sexHeShe = sex;
    return sex
}

function reload(){
    window.location.reload();
window.location.reload();
return false;
}

let localStorageTitler = JSON.parse(localStorage.getItem("resultTitler"))
let localStorageDescriptionr = JSON.parse(localStorage.getItem("resultDescriptionr"))
let localStorageDetailsr = JSON.parse(localStorage.getItem("resultDetailsr"))
let localStorageReviewr = JSON.parse(localStorage.getItem("resultReviewr"))
let localStorageErrorRob = JSON.parse(localStorage.getItem("errorMessageRob"))

if(localStorageErrorRob){
    errorRob.innerHTML = localStorageErrorRob
}

if(localStorageTitler){

    resultElr.innerHTML = localStorageTitler

}

if(localStorageDescriptionr){

    resultElar.innerHTML = localStorageDescriptionr

}

if(localStorageDetailsr){

    resultElbr.innerHTML = localStorageDetailsr

}

if(localStorageReviewr){

    resultElcr.innerHTML = localStorageReviewr

}

function callDiplayResult (){
    resultElr.innerHTML = ` Job Title : ${jobTitle} `; 
    resultElar.innerHTML= `Job Description : ${jobDescription}`
    resultElbr.innerHTML = `Job Details : ${jobDetails}`
    resultElcr.innerHTML = `Review : ${jobReviews}`;

    resultTitler = ` Job Title : ${jobTitle} `; 
    resultDescriptionr= `Job Description : ${jobDescription}`
    resultDetailsr = `Job Details : ${jobDetails}`
    resultReviewr  = `Review : ${jobReviews}`;


    localStorage.setItem("resultTitler", JSON.stringify(resultTitler));
    localStorage.setItem("resultDescriptionr", JSON.stringify(resultDescriptionr));
    localStorage.setItem("resultDetailsr", JSON.stringify(resultDetailsr));
    localStorage.setItem("resultReviewr", JSON.stringify( resultReviewr));

}


function hisHer (){
    if ( sex == "He"){
        PossesiveAdjective = "his"
    }
    
    else if(sex == "She") {
        PossesiveAdjective = "her"
    }
 }

clearAll.addEventListener("click", function(){
    localStorage.clear();
    sexEl.value  = ''
    firstNameEl.value= ''
    nicheEl.value = ''
    weekEl.value =''
    resultElr.innerHTML = ''
    resultElar.innerHTML= ''
    resultElbr.innerHTML =''
    resultElcr.innerHTML = ''
    errorRob.innerHTML= ''
    ;
})

let errorMes;

submitAll.addEventListener("click", function() {

    if (sex == '' || firstName== '' || week == '' || niche == '' || PossesiveAdjective == '') {

        console.log( "Wahala")
    }

    nicheO ()
    weekO ()
    freelancerName()
    sexElO ()
    hisHer ()
    if (firstName =='' || firstName == [] ) {
        localStorage.clear()

        errorMes = error
         errorRob.innerHTML = error
         localStorage.setItem("errorMessageRob", JSON.stringify(error))
     }
 
     else if (niche =='' || niche == [] ){
        localStorage.clear()
         errorMes = error
        errorRob.innerHTML = error
         localStorage.setItem("errorMessageRob", JSON.stringify(error))
 
     } 
     else if (sex =='' || sex == [] ){
        localStorage.clear()
         errorMes = error
        errorRob.innerHTML = error
         localStorage.setItem("errorMessageRob", JSON.stringify(error))
 
     }
 
     else if (week=='' || week== [] ){
        localStorage.clear()
         errorMes = error
        errorRob.innerHTML = error
         localStorage.setItem("errorMessageRob", JSON.stringify(error))
 
     }
 else{
     localStorage.clear()
    
    if (namer == "Robertson" && niche=="Virtual Assistant" && week==1){
    jobTitle= `Data Entry`; jobDescription= " Need someone to help enter Data for me"
    jobDetails= `Help enter data from screenshot below`; jobReviews= " Great woork"

    callDiplayResult ()
    
}

else  if ( namer == "Robertson" && niche=="Virtual Assistant" && week==2){
    jobTitle= `Data Entry`; jobDescription= `Looking for a someone to help enter data from photos to MS excel, Must be available and be able to deliver asap.
    Full Details of the job will be discussed during interview.`
    jobDetails= `Will need you to help enter some statistical data into Ms Excel from a screenshot/photo.

    Just help enter the data below the kidney heading only into Excel and send the excel format to me.
    
    The screenshot is attached below`; jobReviews= `${sex} is excellent!  ${PossesiveAdjective} Very good communicator and work was completed in full, very quickly with no mistakes. Highly recommended. Thank you ${firstName}. I look forward to working with you again.`

    callDiplayResult ()
    
}
else  if (namer == "Robertson" && niche=="Virtual Assistant" && week==3){
    jobTitle= `Data Entry`; jobDescription= `Looking for a someone to help enter data from photos to MS excel, Must be available and be able to deliver asap.

    Full Details of the job will be discussed during interview.`
    jobDetails= `Will forward the full project details to you soonWill need you to help enter some statistical data into Ms Excel from a screenshot.Just help enter into Excel and send the excel format to me.The screenshot is attached below`; 
    jobReviews= `Great work, thank you!`

    callDiplayResult ()
    
}

else  if (namer == "Robertson" && niche=="Virtual Assistant" && week==4){
    jobTitle= `Data Entry Task`; 
    jobDescription= `Hello!

    I am a scientist at a lab and I would like to delegate some of the work to free up more time on my end. You will be entering some data from images entries onto an excel file for me to check later on. You won't need to know anything about the data. Thank you so much for helping.`
    jobDetails= `Will need you to help enter some statistical data into Ms Excel from a photo.

    Just help enter into Excel and send the excel format to me.
    
    The photo is attached below`; 
    jobReviews= `Excellent and accurate data entry work!`

    callDiplayResult ()
    
}

else  if (namer == "Robertson" && niche=="Virtual Assistant" && week==5){
    jobTitle= `VA Needed-Data Entry`; 
    jobDescription= `Hello!

    I am a scientist at a lab and I would like to delegate some of the work to free up more time on my end. You will be entering some data from images entries onto an excel file for me to check later on. You won't need to know anything about the data. Thank you so much for helping.`
    jobDetails= `Will need you to help enter some statistical data into Ms Excel from a photo.

    Just help enter into Excel and send the excel format to me.
    
    The photo is attached below`; 
    jobReviews= `${firstName} was fantastic. Completed the job quickly and efficiently. ${firstName} understood exactly what I wanted. Would highly recommend!`

    callDiplayResult ()   
}



// End of Data Entry Jobs for Robertson//
//Now Content Writing//

else  if (namer == "Robertson"  && niche == "Content Writing" && week==1 ){  
    jobTitle= `Content Writing - SEO Friendly`; 
    jobDescription= `I need you to help write an article on health niche.

    You will have more details after sending the proposal`
    jobDetails= `Alright ${firstName}

    Let's get to the project details immediately
    
    We are a health website @aprokodr.com,ng
    
    We want you to help write a 300 word post on the causes and symptoms of Glaucoma.
    
    Will need this delivered in 12 hours.
    
    Can you meet up ?`; 
    jobReviews= `${firstName} was knowledgeable, prompt, and produced excellent work. I highly recommend ${PossesiveAdjective} services!`

    callDiplayResult ()   
}


else  if (namer == "Robertson"  && niche == "Content Writing" && week==2){
    jobTitle= `Content Writing for a Website`; 
    jobDescription= `Hi
     Need Content for a health website. Research is required. Approximately 500 words . This is an urgent project, 12 hours max.`
    jobDetails= `We will need this delivered asap.

    Help write a 400 word post on " 5 Best Ways to Reduce or Eliminate Bloating "
    
    Must be very engaging, plagiarism free, and void of grammar errors.
    
    Can you deliver within 12 hours ?`; 
    jobReviews= `${firstName} was fantastic to work with! Thanks a bunch`

    callDiplayResult ()   
}


else  if (namer == "Robertson"  && niche == "Content Writing" && week==3){
    jobTitle= `Content Writing - Health`; 
    jobDescription= `Looking for a content writer who can write effective content for my website. Must have experience or be willing to make research on health niche`
    jobDetails= `Help write a post on " Causes and symptoms of Stroke " 300-400 word limit. Engaging tone + audience are random people.
    Let me know when you can complete this before I send an offer?`; 
    jobReviews= `Solid work, communication, clarity and professionalism.`

    callDiplayResult ()   
}

else  if (namer == "Robertson"  && niche == "Content Writing" && week==4){
    jobTitle= `Content Writing - Sports`; 

    jobDescription= `I am looking for  articles per month on sports.
    Must have moderate knowledge of football especially.
    
    Full details of the project will be disclosed upon request.`
    jobDetails= `Alright Efam. Will need you to help write a post on the 5 Greatest EPL strikers of all time.

    Word limit is between 400-500 words. Attach pictures of the players in the post.
    
    Can you deliver in 2 day?`; 
    jobReviews= `Excellent Job. Well researched and well written post. Recommended!`

    callDiplayResult ()   
}

else  if (namer == "Robertson"  && niche == "Content Writing" && week==5){
    jobTitle= `Content writing- Tech`; 
    jobDescription= `I am looking for a native english content writer who can write some well-researched articles. Topic will be mainly Technology. You have to write well-researched articles on that.`
    jobDetails= `Really appreciate your fast response as I want this project delivered asap

    I need you to help write a 500 word plagiarism free post for my tech website on " Top 5 most expensive laptops of 2021 and their full specs.
    
    I'll need it delivered in 6 hours . Can you meet up with the deadline ?`; 
    jobReviews= `I Highly recommend ${firstName}! Her work is top notch!`

    callDiplayResult ()   
}

else  if (namer == "Robertson"  && niche == "Content Writing" && week==6){
    jobTitle= `Blog Content Writer Needed`; 
    jobDescription= `A creative content writer is needed for my blog on technology niche, which include My blog is new and I need content SEO-oriented content that will not bore my audience and will always want to come back for more content
    Reply with samples of your previous writing projects`
    jobDetails= `Will need you to help write a 500 word plagiarism free post for my tech website on " Top 5 best gaming laptops of 2021 and their full specs.

    I'll need it delivered in 12 hours . Can you meet up with the deadline ?`; 
    jobReviews= `Excellent writer! ${firstName} produced exactly what we needed in a short time frame, will 100% hire again!`

   callDiplayResult ()
}

else  if (namer == "Robertson"  && niche == "Content Writing" && week==7){
    jobTitle= `Blog Content Writer`; 
    jobDescription= `About our client:
    - An e-commerce business selling sustainable bedding products.
    - The business focuses on bringing quality sleep to everyone without compromising on the environment.
    
    Deliverables:
    - Will require the writer to do your own research on article topics that will be given.
    - Have a good eye for picking the right images/GIFs.
    - Proficient in English.
    - Strong internet research skills. Able to do proper research to ensure that your content is credible.
    - Fixed price per article or based on word count.`
    jobDetails= `Alright Joseph. Will want you to help write a 400 word post on 5 best bedsheet brands in 2022.

    Will want you to state the Price Range, Fabric used, Pattern Type, Size etc of each brand in the post
    
    Can you get this delivered in a day ?`; 
    jobReviews= `Top quality work. Will definitely be back again for more.`

   callDiplayResult ()
}


else  if (namer == "Robertson"  && niche == "Content Writing" && week==8){
    jobTitle= `SEO Content Writing`; 
    jobDescription= `We are a health website haunting for a freelance Web Content Writer.

    Currently we need 1 article with a length of 400 words
    
    Ideal candidate:
    
    Write high-quality content to be posted on the blogs and web pages.
    Write about a variety of topics, including content for our website.
    Manage time efficiently in order to meet content goals and deadlines .
    
    Write with a marketing mindset, using specific SEO keywords when necessary.
    High-quality writing, editing, and proofreading skills
    Ability to write compelling content
    Professional English is a must`
    jobDetails= `Will want you to help write a post on the symptoms and treatments of anaemia. 300-400 word limit. Must be SEO Optimized and plagiarism free

    Will want it written in a formal tone and submitted as word doc.
    
    Let me know when you can get this done so I can set contract for you to get started.`; 
    jobReviews= `Great Writer. Excellent Communication`

   callDiplayResult ()
}



else  if (namer == "Robertson"  && niche == "Content Writing" && week==9){
    jobTitle= `Content Writing`; 
    jobDescription= `Looking for a content writer who can write effective content for my website. Must have experience or be willing to make research on health niche`
    jobDetails= `I want you to write a 500 word article on Tips to reduce potbelly in men. 
                Like when can you deliver so I can get the contract running for you ?

                I want unique articles. Plagiarized article will be rejected`; 
    jobReviews= `Great Job. Paid attention to details.`

   callDiplayResult ()
}

else  if (namer == "Robertson"  && niche == "Content Writing" && week==10){
    jobTitle= `Content Writer for Website`; 
    jobDescription= `Looking for a content writer who can write effective content for my website. Must have experience or be willing to make research on sports`; 
    jobDetails= `Let's get to the details of the project. I'll need you to help write a 300 word article on the top 5 best players in 2020.
                    Can you deliver in 6 hours ??

                I want unique articles. Plagiarized article will be rejected`; 
    jobReviews= `Good communication, great writer. He was easy to work with and provided excellent work. Highly Recommended.`

   callDiplayResult ()
}

else  if (namer == "Robertson"  && niche == "Content Writing" && week==11){
    jobTitle= `Need blog article written ASAP, 500 words only`; 
    jobDescription= `Super easy job for a content writer - need a blog article written ASAP in women's fashion and skincare. Need these article written in the next 8-12 hours so if you are decent at writing and are interested, I'll assign it to you straight away. Much more opportunities available depending on the quality of your writing.`; 
    jobDetails= `Please, I need this done in 12 hours.

    Topic : " 10 Dermatologist-Approved Skincare Tips for the Best Skin of Your Life"
    
    No grammar error, no word spinning, no plagiarism.
    
    Can you meet up ?`
    jobReviews= `${firstName} was very responsive, professional, and a quality writer. The writing project was completed on-time and well written`

   callDiplayResult ()
}

 // Graphic Design Niche


 
else  if ( namer == "Robertson"  && namer == "Robertson"  && niche=="Graphic Design"&& week==1){
    jobTitle= `Graphic Designer Needed`; 
    jobDescription= `Need a Graphic designer to help with a work. Details of the work will be discussed during Interview.`; 
    jobDetails= `We are a tech company looking for a designer to help design our vacancy poster. Will want you to follow the guide below
                The guide has been attached below. We will want " VACANCY VACANCY " to replace " we're hiring " word. Name of our company "Dipotechy " should also be inplace of " Rare Media company ". You can add additional designs from your end to make it look more attractive. Our Tel no : 08134361695.
                Date to be on ours : 25-8-2021. Our Venue :street 7, Bekunle street, Akure, Ondo state.`
    jobReviews= `Project completed as requested. Highly Recommended!`

    callDiplayResult ()   
}


else  if (namer == "Robertson"  && niche=="Graphic Design"&& week==2){
    jobTitle= `Graphic Designer for poster/flyer design`; 
    jobDescription= `We are looking for someone to help design poster/flyer/menu with correct dimensions and
                     guideline on the design when printing.`; 
    jobDetails= `We are a tech company looking for a designer to help design our vacancy poster. Will want you to follow the guide below
                 The guide has been attached below. We will want " VACANCY VACANCY " to replace " we're hiring " word. Name of our company "Dipotechy " should also be inplace of " Rare Media company ". You can add additional designs from your end to make it look more attractive. Our Tel no : 08134361695.
                 Date to be on ours : 25-8-2021. Our Venue :street 7, Bekunle street, Akure, Ondo state.`
    jobReviews= `Excellent, professional, FAST, and absolutely captures what I want with very little input - truly a professional. I will utilize his service exclusively!`

   callDiplayResult ()
}


else  if (namer == "Robertson"  && niche=="Graphic Design"&& week==3){
    jobTitle= `Graphic designer - Posters`; 
    jobDescription= `I want a graphic designer to work on posters for our company's competition and ads campaign`; 
    jobDetails= `We are a tech company looking for a designer to help design our vacancy poster. Will want you to follow the guide below
                 The guide has been attached below. We will want " VACANCY VACANCY " to replace " we're hiring " word. Name of our company "Dipotechy " should also be inplace of " Rare Media company ". You can add additional designs from your end to make it look more attractive. Our Tel no : 08134361695.
                 Date to be on ours : 25-8-2021. Our Venue :street 7, Bekunle street, Akure, Ondo state.`
    jobReviews= `${sex} produced impeccable designs at a reasonable rate and was very responsive and easy to work with. We could not have been happier with ${PossesiveAdjective} work and will be sure to reach out to ${PossesiveAdjective} again with our future graphic design needs. Thanks ${firstName} !`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Graphic Design"&& week==4){
    jobTitle= `Simple Book Cover Design`; 
    jobDescription= `In need of a graphic designer to help design my book cover. I want a really simple one.`; 
    jobDetails= `So, I just wrote a new book Titled " Rebirth of the second World" I'll want you to help me create the book cover using Blue background. I want a really simple cover.

                Can you do this ?`
    jobReviews= `Highly professional, Fast turn round, Great Design. Will work with again and also Recommend!`
        callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Graphic Design"&& week==5){
    jobTitle= `Design Album Cover`; 
    jobDescription= `I need someone to design an album for my new hip hop EP 'ORI MI'. The basic request is to incorporate myPicture with a visual that shouts too old. ORI MI. Should also have a retro 80s or 90s feel.
                     I would like a couple of options to choose from. Look to have this with in a month's. So no great hurry. Happy yo discuss how many hours this might require.`; 
    jobDetails= `Attached below is my picture I want to be as background in the Album cover.

                Then the title " ORI MI " should be captioned at the centre of the album cover coloured green.

                You can use this album cover as guide. Can you get this done in a day ?`
    jobReviews= `Did an excellent work. Highly recommended.`
    callDiplayResult ()
}
else  if (namer == "Robertson"  && niche=="Graphic Design"&& week==6){
    jobTitle= `Poster/Billboard Design Needed`; 
    jobDescription= `Need assistance with graphics needed before December 19th. Materials for design available now. Might Need some that can be static or mp4/mov files that will rotate every 7.5 seconds on a 72" LCD (vertical, 1080x1920 px).
                     Full details will be disclosed during Interview.`; 
    jobDetails= `AI want you to help design a vacancy poster for one of our brands.

                The guide of what we want has been attached below.
    
                We will want " VACANCY VACANCY " to replace " we're hiring " word.
    
                Name of our company " Kyriama plastic ltd " should also be inplace of " Rare Media company ".
    
                You can add additional designs from your end to make it look more attractive.`
    jobReviews= `${sex} was quick to respond, perfectly understood my need and directions, and provided a high quality design work, ${PossesiveAdjective} can-do attitude and high performance exceeded my expectations and I will be happy to work with ${firstName} again and recommend ${PossesiveAdjective} services to others.`
    callDiplayResult ()
}


// Data Analysis JOB Robertson//

else  if (namer == "Robertson"  && niche=="Data Analytics" && week==4){
    jobTitle= `Data analysis excel help`; 
    jobDescription= `i require a small help in my data analysis excel workbook. The candidate should have 
                     advance level skills in excel.`; 

    jobDetails= ` With the excel data attached below, help 	Prepare some routine data analysis and summary visualisation methods to become familiar
                     with the data in particular in relation to patient characteristics`

    jobReviews= `Thanks a lot! It was a pleasure working and looking forward to work in the future.`
    callDiplayResult ()
}


else  if (namer == "Robertson"  && niche=="Data Analytics" && week==5){
    jobTitle= `Excel Expert Needed`; 
    jobDescription= `Thanks for looking at this project

    This should be an easy little project for someone with Excel experience.
    
    I've attached two files
    
    In the  file are the instructions on this little project
    1) Data Cleaning
    2) Data Analysis
    
    It's should be fairly easy if you know Excel.`; 

    jobDetails= ` With the excel data attached below, help c)	Brainstorm some interesting hypotheses for the data, propose the Null and alternate hypothesis for each and seek to confirm or reject these using an appropriate statistical test. This may be performed on the 
                    general data or the smaller cohort identified in the previous section b)`

    jobReviews= `High quality of work and dedicative freelancer, ${PossesiveAdjective} works are mind blowing and well executed.`
    callDiplayResult ()
}

//Data Visualization

else  if (namer == "Robertson"  && niche=="Data Visualization" && week==1){
    jobTitle= `Data Visualisation Specialist`; 
    jobDescription= `We need a data analyst that is able to study the data so that we can tell the story. 
                     We  have the data to understand how to study and manage these elements, 
                     we just need an analyst who can help us move faster down this path....that is potentially 
                     a really interesting role. Is this something that could be interesting for you?`; 

    jobDetails= ` With the data attached below. Help analyse our Customer Experience (expectation management, optimization)
    )`

    jobReviews= `Thanks a lot! It was a pleasure working and looking forward to work in the future.`
    callDiplayResult ()
}

//Customer Service

else  if (namer == "Robertson"  && niche=="Customer Service" && week==1){
    jobTitle= `Professional Customer Service Representative`; 
    jobDescription= ` Need a customer Service Representative.
                Must have:

                 Reliable High Speed Internet with plenty of bandwidth.
                Flexible with time.
                Professional and polite.`; 

    jobDetails= ` From the excel data attached below:
                 Help connect third party BI tool or dashboard tool plus Pipedrive (our CRM) and Google Sheets plus any other tools required to be able to see Volume Per Venue data 
                 (in total but be able to be broken down by timeframe e.g. weekly etc)

                 )`

    jobReviews= `Great communication & comprehension, quick turn around and end product exactly as I had requested. Very happy.`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Customer Service" && week==2){
    jobTitle= `customer care representative`; 
    jobDescription= `we are hiring a customer service representative to join our team for a full/part time basis. The customer Service Representative provides dedicated 
                    customer support while communicating effectively, and accurately recording customer concern. this position will require clear and concise communicating skills, troubleshooting
                     abilities and in-depth knowledge of current hardware and software components. the ideal candidate with a passion for working in partnership with customers
                     to problem solve effectively and with maximum customer experience scores.`; 

    jobDetails= ` Not Added `

    jobReviews= `You will not find a better customer care rep. ${firstName} goes above and beyond.`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Customer Service" && week==3){
    jobTitle= `Online Chat Service`; 
    jobDescription= `Part-time remote online chat agent is needed to respond to insurance inquiries via text, email, or 
                     through the app and give recommendations to current policyholders, identify areas of improvement in customer service process.

    Kindly submit your resume for more information/inquiry about the work and for you to be qualified for the job posted.  `; 

    jobDetails= ` Not Added `

    jobReviews= `Perfect cooperation. Amazing experience!`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Customer Service" && week==4){
    jobTitle= `Customer service representative`; 
    jobDescription= `we're searching for motivated individuals that are passionate about delivering the best in quality customer service. Customer service is extremely important to us and our patrons, and as our advocate, 
                     you will be accountable for exceeding customer expectations by responding to inquiries and order fulfillment in a fast and effective approach. The ideal individual will provide the exceptional 
                     customer service to our present and new clients by phone or e-mail, aiming for first-contact resolution.`; 

    jobDetails= ` Not Added `

    jobReviews= `You will not find a better customer care rep. ${firstName} goes above and beyond.`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Customer Service" && week==5){
    jobTitle= `Patient Customer Service Representative`; 
    jobDescription= `We’re looking for a patient, customer-oriented, conversation-loving person, for our Customer Service Representative role. Delivering above-average customer support is extremely important to our company mission, so you'll be filling a crucial role.

    
                    You will majorly be responsible for responding to customer service inquiries in a timely and professional manner.`; 

    jobDetails= ` Not Added `

    jobReviews= `You will not find a better customer care rep. ${firstName} goes above and beyond.`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Customer Service" && week==6){
    jobTitle= `customer representative working with the team `; 
    jobDescription= `Join our team and Improve the customer service by providing enough representative duties and obligations.

                     Establish good communication process and serve as a bridge between customers and product or services.`; 

    jobDetails= ` Not Added `

    jobReviews= `You will not find a better customer care rep. ${firstName} goes above and beyond.`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Customer Service" && week==7){
    jobTitle= `customer representative working with the team`; 
    jobDescription= `Join our team and Improve the customer service by providing enough representative duties and obligations.

                     Establish good communication process and serve as a bridge between customers and product or services.`; 

    jobDetails= ` Not Added `

    jobReviews= `You will not find a better customer care rep. ${firstName} goes above and beyond.`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Customer Service" && week==8){
    jobTitle= `Customer service`; 
    jobDescription= `Join our team and Improve the customer service by providing enough representative duties and obligations.

                     Establish good communication process and serve as a bridge between customers and product or services.`; 

    jobDetails= ` Not Added `

    jobReviews= `You will not find a better customer care rep. ${firstName} goes above and beyond.`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Customer Service" && week==9){
    jobTitle= `Customer service`; 
    jobDescription= `We are looking for an entry level virtual assistant to utilize his/her administrative skills.
                     You will also be responsible for providing general customer service support.`; 

    jobDetails= ` Not Added `

    jobReviews= `You will not find a better customer care rep. ${firstName} goes above and beyond.`
    callDiplayResult ()
}

else  if (namer == "Robertson"  && niche=="Customer Service" && week==10){
    jobTitle= `Customer service`; 
    jobDescription= `Join our team and Improve the customer service by providing enough representative duties and obligations.

                    Establish good communication process and serve as a bridge between customers and product or services.`; 

    jobDetails= ` Not Added `

    jobReviews= `You will not find a better customer care rep. ${firstName} goes above and beyond.`
    callDiplayResult ()
}

// Copywriting//

else  if (namer == "Robertson" && niche=="Copywriting" && week==3) {
    jobTitle= `Sales Copywriter that Converts`; 
    jobDescription= `We are seeking a talented and experienced copywriter, that is well versed in beauty/skincare writing.

    The ideal candidate is someone that understands branding, and will be writing brand copy for a brand revamp.
    
    If you consider yourself to be a pro at writing engaging copy, and knowledgable in writing skincare copy, then we'd love to hear from you!

    `; 

    jobDetails= ` I need you to write a 200 word sales copy on " why buy Clinique Acne Solutions BB Cream. The main aim is to persuade our visitors to purchase the Clinique Acne Solutions BB Cream in our stock.

    The copy will be very persuasive and well optimized
    
    When can you complete this ? ?`

    jobReviews= `High quality work. Completed within the deadline we set. No adjustments were required.`
    callDiplayResult ()

}

else  if (namer == "Robertson" && niche=="Copywriting" && week==1) {
    jobTitle= `Conversion Copywriting `; 
    jobDescription= `I need a sales copywriter to help with a sales copy for our clothing website.
    `; 

    jobDetails= `I want you to help develop a compelling sales copy for my clothing line "Yidarmsclothings" We deal in Womens and children clothings of various styles. We also offer a 10% discount to all new customers.

    Can you complete this in 24 hours ?`

    jobReviews= `${firstName} is a great communicator, a pleasure to work with, and a talented copywriter!`
    callDiplayResult ()

}

else  if (namer == "Robertson" && niche=="Copywriting" && week==2) {
    jobTitle= `Sales copy for eCommerce site `; 
    jobDescription= `Hi there,

    Looking for a copywriter with in the skin care space.
    
    Kindly attach your samples when applying.
    
    Thanks.

    `; 

    jobDetails= ` I Will need you to write a 200 word post on " why buy Lakme Complexion Care Cream."

    The main aim is to persuade our visitors to purchase the Lakme Complexion Care Cream in our stock.
    
    The copy must be very persuasive and well optimized
    
    When can you complete this ?`

    jobReviews= `${firstName} had excellent communication.${sex} was very quick, understood scope of work and produced exactly what we needed.`
    callDiplayResult ()

}









 }
 reload()
})






