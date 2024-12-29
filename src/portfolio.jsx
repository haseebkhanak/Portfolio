import Logo from './images/logo.JPG';
import html from './images/html.JPG';
import css from './images/css.PNG';
import bootstrap from './images/bootstrap.PNG';
import tailwind from './images/tailwind.PNG';
import js from './images/js.PNG';
import react from './images/react.PNG';
import mondb from './images/mondb.PNG';
import ex from './images/ex.JPG';
import node from './images/node.PNG';
import php from './images/php.PNG';
import sql from './images/sql.PNG';
import nextbtn from './images/nextbtn.PNG';
import prevbtn from './images/prevbtn.PNG';
import cal from './images/cal.JPG';
import forecast from './images/forecast.JPG';
import medi from './images/medi.JPG';
import medirec from './images/medirec.JPG';
import mindfinder from './images/mindfinder.JPG';
import playersprediction from './images/playersprediction.JPG';
import profile from './images/profile.PNG';
import fb from './images/fb.PNG';
import git from './images/git.PNG';
import ln from './images/ln.PNG';
import wa from './images/wa.PNG';
import cross from './images/cross.PNG';
import OrbitingCircles from './magicui.jsx/orbiting';
import { TypingAnimation } from './magicui.jsx/typeanimate';
import { BorderBeam } from './magicui.jsx/borderbeam';
import { LetterPullup } from './magicui.jsx/letterpullup';
import { NeonGradientCard } from './magicui.jsx/neon';
import classNames from 'classnames';
import { AnimatedList } from './magicui.jsx/animatelist';
import { useRef, useEffect, useState } from 'react';
export default function MainPage(className) {
  const frontendRef = useRef(null)
  const backendendRef = useRef(null)
  const fullstackRef = useRef(null)
  const blurRef=useRef(null)

  const viewFrontend = () => {
    frontendRef.current.style.display = "block"
    blurRef.current.style.display="block"
  }

  const viewBackend = () => {
    backendendRef.current.style.display = "block"
    blurRef.current.style.display="block"
  }

  const viewFullstack = () => {
    fullstackRef.current.style.display = "block"
    blurRef.current.style.display="block"
  }

  const crossSvg = () => {
    frontendRef.current.style.display = "none"
    backendendRef.current.style.display = "none"
    fullstackRef.current.style.display = "none"
    blurRef.current.style.display="none"
  }

  const [count, setCount] = useState(0)
  const images = [cal, forecast, medi, medirec, mindfinder, playersprediction];
  const desc = ['A user-friendly GPA Calculator built using HTML, CSS, and JavaScript, allowing students to easily calculate their Grade Point Average (GPA).',
    'A web-based Weather Forecast application built using HTML, CSS, and JavaScript, utilizing a Weather API to provide accurate and up-to-date weather information.',
    'Developed a webapp in which patients can connect with doctors for real-time consultations. This include chat, video call, voice call, appointment scheduling, searching profile and many more.',
    'Developed a system that leverages machine learning classifiers to predict diseases based on symptoms and recommend appropriate medicines.',
    'A user-friendly Quiz Web App built using both frontend and backend technologies allowing users to test their knowledge and skills in various subjects.',
    'Trained a model that will predict the performance of cricket players based on various factors using regression techniques.The model is trained on historical data, learning the patterns and correlations between input features and the performance outcomes.']

  const tech = ['I used frontend technologies i.e, HTML, CSS, JavaScript and Bootstrap and in backend I used MySQLi and PHP',
    'I used frontend technologies i.e, HTML, CSS, JavaScript and Bootstrap and Weather API OpenWeatherMap',
    'Web Socket is used for chat and WEBRTC is used for online streaming moreover MERN Stack has been impleted (React,NodeJs,ExpressJs,MongoDb,REST Apis)',
    'MERN stack implemented for web app integrating both frontend and backend with database and for model python is used and flask is used on backend',
    'For frontend HTML, CSS, JavaScript bootstrap and for backend Php and MySQLi have been implemented',
    'Python is used for ML and Regressors are used to train a model']

  const links=['https://github.com/haseebkhanak/GPA-Calculator',
  'https://github.com/haseebkhanak/Weather-Forecast',
  'https://github.com/haseebkhanak/Medi-Assist',
  'https://github.com/haseebkhanak/MedicineRecommendation',
  'https://github.com/haseebkhanak/Mind-Finder',
  'https://github.com/haseebkhanak/PlayersPrediction'
  ]
  const next = () => {

    if (count >= images.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }

  }

  const previous = () => {

    if (images[count] === cal) {
      setCount(5);
    } else {
      setCount(count - 1);
    }

  }
  const bodyRef = useRef('')
  useEffect(() => {
    bodyRef.current.style.backgroundColor = "aliceblue"
  })

  const notifications = Array.from({ length: 20 }, () => [
    {
      img: html,
    },
    {
      img: css,
    },
    {
      img: js,
    },
    {
      img: bootstrap,
    },
    {
      img: tailwind,
    },
    {
      img: react,
    },
    {
      img: mondb,
    },
    {
      img: ex,
    },
    {
      img: node,
    },
    {
      img: php,
    },
    {
      img: sql,
    }

  ]).flat();

  const Notification = ({ img }) => {
    return (
      <>
        {/* <div className="blur" ref={blurRef}>

</div> */}
      <div>
      <figure
        className={classNames(
          "relative mx-auto min-h-fit w-full max-w-[200px] cursor-pointer overflow-hidden rounded-2xl p-4",
          "transition-all duration-200 ease-in-out hover:scale-[103%]",
          "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
        )}
      >
        <div>

          <div className='w-[350] shadow-2xl relative rounded-lg'>
            {/* <BorderBeam size={250} duration={5} /> */}
            <img src={img} alt="No" />
          </div>

        </div>
      </figure>
      </div>
      </>
    );
  };

  const email=()=>{
    window.location.assign("mailto:saadkhanak13@gmail.com")
  }
  const linkdin=()=>{
    window.location.assign("https://www.linkedin.com/in/haseeb-khan-32934b261")
  }
  const whatsapp=()=>{
    window.location.assign("https://wa.me/923119579131")
  }
  const github=()=>{
    window.location.assign("https://github.com/haseebkhanak/haseebkhanak.git")
  }

  return (

    <>

      <div ref={bodyRef} className="circle-hesitate overflow-hidden">

        <nav className="bg-white space-x-4 flex shadow-2xl navbar overflow-hidden">
          <img src={Logo} alt="Error" className='logo ml-10 mt-2 mb-2' />
          <div className='pl-80 lg:space-x-20 lg:mt-5 sm:mt-2 items sm:space-x-10'>
            {/* <a href='#about' className='aboutbtn'>About</a > */}
            <a href='#skills' className='skillsbtn'>Skills</a>
            <a href='#projects' className='projectsbtn'>Projects</a>
            <a href='#services' className='skillsbtn'>Services</a>
            <a href='#contact' className='contactbtn'>Contact Me</a>
          </div>
        </nav>
        <div>

        </div>
        <div className="profile mt-20">
          <div className="circle-react">
            <img src={react} alt="react" />
          </div>
        </div>

        <img src={profile} alt="Error" className='personal' />
        <div>
            <p className='aboutmetext text-5xl font-bold text-transparent 
                     bg-gradient-to-r from-green-500 via-purple-500
                     to-indigo-500 bg-clip-text pt-20'>About Me</p>
          <div className='bg-white shadow-xl ml-20 relative rounded-lg about' id='about'>
            {/* <BorderBeam size={250} duration={5} /> */}
            <p className='nametext pt-5'></p>
            <p className='desctext text-transparent 
                     bg-gradient-to-r from-green-500 via-purple-500
                     to-indigo-500 bg-clip-text ml-20'>Software Engineer</p>
            <div style={{ width: "400px" }} className='ml-20 pb-5'>

              <p className='detailtext'>I am a passionate and skilled full-stack <br /> developer specializing in the MERN stack and  <br /> machine learning. With expertise in building <br /> scalable web applications.</p>
            </div>
            <a href="/Portfolio/Resume.pdf" download="Resume.pdf" className='downloadbtn px-2 py-2 group relative inline-block overflow-hidden bg-blue-300 border border-blue-500 focus:outline-none focus:ring'>  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-blue-700 border border-blue-800 transition-all group-hover:w-full"
  ></span>

  <span
    className="relative text-black transition-colors group-hover:text-white"
  >
    Download Resume
  </span>
</a> <br /> <br />

          </div>
        </div>

        <div id='skills'>
          <p className='skills mt-20 font-bold text-5xl text-transparent 
                     bg-gradient-to-r from-green-500 via-purple-500
                     to-indigo-500 bg-clip-text'>Skills</p>
          <div
            className={classNames(
              "relative flex h-[400px] w-full flex-col p-6 overflow-hidden rounded-lg",
              className
            )}
          >
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div> <br />

        <div id='projects'>
          <p className='projects mt-10 font-bold text-5xl text-transparent 
                     bg-gradient-to-r from-green-500 via-purple-500
                     to-indigo-500 bg-clip-text'>Projects</p> <br />
<div className='projectslides bg-white shadow-xl ml-20 mt-30 pb-10 relative rounded-lg'>
          <div className='slides flex'>
            <img src={images[count]} alt="no" className='images py-8' />
            <p className='overviewtext ml-10 py-8 pr-5'> <span className='text-2xl font-bold text-transparent 
                     bg-gradient-to-r from-blue-500 via-purple-500
                     to-indigo-500 bg-clip-text'>Overview</span> <br />{desc[count]} <br /><br /><span className='text-2xl font-bold text-transparent 
                     bg-gradient-to-r from-blue-500 via-purple-500
                     to-indigo-500 bg-clip-text'>Technologies</span> <br />{tech[count]}</p>
          </div> <br />
          <a className='repo bg-black px-20 py-2 mb-20 text-white' href={links[count]} target='_blank'>Visit Repo</a>
          </div> <br />
          <div className='flex'>
            <img src={prevbtn} onClick={previous} alt="" className='prev' />
            <img src={nextbtn} onClick={next} alt="" className='next' />
          </div> <br /><br />
        </div>

        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40 blur" ref={blurRef}></div>
        <div className='viewfrontend absolute bg-white rounded-lg z-50' ref={frontendRef}>
          <p className='viewfrontendtext text-2xl ml-5 mt-5'>Frontend Development</p>
          <img src={cross} alt="No" className='cross' onClick={crossSvg}/>
          <p className='ml-5 mt-5'>✔️ Building the user interface using HTML, CSS, and JavaScript.</p>
          <p className='ml-5'>✔️ Implementing frameworks like React, Bootstrap and Tailwind.</p>
          <p className='ml-5'>✔️ Transforming UI/UX design into functional and responsive applications.</p>
          <p className='ml-5'>✔️ Connecting the frontend with backend APIs for dynamic content.</p>

        </div>

        {/* <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40 blur" ref={blurRef}></div> */}
        <div className='viewbackend bg-white shadow-xl rounded-lg absolute z-50' ref={backendendRef}>
          <p className='viewbackendtext text-2xl ml-5 mt-5'>Backend Development</p>
          <img src={cross} alt="No" className='cross' onClick={crossSvg}/>
          <p className='ml-5 mt-5'>✔️ Building and managing server-side logic using languages like Node.js, PHP.</p>
          <p className='ml-5 mt-3'>✔️ Implementing frameworks like ExpressJs.</p>
          <p className='ml-5 mt-3'>✔️ Designing, implementing, and maintaining databases i.e, MySQL, MongoDB.</p>
          <p className='ml-5 mt-3'>✔️ Creating and integrating RESTful APIs.</p>
          <p className='ml-5 mt-3'>✔️ Connecting third-party services and APIs e.g., payment gateways.</p>

        </div>

        <div className='viewfullstack bg-white shadow-xl rounded-lg absolute z-50' ref={fullstackRef}>
          <p className='viewfullstacktext text-2xl ml-5 mt-5'>Fullstack Development</p>
          <img src={cross} alt="No" className='cross' onClick={crossSvg}/>
          <p className='ml-5 mt-5'>✔️ Designing responsive user interfaces and Developing server-side logic.</p>
          <p className='ml-5 mt-3'>✔️ Connecting frontend and backend through APIs.</p>
          <p className='ml-5 mt-3'>✔️ Building and deploying complete web applications from scratch.</p>
          <p className='ml-5 mt-3'>✔️ Connecting the frontend with backend APIs for dynamic content.</p>

        </div>
        <div id='services'>
          <p className='servicetext mt-8 font-bold text-5xl text-transparent 
                     bg-gradient-to-r from-green-500 via-purple-500
                     to-indigo-500 bg-clip-text'>Services</p> <br />
          <div className='services grid grid-cols-3 gap-12'>
            <div className='frontend bg-white shadow-xl rounded-lg'>
              <p className='frontendtext ml-5 mt-10 text-2xl text-bold' style={{ cursor: "pointer" }} onClick={viewFrontend}>Frontend Development</p>
              <p className='ml-5 mt-5 text-blue-700 font-bold' style={{ cursor: "pointer" }} onClick={viewFrontend}>View More</p> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="viewmore size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg>
              </span>
            </div>
            <div className='backend bg-white shadow-xl rounded-lg'>
              <p className='backendtext ml-5 mt-10 text-2xl text-bold' style={{ cursor: "pointer" }} onClick={viewBackend}>Backend Development</p>
              <p className='ml-5 mt-5 text-blue-700 font-bold' style={{ cursor: "pointer" }} onClick={viewBackend}>View More</p><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="viewmore size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg></span>
            </div>



            <div className='fullstack bg-white shadow-xl rounded-lg'>
              <p className='fullstacktext ml-5 mt-10 text-2xl text-bold' style={{ cursor: "pointer" }} onClick={viewFullstack}>Fullstack Development</p>
              <p className='ml-5 mt-5 text-blue-700 font-bold' style={{ cursor: "pointer" }} onClick={viewFullstack}>View More</p><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="viewmore size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg></span>
            </div>

          </div> <br />
        </div> <br /><br />
        
        <div className="footer" id='contact'>
          <p className='text-center text-5xl pt-5 footername'>Haseeb Salman Khan</p>
          <p className='text-center mt-2 footerdetail'>I am a passionate and skilled full-stack <br /> developer specializing in the MERN stack and  <br /> machine learning. With expertise in building <br /> scalable web applications.</p> <br /><br />
          <div className='flex icons'>
          <img src={fb} alt="No" className='fb' onClick={email} style={{cursor:"pointer"}}/>
          <img src={ln} alt="No" className='ln' onClick={linkdin} style={{cursor:"pointer"}}/>
          <img src={wa} alt="No" className='wa' onClick={whatsapp} style={{cursor:"pointer"}}/>
          <img src={git} alt="No" className='git' onClick={github} style={{cursor:"pointer"}}/>
          </div> <br /><br />

          <div className="flex footerBtn">
          {/* <img src={Logo} alt="Error" className='logo ml-10 mt-2 mb-2' /> */}
          <div>
            
            <a href='#about' className='aboutfooter px-2 group relative inline-block overflow-hidden border border-black focus:outline-none focus:ring'>  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-black"
  ></span>

  <span
    className="relative text-black transition-colors group-hover:text-white"
  >
    About
  </span>
</a>
<a href='#skills' className='skillsfooter px-2 group relative inline-block overflow-hidden border border-black focus:outline-none focus:ring'>  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-black"
  ></span>

  <span
    className="relative text-black transition-colors group-hover:text-white"
  >
    Skills
  </span>
</a>
<a href='#projects' className='projectsfooter px-2 group relative inline-block overflow-hidden border border-black focus:outline-none focus:ring'>  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-black"
  ></span>

  <span
    className="relative text-black transition-colors group-hover:text-white"
  >
    Projects
  </span>
</a>
<a href='#services' className='servicesfooter px-2 group relative inline-block overflow-hidden border border-black focus:outline-none focus:ring'>  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-black"
  ></span>

  <span
    className="relative text-black transition-colors group-hover:text-white"
  >
    Services
  </span>
</a>

          </div>
        </div>
</div>
</div>


    </>
  )
}