const Portfolio = document.querySelector('.Portfolio')
function renderHomeContent() {
    const name = 'Tsholofelo';
    const details = 'I am a 27 year old CodeTribe Academy applicant from Kimberley.Although this task is very challenging and hoping to encounter many more cahllenges going forward, I find it very interesting and hoping to be selected as one of the few for the official codetribe enrollment. I am a hardworking indivual and I never backdown from challenges no matter how big or small. I am to learn as much as I can from the opportunity and implement my newly gained skills';
    const PortfolioInfo = document.createElement('div');
    PortfolioInfo.classList.add('aboutContent');
    const PortfolioPic = document.createElement('div');
    PortfolioPic.classList.add('img-box');
    PortfolioInfo.innerHTML = `
    <h1>${name}</h1>
    <p style="background-color: pink; color: black;">${details}</p>
    `;
    PortfolioPic.innerHTML =`
    <img src="Images/Assets/Tsholo.jpg" height="" width="300px"> 
    `
    Portfolio.appendChild(PortfolioInfo);
    Portfolio.appendChild(PortfolioPic);
    }
    renderHomeContent();

    // about page rendering

const aboutMe = document.querySelector('.aboutMe');
const EduBackground = [
    {
        description: ' Bachelor of Commerce in Economics and international trade'
    },
    {
        description: 'End-User computing certificate'
    },
    {
        description: 'Technical support certificate'
    },
    {
        description: 'Business start-ups certificate'
    }
]
    function renderAboutContent(){
        const information = document.createElement('div');
        information.classList.add('information');
        information.innerHTML = `
        <h2 class="heading">About <span>Me</span></h2>
        <p>As a person who strives to reach new heights, I always make sure that I work hard and diligently. A few of my skills include excellent communication skills, attention to detail, ability to collaborate effectively, a team plaayer and ability to work under pressure.</p>
        
        <h6 class="heading" background-color="pink">Educational Background</h6>
        <ul>
            <li><i class="fa fa-star" aria-hidden="true"></i></li>
            <li><i class="fa fa-star" aria-hidden="true"></i> </li>
            <li><i class="fa fa-star" aria-hidden="true"></i> </li>
            <li><i class="fa fa-star" aria-hidden="true"></i> </li>
        </ul>

        <h6 class="heading" background-color="pink">Working Experience</h6>
        <p>End-user and technical support intern at Moribo Creation.  </p>
        `
        aboutMe.appendChild(information);
    }
    renderAboutContent();

