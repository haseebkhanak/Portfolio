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
import OrbitingCircles from './magicui.jsx/orbiting';
import { TypingAnimation } from './magicui.jsx/typeanimate';
import { BorderBeam } from './magicui.jsx/borderbeam';
import { LetterPullup } from './magicui.jsx/letterpullup';
import { NeonGradientCard } from './magicui.jsx/neon';
import classNames from 'classnames';
import { AnimatedList } from './magicui.jsx/animatelist';
import { useRef,useEffect,useState } from 'react';

export default function MainPage(className){
  const [count,setCount]=useState(0)
  const images = [cal, forecast, medi, medirec, mindfinder, playersprediction];
  const desc=['A user-friendly GPA Calculator built using HTML, CSS, and JavaScript, allowing students to easily calculate their Grade Point Average (GPA).',
    'A web-based Weather Forecast application built using HTML, CSS, and JavaScript, utilizing a Weather API to provide accurate and up-to-date weather information.',
    'Developed a webapp in which patients can connect with doctors for real-time consultations. This include chat, video call, voice call, appointment scheduling, searching profile and many more.',
  'Developed a system that leverages machine learning classifiers to predict diseases based on symptoms and recommend appropriate medicines.',
'A user-friendly Quiz Web App built using both frontend and backend technologies allowing users to test their knowledge and skills in various subjects.',
'Trained a model that will predict the performance of cricket players based on various factors using regression techniques.The model is trained on historical data, learning the patterns and correlations between input features and the performance outcomes.']
  
    const tech=['I used frontend technologies i.e, HTML, CSS, JavaScript and Bootstrap and in backend I used MySQLi and PHP',
      'I used frontend technologies i.e, HTML, CSS, JavaScript and Bootstrap and Weather API OpenWeatherMap',
      'Web Socket is used for chat and WEBRTC is used for online streaming moreover MERN Stack has been impleted (React,NodeJs,ExpressJs,MongoDb,REST Apis)',
      'MERN stack implemented for web app integrating both frontend and backend with database and for model python is used and flask is used on backend',
      'For frontend HTML, CSS, JavaScript bootstrap and for backend Php and MySQLi have been implemented',
      'Python is used for ML and Regressors are used to train a model']
  const next=()=>{

      if (count >= images.length-1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }

  }

  const previous=()=>{

    if (images[count]===cal) {
      setCount(5);
    } else {
      setCount(count - 1);
    }

}
  const bodyRef=useRef('')
  useEffect(()=>{
    bodyRef.current.style.backgroundColor="aliceblue"
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
          <figure
            className={classNames(
              "relative mx-auto min-h-fit w-full max-w-[200px] cursor-pointer overflow-hidden rounded-2xl p-4",
              "transition-all duration-200 ease-in-out hover:scale-[103%]",
              "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
          >
            <div>

                <div className='w-[350] shadow-2xl relative rounded-lg'>
                <BorderBeam size={250} duration={5} />
                  <img src={img} alt="No" />
                  </div>

            </div>
          </figure>
        );
      };


    // const Icons = {
    //     // gitHub: () => (
    //     //   <svg width="50" height="50" viewBox="0 0 438.549 438.549">
    //     //     <path
    //     //       fill="currentColor"
    //     //       d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
    //     //     />
    //     //   </svg>
    //     // ),
    //     ex: () => (
    //         <img
    //         src={ex}  
    //         alt="js"
    //         width="50"
    //         height="50"
    //       />
    //     ),
    //     js: () => (
    //         <img
    //         src={js}  
    //         alt="js"
    //         width="50"
    //         height="50"
    //       />
    //     ),
    //     react: () => (
    //         <img
    //           src={react}  
    //           alt="react"
    //           width="50"
    //           height="50"
    //         />
    //       ),
          
    //     html: () => (
    //         <img
    //         src={html}  
    //         alt="html"
    //         width="50"
    //         height="50"
    //       />
    //     ),
    //     mondb: () => (
    //         <img
    //         src={mondb}  
    //         alt="mondb"
    //         width="50"
    //         height="50"
    //       />
    //     ),
    //   };
    return(

        <>
<div ref={bodyRef} className="circle-hesitate">


        <nav className="bg-white space-x-4 flex shadow-2xl navbar">
            <img src={Logo} alt="Error"  className='logo ml-10 mt-2 mb-2'/>
            <div className='pl-80 lg:space-x-20 lg:mt-5 sm:mt-2 items sm:space-x-10'>
            <button className='aboutbtn'>About</button>
            <button className='skillsbtn'>Skills</button>
            <button className='projectsbtn'>Projects</button>
            <button className='contactbtn'>Contact</button>
            </div>
        </nav>
        <div>
          
        </div>
        <div className="profile mt-20">
  <div className="circle-react">
    <img src={react} alt="react" />
  </div>
  </div>
  {/* <div className="circle-mondb">
    <img src={mondb} alt="mondb" />
  </div> 
  <div className="circle-js">
    <img src={js} alt="JavaScript" />
  </div> */}
{/* <div className="flex h-[500px] flex-col items-center justify-center" >
      <span>
      <img src={profile} alt="Error" style={{width:"300px",height:'300px'}}/>
      </span>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={100}
      >
        <Icons.mondb />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        // delay={10}
        radius={100}
      >
        <Icons.react />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={20}
        reverse
      >
        <Icons.js />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={180}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.html />
      </OrbitingCircles>
    </div> */}


<img src={profile} alt="Error" className='personal'/>
<div>
<div className='bg-white shadow-xl ml-20 mt-20 relative rounded-lg about'>
<BorderBeam size={250} duration={5} />
<p className='aboutmetext text-5xl font-bold ml-20 text-transparent 
                     bg-gradient-to-r from-green-500 via-purple-500
                     to-indigo-500 bg-clip-text pt-5'>About Me</p>
<p className='nametext text-2xl font-bold ml-20 text-transparent 
                     bg-gradient-to-r from-green-500 via-purple-500
                     to-indigo-500 bg-clip-text'>Haseeb Salman Khan</p>
<p className='desctext text-transparent 
                     bg-gradient-to-r from-green-500 via-purple-500
                     to-indigo-500 bg-clip-text ml-20'>Software Engineer</p>
                     <div style={{width:"400px"}} className='ml-20 pb-5'>
                        
                     <p className='detailtext'>I am a passionate and skilled full-stack <br /> developer specializing in the MERN stack and  <br /> machine learning. With expertise in building <br /> scalable web applications.</p>
                     </div>
                     <a style={{borderRadius:"10px",marginLeft:"80px"}} className='bg-blue-300 border border-blue-500 px-2 py-2' href="/Resume.pdf" download="Resume.pdf">Download Resume</a> <br /><br />
                     </div>
                     </div>

                     <div>
                     <p className='skills mt-10 font-bold text-5xl text-transparent 
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

                     <div>
                     <p className='projects mt-10 font-bold text-5xl text-transparent 
                     bg-gradient-to-r from-green-500 via-purple-500
                     to-indigo-500 bg-clip-text'>Projects</p> <br />

                     <div className='projectslides flex bg-white shadow-xl ml-20 mt-20 relative rounded-lg'>
                      <img src={images[count]} alt="no" className='images py-8'/>
                      <p className='ml-10 py-8 pr-5'> <span className='text-2xl font-bold text-transparent 
                     bg-gradient-to-r from-blue-500 via-purple-500
                     to-indigo-500 bg-clip-text'>Overview</span> <br />{desc[count]} <br /><br /><span className='text-2xl font-bold text-transparent 
                     bg-gradient-to-r from-blue-500 via-purple-500
                     to-indigo-500 bg-clip-text'>Technologies</span> <br />{tech[count]}</p>
                     </div> <br />
                     <div className='flex'>
                     <img src={prevbtn} onClick={previous} alt="" style={{width:"80px",height:"50px",marginLeft:"620px",cursor:"pointer"}}/>
                     <img src={nextbtn} onClick={next} alt="" style={{width:"80px",height:"55px",cursor:"pointer",marginLeft:"50px"}}/>
                     </div> <br /><br />
                     </div>
                     </div>

        </>
    )
}