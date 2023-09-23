import React from "react";
import whiteStar from "../assets/star.png";
import purpleStar from "../assets/star pu.png";
import grayStar from "../assets/star-light-grey.png";
import pinkStar from "../assets/sata gra.png";
import theBigIdea from "../assets/the big idea 1.png";
import arrow from "../assets/arrow.png";
import womanSitting from "../assets/7450159 1.png";
import manStanding from "../assets/8046554 1.png";
import circle from "../assets/Ellipse 2.svg";

const Introduction = () => {
  return (
    <>
      <div className='relative flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-10 '>
        <img
          className='star star3 top-[20%] left-[10%] md:top-[40%] md:left-[10%]'
          src={pinkStar}
          alt='pink star'
        />
        <img
          className='star star1 top-[40%] left-[80%] md:top-[40%] md:left-[90%]'
          src={purpleStar}
          alt='purple star'
        />
        <div className='w-[60%] md:w-[50%] lg:w-[40%] relative'>
          <img
            className='w-full'
            src={theBigIdea}
            alt='a big light bulb indicating a big idea '
          />
          <img
            className='absolute  w-[20%] md:bottom-0 -bottom-10 right-[40%] md:right-[-10%]'
            src={arrow}
            alt='arrow'
          />
          <p className='text-slate-50 absolute w-[20%] h-[10%] text-center left-[40%] top-[50%] translate-x[-50%] translate-y[-50%]'>
            The big idea
          </p>
        </div>

        <div className='w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left'>
          <h3 className='pb-1 font-black text-2xl md:text-3xl'>
            Introduction to getlinked
          </h3>

          <h3 className='pb-3 pink font-black text-2xl md:text-3xl'>
            tech Hackathon 1.0
          </h3>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div className='relative rules-reg text-slate-50 flex flex-col-reverse md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-10 '>
        <img
          className='star star3 top-[20%] left-[10%] md:top-[20%] md:left-[25%]'
          src={grayStar}
          alt='gray star'
        />
        <img
          className='star star1 top-[49%] left-[80%] md:top-[60%] md:left-[47%]'
          src={whiteStar}
          alt='white star'
        />
        <div className='w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left'>
          <h3 className=' font-black text-2xl md:text-3xl'>Rules and</h3>
          <h3 className='pb-3 pink font-black text-2xl md:text-3xl'>
            Guidelines
          </h3>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className='w-[80%] md:w-[60%]  relative'>
          <img
            className='relative z-10'
            src={womanSitting}
            alt='woman sitting on a chair'
          />
          <img
            className='absolute top-[12%] right-[15%] z-0 hidden md:block'
            src={circle}
            alt='circle filled with purple and blue gradient '
          />
        </div>
      </div>
      <div className='relative flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-5 lg:px-36 md:px-10 py-10 z-10'>
        <img
          className='star star1 top-[90%] left-[80%] md:top-[83%] md:left-[47%]'
          src={whiteStar}
          alt='white star'
        />
        <img
          className='star star5 top-[15%] left-[50%] md:top-[42%] md:left-[33%]'
          src={grayStar}
          alt='gray star'
        />
        <img
          className='star star3 top-[1%] left-[50%] md:top-0 md:left-[20%]'
          src={purpleStar}
          alt='purple star'
        />
        <div className='w-[60%]  relative '>
          <img
            className='z-[2] relative'
            src={manStanding}
            alt='a man holding a file and standing beside a woman '
          />
          <img
            className='absolute -top-8 left-10 z-[0] hidden md:block'
            src={circle}
            alt='circle filled with purple and blue gradient '
          />
        </div>
        <div className='w-[70%] lg:w-[50%] text-slate-50 text-center md:text-left'>
          <h3 className='pb-1 font-black text-2xl md:text-3xl'>
            Judging Criteria
          </h3>
          <h3 className='pb-3 pink font-black text-2xl md:text-3xl'>
            Key attributes
          </h3>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Innovation and Creativity: </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features
          </p>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Functionality: </span>Assess how well
            the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Impact and Relevance: </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Technical Complexity: </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className='pb-5 text-xs'>
            <span className='light-purple'>Adherence to Hackathon Rules: </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <button className='btn'>Read More</button>
        </div>
      </div>
    </>
  );
};

export default Introduction;
