
let niche = [];
let week = [];
let firstName = [];
let sex = [];
let PossesiveAdjective =[]
let jobTitle;
let jobDescription;
let jobDetails;
let jobReviews;
let namek = "kim"
let error = "Please, Re-enter All Values"

let clientNameEl = document.getElementById("client-name")
let nicheEl = document.getElementById("Select-niche")
let weekEl = document.getElementById("select-week")
let firstNameEl = document.getElementById("first-name")
let sexEl = document.getElementById("Sex")
let resultElkj = document.getElementById("result-elkj")
let resultElakj = document.getElementById("result-elakj")
let resultElbkj = document.getElementById("result-elbkj")
let resultElckj = document.getElementById("result-elckj")
let submitAll = document.getElementById("submit-all")
let clearAll = document.getElementById("clear-all");
let errorRuud = document.getElementById("error-rud")



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

let localStorageTitle = JSON.parse(localStorage.getItem("resultTitlekj"))
let localStorageDescription = JSON.parse(localStorage.getItem("resultDescriptionkj"))
let localStorageDetails = JSON.parse(localStorage.getItem("resultDetailskj"))
let localStorageReview = JSON.parse(localStorage.getItem("resultReviewkj"))
let localStorageErrorRuud = JSON.parse(localStorage.getItem("errorMessageRuud"));

if(localStorageErrorRuud){
    errorRuud.innerHTML = localStorageErrorRuud
}

if(localStorageTitle){

    resultElkj.innerHTML = localStorageTitle

}

if(localStorageDescription){

    resultElakj.innerHTML = localStorageDescription

}

if(localStorageDetails){

    resultElbkj.innerHTML = localStorageDetails

}

if(localStorageReview){

    resultElckj.innerHTML = localStorageReview

}

function callDiplayResult (){
    resultElkj.innerHTML = ` Job Title : ${jobTitle} `; 
    resultElakj.innerHTML= `Job Description : ${jobDescription}`
    resultElbkj.innerHTML = `Job Details : ${jobDetails}`
    resultElckj.innerHTML = `Review : ${jobReviews}`;

    resultTitlekj = ` Job Title : ${jobTitle} `; 
    resultDescriptionkj= `Job Description : ${jobDescription}`
    resultDetailskj = `Job Details : ${jobDetails}`
    resultReviewkj  = `Review : ${jobReviews}`;


    localStorage.setItem("resultTitlekj", JSON.stringify(resultTitlekj));
    localStorage.setItem("resultDescriptionkj", JSON.stringify(resultDescriptionkj));
    localStorage.setItem("resultDetailskj", JSON.stringify(resultDetailskj));
    localStorage.setItem("resultReviewkj", JSON.stringify( resultReviewkj));

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
    resultElkj.innerHTML = ''
    resultElakj.innerHTML= ''
    resultElbkj.innerHTML =''
    resultElckj.innerHTML = ''
    errorRuud.innerHTML = '';
})

