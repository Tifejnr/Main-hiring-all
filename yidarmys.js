
let niche = [];
let week = [];
let firstName = [];
let sex = [];
let PossesiveAdjective =[]
let jobTitle;
let jobDescription;
let jobDetails;
let jobReviews;
let namey = "yidarmys"
let error = " Enter All Values"

let clientNameEl = document.getElementById("client-name")
let nicheEl = document.getElementById("Select-niche")
let weekEl = document.getElementById("select-week")
let firstNameEl = document.getElementById("first-name")
let sexEl = document.getElementById("Sex")

let resultElyi = document.getElementById("result-elyi")
let resultElayi = document.getElementById("result-elayi")
let resultElbyi = document.getElementById("result-elbyi")
let resultElcyi = document.getElementById("result-elcyi")
let submitAll = document.getElementById("submit-all")
let clearAll = document.getElementById("clear-all");
let errorYidarmys = document.getElementById("error-yi")



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
    return sex
}

let localStorageTitle = JSON.parse(localStorage.getItem("resultTitleyi"))
let localStorageDescription = JSON.parse(localStorage.getItem("resultDescriptionyi"))
let localStorageDetails = JSON.parse(localStorage.getItem("resultDetailsyi"))
let localStorageReview = JSON.parse(localStorage.getItem("resultReviewyi"))
let localStorageErrorYidarmys = JSON.parse(localStorage.getItem("errorMessageYidarmys"))

if (localStorageErrorYidarmys){
    errorYidarmys.innerHTML = localStorageErrorYidarmys
}

if(localStorageTitle){

    resultElyi.innerHTML = localStorageTitle

}

if(localStorageDescription){

    resultElayi.innerHTML = localStorageDescription

}

if(localStorageDetails){

    resultElbyi.innerHTML = localStorageDetails

}

if(localStorageReview){

    resultElcyi.innerHTML = localStorageReview

}

function callDiplayResult (){
    resultElyi.innerHTML = ` Job Title : ${jobTitle} `; 
    resultElayi.innerHTML= `Job Description : ${jobDescription}`
    resultElbyi.innerHTML = `Job Details : ${jobDetails}`
    resultElcyi.innerHTML = `Review : ${jobReviews}`;

    resultTitleyi = ` Job Title : ${jobTitle} `; 
    resultDescriptionyi = `Job Description : ${jobDescription}`
    resultDetailsyi = `Job Details : ${jobDetails}`
    resultReviewyi  = `Review : ${jobReviews}`;


    localStorage.setItem("resultTitleyi", JSON.stringify(resultTitleyi));
    localStorage.setItem("resultDescriptionyi", JSON.stringify(resultDescriptionyi));
    localStorage.setItem("resultDetailsyi", JSON.stringify(resultDetailsyi));
    localStorage.setItem("resultReviewyi", JSON.stringify( resultReviewyi));

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
    resultElyi.innerHTML = ''
    resultElayi.innerHTML= ''
    resultElbyi.innerHTML =''
    resultElcyi.innerHTML = ''
    errorYidarmys.innerHTML = '';
})

let  errorMes;