submitAll.addEventListener("click", function() {

    nicheO ()
    weekO ()
    freelancerName()
    sexElO ()
    hisHer ()

    if (firstName =='' || firstName == [] ) {
        localStorage.clear()

       errorMes = error
       errorRuud.innerHTML = error
      localStorage.setItem("errorMessageRuud", JSON.stringify(error))
        
    }

    else if (niche =='' || niche == [] ){
        localStorage.clear()
        errorMes = error
        errorRuud.innerHTML = error
        localStorage.setItem("errorMessageRuud", JSON.stringify(error))

    } 
    else if (sex =='' || sex == [] ){
        localStorage.clear()
        errorMes = error
        errorRuud.innerHTML = error
        localStorage.setItem("errorMessageRuud", JSON.stringify(error))
    
    }

    else if (week=='' || week== [] ){
        localStorage.clear()
        errorMes = error
        errorRuud.innerHTML = error
        localStorage.setItem("errorMessageRuud", JSON.stringify(error))
    
    }

    else{
        localStorage.clear()

//Kim Jane Client Contet Writing CRYPTO//

if (niche=="Content Writing" && week==1){
    jobTitle= `Article about crypto`;
     jobDescription= ` Hi
     I'm looking for a person who knows about crpto investing etc to write articles about crypto.
     
     You need to write posts for blogs, Full details in PM.
     
     Thank you`;
    jobDetails= `What are the 5 best crypto currencies to invest in to hold until 2022?`; 
    jobReviews= `${firstName} was great to work with. Great communication and work ethics. Thank you!`

    callDiplayResult ()

    }

    else if (niche=="Content Writing" && week==2){
        jobTitle= `Sexual Health Content Writer needed`;
         jobDescription= ` Hi,

         I am looking for a writer to write content for a website (http://intimattevillage.com) in the health and sexual niche.
         
         The website is relatively new but our goal is the grow it into an authority in the niche.
         
         We are looking for someone is trying to build his portfolio and is interested in the topic to be able to give value to our reader. This is not a ghostwriting gig where your work will never be seen (unless you want to), we have an author bio for our writers.
         
         In your proposal, please provide: Writing samples (sexual health niche, if you have any)
         Thank you for your interest.`;

        jobDetails= `5 Best foods to improve sex drive in men`; 

        jobReviews= `Great job! Very quick to reply to messages. Sticks to deadlines and has great communication skills.`
    
        callDiplayResult ()
    
        }

        else if (niche=="Content Writing" && week==3){
            jobTitle= `Cryptocurrency Writer Needed`;
             jobDescription= ` https://globalcoinreport.com is a fast-growing crypto​ news site looking for writer to join our team. 
             Tasks entail article writing on coins and new ICOs. Each article should be 500 to 1000 words.`;
    
            jobDetails= `5 cheapest crypto currencies you will regret not buying in 2022`; 
    
            jobReviews= `${firstName} is an excellent writer that understands
                         the intricacies of the cryptocurrency. thanks ${firstName}!`
        
            callDiplayResult ()
        
            }

         else if (niche=="Content Writing" && week==4){
                jobTitle= `Blog Article`;
                 jobDescription= `I'm looking for an article on 'How To Trade Crypto' that will be published on our blog.

                 
                 ARTICLE OUTLINE:
                 
                 What is Crypto?
                 Basics of Crypto Trading?
                 
                 ARTICLE OBJECTIVE: To introduce novices to Crypto trading & generate leads for eToro.
                 
                 WRITING STYLE: Blogger
                 
                 WORD COUNT MINIMUM:  500-1000 words`;
        
                jobDetails= `Help write a 500-1000 words on "How To Trade Crypto".
                    ARTICLE OUTLINE:
                 
                    What is Crypto?
                    Basics of Crypto Trading?
                
                    ARTICLE OBJECTIVE: To introduce novices to Crypto trading & generate leads for eToro.
                
                    WRITING STYLE: Blogger
                
                    WORD COUNT MINIMUM:  500-1000 words`; 
        
                jobReviews= `Very professional and quick, delivered high-quality content.`
            
                callDiplayResult ()
            
                }


                else if (niche=="Content Writing" && week==5){
                    jobTitle= `Need Article on the metaverse`;
                     jobDescription= ` Need an article on the metaverse and the history on it. Key things that need to be apart of this article:

                     What is the metaverse?
                     Why it is important
                     How it ties to the blockchain and crypto
                     
                     
                     Needs to have sources linked
                     500 words
                     
                     Need someone who can complete this in next 2 days`
                    jobDetails= ` Can you hel write a post on : "Metaverse and its importance in cryptocurrency. Key things that need to be apart of this article:

                    What is the metaverse?
                    Why it is important
                    How it ties to the blockchain and crypto
                    
                    word count : 500 words
                    
                    can you complete this in next 2 days`; 
            
                    jobReviews= `Delivered the project ahead schedule and required no edits. Would absolutely use again`
                
                    callDiplayResult ()
                
                    }

                    

         else if (niche=="Content Writing" && week==6){
                    jobTitle= `Content writer in FX and Crypto`;
                     jobDescription= ` Need a writer to write Single blog for our cryptocurrency project. 
                                        Details will be disclosed in PM`
                    jobDetails= ` What are the advantages and disadvantages of cryptocurrency?`; 
            
                    jobReviews= `It was delightful working with ${firstName}. Good turn around time with apt. research. looking forward for future work.`
                
                    callDiplayResult ()
                
                    }

        else if (niche=="Content Writing" && week==7){
                    jobTitle= `Cryptocurrency Blockchain Writer Needed!`;
                    jobDescription= ` Hello ,
                    
                    Need a cryptocurrency writer to help with crypto contents for my blog. 
                     if you are interested , then please contact me`
                    jobDetails= ` Disadvantages of Ripple (XRP) as a cryptocurrency`; 
            
                    jobReviews= `Incredibly professional and timely, along with being an excellent communicator. Will definitely be using ${firstName} again for future jobs!`
                
                    callDiplayResult ()
                
         }

    //Technical Writing//

    
    else if (niche=="Technical Writing" && week==1){
        jobTitle= `Need a technical writer- critical to have perfect ability to explain things in writing`;
        jobDescription= `I need a writer for 5 technical topics, you will get topic outlines after getitng the word. I estimated topic and words. Need someone with native/perfect written naturally sounding english for US market.

        Writing will be focused on answering questions, tutorials. Adding assets like screenshots will be necessary.`
        jobDetails= ` Not added`; 

        jobReviews= `${firstName} produced a professional, well-written, and easy to understand post for us. We will use ${PossesiveAdjective} again.`
    
        callDiplayResult ()
    
}

else if (niche=="Technical Writing" && week==2){
    jobTitle= `Technical Writer`;
    jobDescription= `I am looking for a writer who has written blogs and short posts for tecchnical niches. I am working on publishing articles on my blog and need to hire someone who has experience with it to write genuine articles and not bt spins. I would give the topic and 
                     you would need to do your research on that subject and come with a great article that can wow the readers.`
    jobDetails= ` Not added`; 

    jobReviews= `${firstName} produced a professional, well-written, and easy to understand paper for us. We will use ${PossesiveAdjective} again.`

    callDiplayResult ()


}

else if (niche=="Technical Writing" && week==3){
    jobTitle= `Write technical specifications`;
    jobDescription= `For several industrial equipments, like evaporators, spray dryers, pasteurisers, liquid filtration , the job is to write a detailed technical specification in order 
                            to start the research of suppliers, for future purchasing`
    jobDetails= ` Not added`; 

    jobReviews= `Well researched and well written, thank you!`

    callDiplayResult ()


}

   // Virtual Assistant//

    else  if (namek == "kim" && niche=="Virtual Assistant" && week==1){
        jobTitle= `I need someone to copy numbers from websites to Excel`; 
        jobDescription= `I need someone to go through websites getting phone numbers and inputting them onto an excel spreadsheet.​
    
                        I will give you company websites, you need to find the contact numbers.`;
        jobDetails= `Attached below is doc containing a list of websites we will want you to find their contact numbers.
    
                    Hope you can get this done today ?`; 
        jobReviews= `Great Work. Thanks a lot.`
    
        callDiplayResult ()   
    }
    
    else  if (namek == "kim" && niche=="Virtual Assistant" && week==2){
        jobTitle= `Virtual Assistant with Strong Technical Skills`; 
        jobDescription= `Virtual assistant needed.Duties may include: Facebook updates, internet research, populating spreadsheets, populating PowerPoint presentations, creating Word documents. 
        Must have the following skills:
    
        (1) Functional understanding of Excel, Powerpoint and Word
        (2) Good written English
        (3) Strong internet research skills`;
    
        jobDetails= `Attached below is doc containing a list of websites we will want you to find their email adresses.
    
         Hope you can get this done in a day?`; 
        jobReviews= `Great Work. Thanks a lot.`
    
        callDiplayResult ()   
    }
    
    else  if (namek == "kim" && niche=="Virtual Assistant" && week==3){
        jobTitle= `Virtual assistant`; 
        jobDescription= `Virtual assistant needed.Duties may include: Facebook updates, internet research, populating spreadsheets, populating PowerPoint presentations, creating Word documents. 
        Must have the following skills:
    
        (1) Functional understanding of Excel, Powerpoint and Word
        (2) Good written English
        (3) Strong internet research skills`;
    
        jobDetails= `Attached below is doc containing a list of websites we will want you to find their email adresses.
    
        Will forward the screenshot to you soon Here it is. Help enter it into MS Excel and send it to me. Hope you can get this done today ?`; 
        jobReviews= `${sex} is well qualified with great English skills and completed all of my tasks in required time. Thank you ${firstName}!`
    
        callDiplayResult ()   
    }
    
    else  if (namek == "kim" && niche=="Virtual Assistant" && week==4){
        jobTitle= `Personal assistant`; 
        jobDescription= `I am a professional looking for someone to help with miscellaneous personal tasks for my wife and I. 
                            Tasks can be as simple as making a phone call, researching an topic or as complex as planning a vacation. 
                         Someone willing to do anything a virtual assistant can do.`;
    
        jobDetails= `Help make phone calls to the numbers attached in the doc below asking them the time the will be available to welcome my visit next week`; 
        jobReviews= `${firstName} did a nice job on this. Thanks!`
    
        callDiplayResult ()   
    }
    

    //Data Analysis//

    else  if (namek == "kim"  && niche=="Data Analytics" && week==1){
        jobTitle= `Data Analyst`; 
        jobDescription= `We need a data analyst that is able to study the data so that we can tell the story. 
                         We  have the data to understand how to study and manage these elements, 
                         we just need an analyst who can help us move faster down this path....that is potentially 
                         a really interesting role. Is this something that could be interesting for you?`; 
    
        jobDetails= ` With the data attached below. Help analyse our Customer Experience (expectation management, optimization)
        )`
    
        jobReviews= `Wonderful work and great attention towards the details. Others please make use of this talent.`
        callDiplayResult ()
    }


    // Copywriting//

    
else  if (namek == "kim" && niche=="Copywriting" && week==1) {
    jobTitle= `Product Description Copy`; 
    jobDescription= `Need to write product description for our e-commerce store  products specializing in tech gadgets.

    We have items that need to have proper descriptions made.`; 

    jobDetails= `We Want you to write a captivating sales copy for our fashion website. We deal in Women and kids clothing, shoes, jewelries and other accessories for women.
                word limit :200 words When can you get this done ?`

    jobReviews= `Highly professional. Delivered a great copy.`
    callDiplayResult ()
}

else  if (namek == "kim" && niche=="Copywriting" && week==2) {
    jobTitle= `Copywriter needed for a blog post`; 
    jobDescription= `Need Copywriter to revise/re-write and optimize an article`; 

    jobDetails= `Need you to revise/re-write and optimize the  article attached below
                    How long will this take ?`

    jobReviews= `${firstName} understood our needs and  provided us with a high-quality article.`
    callDiplayResult ()

}
else  if (namek == "kim" && niche=="Copywriting" && week==3) {
    jobTitle= `Copy for Laundry Website`; 
    jobDescription= `We need a sales copywriter to help with a sales copy for our laundry website. 
                        Full job details will be sorted during Interview.`; 

    jobDetails= `Need you to revise/re-write and optimize the  article attached below
                    How long will this take ?`

    jobReviews= `${firstName} was great. ${sex} nailed the copy and I can't wait to work together again`
    callDiplayResult ()

}

//Product Manager

else  if (namek == "kim" && niche=="Product Manager" && week==1) {
    jobTitle= `Product Manager for a Web Portal project`; 
    jobDescription= `We've been developing a portal for the last 6 months. We feel close to finishing however we have more features and other UX/UI task to implement. We feel we need a Product Manager with experience in launching projects like this.

                    I am a Web Developer and thought I could manage the client and the agency that is building the portal however I dont have the time at the moment nor the expertise.
    `; 

    jobDetails= `
                    Not Added Yet  `

    jobReviews= `Very professional and great communication.`
    callDiplayResult ()

}

else  if (namek == "kim" && niche=="Product Manager" && week==2) {
    jobTitle= `Product Manager`; 
    jobDescription= `
                     We are seeking a product manager to join our team. The ideal candidate would be an experienced PM who can build a brand 
                    new product given an objective or improve current products, get things done, and has a passion for problem-solving
                    Responsibilites:
                    Couple a data-driven approach with strong product intuition to prioritize features and interventions in the overarching customer experience
                    Drive innovation and improvement within defined sections of Zippia’s product set
                    Balance the creation of dynamic, engaging user experiences with the company’s and product’s growth goals
                    Demonstrate thought leadership and innovative thinking in the generation of new product ideas
                    Participate in user research studies and interviews. Explore and analyze user requirements obtained from these studies and interviews
    `; 

    jobDetails= `
                    Not Added Yet  `

    jobReviews= `Very professional and great communication.`
    callDiplayResult ()
}
else  if (namek == "kim" && niche=="Product Manager" && week==3) {
    jobTitle= `Seeking survey responses from product strategist`; 
    jobDescription= `
                    Hello, We are Seeking survey responses from product strategist. 
                    Thanks.
    `; 

    jobDetails= `
                    Not Added Yet  `

    jobReviews= `Very professional and great communication.`
    callDiplayResult ()
}
    

    }

window.location.reload();
window.location.reload();
return false;
})