submitAll.addEventListener("click", function() {

    nicheO ()
    weekO ()
    freelancerName()
    sexElO ()
    hisHer ()

    if (firstName =='' || firstName == [] ) {
        localStorage.clear()

        errorMes = error
         errorYidarmys.innerHTML = error
         localStorage.setItem("errorMessageYidarmys", JSON.stringify(error))
     }
 
     else if (niche =='' || niche == [] ){
        localStorage.clear()
         errorMes = error
         errorYidarmys.innerHTML = error
         localStorage.setItem("errorMessageYidarmys", JSON.stringify(error))
 
     } 
     else if (sex =='' || sex == [] ){
        localStorage.clear()
         errorMes = error
         errorYidarmys.innerHTML = error
         localStorage.setItem("errorMessageYidarmys", JSON.stringify(error))
 
     }
 
     else if (week=='' || week== [] ){
        localStorage.clear()
         errorMes = error
         errorYidarmys.innerHTML = error
         localStorage.setItem("errorMessageYidarmys", JSON.stringify(error))
 
     }
 
     else {
 
        localStorage.clear()
//Content Writing - TECH//

 if (niche=="Content Writing" && week==1){
    jobTitle= `Article Writer - English Fluent `;
    jobDescription= `Hey, looking for an English writer who has enough experience content writing to have a good balance between quality/quantity. From English speaking country.

    Please attach sample reflecting your expected quality.`

    jobDetails= `Which is better: a smart TV or an HD LED TV`; 

    jobReviews= `${firstName} did a great job. ${sex} is a fast writer and was very attentive to my requirements. I'd recommend ${firstName} if you're looking for a content writer.`

    callDiplayResult ()

    }

else if (niche=="Content Writing" && week==2){
    jobTitle= `Content Writer Needed `;
    jobDescription= `Hey, looking for an English writer who has enough experience content writing to have a good balance between quality/quantity. From English speaking country.

    Please attach sample reflecting your expected quality.`

    jobDetails= `5 reasons you should buy iPhones over Android phones`; 

    jobReviews= `${firstName} is an excellent writer and a great communicator. We will definitely work with again. Thanks ${firstName}!`

    callDiplayResult ()

    }

else if (niche=="Content Writing" && week==3){
    jobTitle= `Article Writer `;
    jobDescription= `Need short article  as soon as possible. 
                    Must follow specific instructions regarding keyword placement. Please send examples of your article writing.`

    jobDetails= ` The pros and cons of using an iPhone`; 

    jobReviews= `Enjoyed working with ${firstName}, ${PossesiveAdjective} work is high quality and I can always expect great reading articles. Thanks again ${firstName} for your superb effort!`

    callDiplayResult ()

    }

else if (niche=="Content Writing" && week==4){
    jobTitle= `Web Content Writer `;
    jobDescription= `I am looking for some one with STRONG ENGLISH. QUICK TURNAROUND of web content for small startup company.

    We will provide you with the
    * and First Draft of the Content with some of our ideas
    
    The Content has to be revised for
    * SEO optimization,
    * better flow of the text and content,
    
    If you have previous experience please send sample work that will help understand your skills`

    jobDetails= `5 reasons people are obsessed over Apple products`; 

    jobReviews= `I will def look for you again in the future if I need any further help. I will also recommend you to friends!`

    callDiplayResult ()

    }

    else if (niche=="Content Writing" && week==5 && (sex == "He"||"She")){
        jobTitle= `Content writer to create content for Electrical and electronics services/blog website. `;
        jobDescription= `I am looking for some one with STRONG ENGLISH. QUICK TURNAROUND of web content for small startup company.
    
        We will provide you with the
        * and First Draft of the Content with some of our ideas
        
        The Content has to be revised for
        * SEO optimization,
        * better flow of the text and content,
        
        If you have previous experience please send sample work that will help understand your skills`
    
        jobDetails= `5 reasons people are obsessed over Apple products`; 
    
        jobReviews= `I will def look for you again in the future if I need any further help. I will also recommend you to friends!`
    
        callDiplayResult ()
    
        }
    


    //Virtual Assistant//

    else  if (namey == "yidarmys" && niche=="Virtual Assistant" && week==1){
        jobTitle= `Virtual Assistant for Research & Data Gathering`; 
        jobDescription= `Hello
    
        I'm looking for someone to help with information gathering, on social media
        Information will be gathered on Google Sheets. If successful, then there might be other Internet research work needed as well.`
        jobDetails= `Will need you to help enter some statistical data into Ms Excel from a photo.
    
        Just help enter into Excel and send the excel format to me.
        
        The photo is attached below.`; 
        jobReviews= `${firstName} is a great Virtual assistant. ${sex} was efficient and did exactly what I needed. I certainly intend to hire for future work!`
    
        callDiplayResult ()   
    }
    
    else  if (namey == "yidarmys" && niche=="Virtual Assistant" && week==2){
        jobTitle= `Virtual Assistant Data Entry/Online Research`; 
        jobDescription= `We are looking for someone to perform online research, data entry and to organize our existing contact lists for email campaigns.
    
        To be a fit for this project, you need:
        - Strong time management, data entry and organizational skills
        - High level of proficiency with Microsoft Office tools such as Word, Excel, and PowerPoint
        - A high-speed internet connection`
        jobDetails= `I will need you to help us find official email adress of some brands online. You will get their email adresses and send them to me in a word doc. The brands needed are attached in the doc below.`; 
        jobReviews= `Very helpful and easy to work with.`
    
        callDiplayResult ()   
    }
    
    
    else  if (namey == "yidarmys" && niche=="Virtual Assistant" && week==3){
        jobTitle= `VA for Data Entry Task`; 
        jobDescription= `Looking for a virtual assistant to help enter data from photos to MS excel, Must be available and be able to deliver in a day. Details of the job will be discused during interview.`
        jobDetails= `Alright ${firstName}. Will want you to help enter some data from a photo which wil be sent to you soon to MS excel and then send the doc to me. Can you help with this in 6 hours ?`; 
        jobReviews= `Very responsible and excellent work. Will Recommend ${PossesiveAdjective} services!`
    
        resultElyi.innerHTML = ` Job Title : ${jobTitle} `
        resultElayi.innerHTML= `Job Description : ${jobDescription}`
        resultElbyi.innerHTML = `Job Details : ${jobDetails}` 
        resultElcyi.innerHTML = `Review : ${jobReviews}`   
    }
    
    else  if (namey == "yidarmys" && niche=="Virtual Assistant" && week==4){
        jobTitle= `VA for Data Entry`; 
        jobDescription= `Looking for a virtual assistant to help enter data from photos to MS excel, Must be available and be able to deliver in a day. Details of the job will be discused during interview.`
        jobDetails= `Hello Benjamin. Just got screenshot of some data sent to me. I need you to help enter to MS excel and then send the doc to me.
    
        Will forward the screenshot to you soon Here it is. Help enter it into MS Excel and send it to me. Hope you can get this done today ?`; 
        jobReviews= `Excellent work! Hope to work together again in future.`
    
        callDiplayResult ()   
    }
    
    else  if (namey == "yidarmys" && niche=="Virtual Assistant" && week==5){
        jobTitle= `Data Entry and Receptionist`; 
        jobDescription= `Looking for a virtual assistant to help enter data from photos to MS excel, Must be available and be able to deliver in a day. Details of the job will be discused during interview.`
        jobDetails= `Hello Benjamin. Just got screenshot of some data sent to me. I need you to help enter to MS excel and then send the doc to me.
    
        Will forward the screenshot to you soon Here it is. Help enter it into MS Excel and send it to me. Hope you can get this done today ?`; 
        jobReviews= `Great Work. Thanks a lot.`
    
        callDiplayResult () 
        
        
    }
    


  //Data Analysis 

  else  if (namey == "yidarmys" && niche=="Data Analytics" && week==1){
    jobTitle= `Google analytics traffic analysis needed`; 
    jobDescription= `I need part-time Google Analytics work done. The current need is to analyze the value of the traffic from different sources.  This means creating and comparing reports of traffic from the top 10 sources and comparing, 
                    page views/visit, TOS, and other KPIs so we know where to focus our acquisition strategies`; 
    jobDetails= ` Help analyze the value of the traffic from different sources`
    jobReviews= `A+ ${firstName} does top-notch work quickly and communicates fluidly. We will be coming back.`
    callDiplayResult ()
}



// Data Visualization//

else  if (namey == "yidarmys" && niche=="Data Visualization" && week==1){
    jobTitle= `Data Visualisation`; 
    jobDescription= ` We sell our product to seven different distributors who then sell to the retailers.

                Our distributors give us data in different formats (usually Excel though) at different times using different customer codes for the same customer. I need to be able to marry the data from our distributors to our own customer information which is kept in Pipedrive CRM.
    
                The real goal is to be able to use a third party BI tool or dashboard tool plus Pipedrive (our CRM), Zapier Excel and Google Sheets plus any other tools required to be able to see Volume Per Venue data (in total but be able to be broken down by timeframe e.g. weekly etc)
                in an easily digestible format. We would like to be able to use`; 

    jobDetails= ` From the excel data attached below:
                 Help connect third party BI tool or dashboard tool plus Pipedrive (our CRM) and Google Sheets plus any other tools required to be able to see Volume Per Venue data 
                 (in total but be able to be broken down by timeframe e.g. weekly etc)

                 )`

    jobReviews= `Great communication & comprehension, quick turn around and end product exactly as I had requested. Very happy.`
    callDiplayResult ()
}

//Copywriting

else  if (namey == "yidarmys" && niche=="Copywriting" && week==1) {
    jobTitle= `Sales Copywriter needed asap`; 
    jobDescription= `
    Are you a sales copywriter looking for a new challenge? Love to write copy that persuades and converts? And have at brought in revenue
     attributed to your copy? We want you on board!
     Will be writing copy for any of landing pages, product pages, Facebook ads, Google ads, emails - experience in writing those is a must`; 

    jobDetails= ` Help write a email`

    jobReviews= `Great communication & comprehension, quick turn around and end product exactly as I had requested. Very happy.`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Copywriting" && week==2) {
    jobTitle= `Website Copywriting`; 
    jobDescription= `
    Are you a sales copywriter looking for a new challenge? Love to write copy that persuades and converts? And have at brought in revenue
     attributed to your copy? We want you on board!
     Will be writing copy for our website`; 

    jobDetails= `. Will want you to write a 300 word post on the 3 latest TV sets in 2022. Must be converting enought to make our website visitors patronise our services. Ensuring the post is plagiarism free and grammartically perfect.

    Can you deliver in 6 hours ?`

    jobReviews= `Great copywriter, was very easy to work with, had great communication and completed the task in a timely manner. Highly Recommended`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Copywriting" && week==3) {
    jobTitle= `Sales Copywriting`; 
    jobDescription= `Looking for a sales copywriter for my tech website. Reply with samples of your previous projects related to fashion if you have any.
                     Details of the job will be disclosed during Interview.`; 

    jobDetails= `We Want you to write a captivating sales copy for our fashion website. We deal in Women and kids clothing, shoes, jewelries and other accessories for women.
                word limit :200 words When can you get this done ?`

    jobReviews= `Great copywriter, was very easy to work with, had great communication and completed the task in a timely manner. Highly Recommended`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==1) {
    jobTitle= `Grow Instagram Account Fast`; 
    jobDescription= `Looking for a sales copywriter for my tech website. Reply with samples of your previous projects related to fashion if you have any.
                     Details of the job will be disclosed during Interview.`; 

    jobDetails= `We Want you to write a captivating sales copy for our fashion website. We deal in Women and kids clothing, shoes, jewelries and other accessories for women.
                word limit :200 words When can you get this done ?`

    jobReviews= `Great copywriter, was very easy to work with, had great communication and completed the task in a timely manner. Highly Recommended`
    callDiplayResult ()
}


else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==2) {
    jobTitle= `Marketing Strategist & Lead Generation`; 
    jobDescription= `We need a social media marketer who can help in design and delivery of communication strategies, providing messaging leadership and actively facilitating community 
                    engagement support for the SHRM Certification department.`; 

    jobDetails= `We Want you to write a captivating sales copy for our fashion website. We deal in Women and kids clothing, shoes, jewelries and other accessories for women.
                word limit :200 words When can you get this done ?`

    jobReviews= `${firstName} delivered great work on this project, ${PossesiveAdjective} communication was top. ${sex} met the deadline, and ${PossesiveAdjective} skills were very strong.
                 will Recommend! `
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==3) {
    jobTitle= `Social Media Account Manager`; 
    jobDescription= `We are clothing store and need a managerto handle our Social media Accounts: Twitter/Instagram, and also Grow the audience. 
                    Followers increase globally and marketing are necessary!`; 

    jobDetails= `We Want you to write a captivating sales copy for our fashion website. We deal in Women and kids clothing, shoes, jewelries and other accessories for women.
                word limit :200 words When can you get this done ?`

    jobReviews= `${firstName} delivered great work on this project, ${PossesiveAdjective} communication was top. ${sex} met the deadline, and ${PossesiveAdjective} skills were very strong.
                 will Recommend! `
    callDiplayResult ()
}


else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==4) {
    jobTitle= `Increase Social Media Following`; 
    jobDescription= `We are clothing store and need a managerto handle our Social media Accounts: Twitter/Instagram, and also Grow the audience. 
                    Followers increase globally and marketing are necessary!`; 

    jobDetails= `We Want you to write a captivating sales copy for our fashion website. We deal in Women and kids clothing, shoes, jewelries and other accessories for women.
                word limit :200 words When can you get this done ?`

    jobReviews= `${firstName} delivered great work on this project, ${PossesiveAdjective} communication was top. ${sex} met the deadline, and ${PossesiveAdjective} skills were very strong.
                 will Recommend! `
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==4) {
    jobTitle= `Social Media Management`; 
    jobDescription= `Looking for someone who can manage social media and content development for my startup`; 

    jobDetails= `We Want you to write a captivating sales copy for our fashion website. We deal in Women and kids clothing, shoes, jewelries and other accessories for women.
                word limit :200 words When can you get this done ?`

    jobReviews= `${firstName} delivered great work on this project, ${PossesiveAdjective} communication was top. ${sex} met the deadline, and ${PossesiveAdjective} skills were very strong.
                 will Recommend! `
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==5) {
    jobTitle= `Review our social media`; 
    jobDescription= `Looking for someone who can manage social media and content development for my startup`; 

    jobDetails= `I need someone to monitor our social media. To check where we can improve. Do customer queries get answered? What can we do to improve insta, youtube and facebook?
                 i would like ideas to help.`

    jobReviews= `${firstName} delivered great work on this project, ${PossesiveAdjective} communication was top. ${sex} met the deadline, and ${PossesiveAdjective} skills were very strong.
                 will Recommend! `
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==6) {
    jobTitle= `Facebook Ads Manager Set Up`; 
    jobDescription= `Looking for someone who can manage social media and content development for my startup`; 

    jobDetails= `I need someone to monitor our social media. To check where we can improve. Do customer queries get answered? What can we do to improve insta, youtube and facebook?
                 i would like ideas to help.`

    jobReviews= `${firstName} delivered great work on this project, ${PossesiveAdjective} communication was top. ${sex} met the deadline, and ${PossesiveAdjective} skills were very strong.
                 will Recommend! `
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==7) {
    jobTitle= `Social Media Manager to grow Instagram account`; 
    jobDescription= `Looking for someone who can manage social media and content development for my startup`; 

    jobDetails= `I need someone to monitor our social media. To check where we can improve. Do customer queries get answered? What can we do to improve insta, youtube and facebook?
                 i would like ideas to help.`

    jobReviews= `${firstName } was great in managing my instagram account. ${sex} was quick to ask questions and implement any new changes too.
                 Would definitely again. `
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==8) {
    jobTitle= `Digital Marketer`; 
    jobDescription= `We are a small dynamic company and are looking for someone to help maintain our online advertising. 
    We need a digital marketer who can initiate and manage facebook ads.
    We will largely provide the creative content so we want someone who knows about implementing, analytics, split testing, dynamic ads, creating custom audiences, retargeting etc.`; 

    jobDetails= `not added yet`

    jobReviews= `${firstName } was great in managing my instagram account. ${sex} was quick to ask questions and implement any new changes too.
                 Would definitely again. `
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==9) {
    jobTitle= `Digital Marketer`; 
    jobDescription= `For our small fashion start up store,  we would need help with Influencer Marketing, Instagram, Google Adds)
                     to bring the first visitors on the page.`; 

    jobDetails= `not added`

    jobReviews= `It was a great pleasure to work with ${firstName}. ${sex} did a terrific job and immediately grabbed the essence what a small company needs. I would hire again for my marketing related needs`
    callDiplayResult ()
}


else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==10) {
    jobTitle= `Instagram Marketing`; 
    jobDescription= `Seeking a social media marketer who can help with  Instagram and Facebook marketing.`; 

    jobDetails= `not added`

    jobReviews= `It was a great pleasure to work with ${firstName}. ${sex} did a terrific job and immediately grabbed the essence what a small company needs. I would hire again for my marketing related needs`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==11) {
    jobTitle= `Help with advertising on Instagram`; 
    jobDescription= `Seeking a social media marketer who can help with  Instagram and Facebook marketing.`; 

    jobDetails= `not added`

    jobReviews= `It was a job well done!`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==12) {
    jobTitle= `Can you help us manage our social media?`; 
    jobDescription= `Looking for someone who can manage social media and content development for my startup `; 

    jobDetails= `not added`

    jobReviews= `It was a job well done!`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==13) {
    jobTitle= `Social Media Marketing`; 
    jobDescription= `I'm currently struggling with the demand of social media and managing my content in a strategic way. where I can earn views, likes and income. I'm hoping to have someone help me manage my social media and/or educate me on how to do so. Thank you!
    `; 

    jobDetails= `not added`

    jobReviews= `Professional, responsive and knowledgable. We'll use ${PossesiveAdjective} services again soon.`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==14) {
    jobTitle= `Digital Marketer Needed`; 
    jobDescription= `I need someone to help in defining the overall digital pan an executing parts of it alongside a team. Skills in content writing, SEO, SMO and email campaigns required.
                     Experience in retail and consumer products required.`; 

    jobDetails= `not added`

    jobReviews= `Very helpful and knowledgeable. Good attention to details, responded to everything on time. Good communicator and professional.`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==15) {
    jobTitle= `Social Media Marketing`; 
    jobDescription= `We need someone who can take creative direction and understand our overall goals, yet come up with their own ideas of ways of achieving those goals. Must have strong writing and correspondence skills. Understands eCommerce.`; 

    jobDetails= `not added`

    jobReviews= `${firstName} is great! Would love to keep in touch for future collaborations. Thank you!`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==16) {
    jobTitle= `Social Media Content and Management`; 
    jobDescription= `We have accounts set up for all of the major social networking sites however need help in generating content and managing the aggregator sites. We are looking for someone who will help us create contents and 
                     other vale-adds we have ready but doing this professionally, and designing posts where needed.`; 

    jobDetails= `not added`

    jobReviews= `Great work and thanks so much.`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==17 && (sex == "He" || sex == "She")) {
    jobTitle= `Facebook Management`; 
    jobDescription= `We have accounts set up for all of the major social networking sites however need help in generating content and managing the aggregator sites. We are looking for someone who will help us create contents and 
                     other vale-adds we have ready but doing this professionally, and designing posts where needed.`; 

    jobDetails= `*schedules posts`

    jobReviews= `${firstName} scheduled our posts for us, keeping our target audience and competitors in mind. ${sex} works fast and is very efficient`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==18 && (sex == "He" || sex == "She")) {
    jobTitle= `Help with Instagram management `; 
    jobDescription= `Hello,

    I'm looking for someone who can turn my boring and ordinary business Instagram account into something beautiful and visually appealing. I have a service based business which offers coaching, events and online community for mum entrepreneurs.
    `; 

    jobDetails= `*schedules posts`

    jobReviews= `${firstName} scheduled our posts for us, keeping our target audience and competitors in mind. ${sex} works fast and is very efficient`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==19 && (sex == "He" || sex == "She")) {
    jobTitle= `Social Media Marketing`; 
    jobDescription= `I am looking for somebody who is willing to be my social media marketer. This individual ideally would have a passion for what I am trying to do with my site. 
                    My site is small, with tons of potential (I believe). I currently have a small presence on twitter, Facebook and Pinterest. I am looking to make my site a much more 'community oriented' experience, with people sharing their ideas, images and stories. Ideally this person would a)
                     help me define my SMM strategy and b) make regular posts for me in line with that strategy `; 

    jobDetails= `*create posts`

    jobReviews= `${firstName} scheduled our posts for us, keeping our target audience and competitors in mind. ${sex} works fast and is very efficient`
    callDiplayResult ()
}

else  if (namey == "yidarmys" && niche=="Digital Marketing" && week==20 && (sex == "He" || sex == "She")) {
    jobTitle= `Twitter  managment`; 
    jobDescription= `Hi there We  have a  store and need someone We can trust to make our social network bigger and wider with content and followers. Duties can include any of Follow, un follow, posting, likes and comments

    Thanks`; 

    jobDetails= `*create posts`

    jobReviews= `${firstName} did a great job and was prompt and easy to reach at all times during the project.`
    callDiplayResult ()
}


} 
     window.location.reload();
     window.location.reload();
     return false;
})








