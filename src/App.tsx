import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import image1 from './images/messi.png'
import image2 from './images/nhl1.png' 

import jjk1 from './images/jjk1.png'
import jjk2 from './images/jjk2.png'
import jjk3 from './images/jjk3.png'

import nhl1 from './images/nhl1.png'
import nhl2 from './images/nhl2.png'
import nhl3 from './images/nhl3.png'
import nhl4 from './images/nhl4.png' 
import nhl5 from './images/nhl5.png'

import cosco1 from './images/cosco1.png'

import ProjectInfo from './components/projectInfo'

export default function App() {
    return (
        <div>
            <a href='https://github.com/sw2003' className=' h-6 md:h-8 xl:h-9 bg-black flex justify-center gap-1 items-center'>
                <AiFillGithub className='text-white'></AiFillGithub>
                <div className=' text-white text-sm leading-tight'>Github</div>
            </a>

            <div className='h-2'></div>
            <div className='w-full h-4'>
                <div className='w-5/6 mx-auto flex justify-center gap-4'>
                    <div className='text-sm px-2 md:px-8 bg-red-500 text-white rounded flex items-center gap-1'>
                        sjw18@sfu.ca
                        <AiOutlineMail></AiOutlineMail>
                    </div>
                    <div className='text-sm px-2 md:px-8 bg-blue-500 text-white rounded'>
                        <a href="https://www.linkedin.com/in/sam-wen-185b69274" className='flex items-center gap-1'>
                            LinkedIn
                            <AiFillLinkedin></AiFillLinkedin>
                        </a>
                    </div>
                </div>
            </div>

            <div className=' h-4'></div>
            <div className=' text-xl border-b-2 pl-4 md:pl-8 lg:pl-12 xl:pl-14'>Projects</div>
            <div className='h-2'></div>


            {/* Jjkgram */}
            <ProjectInfo 
                name='Jjkgram' 
                imgArray={[jjk1, jjk2, jjk3]}
                dependencyArray={['React', 'Typescript', 'NodeJs', 'DynamoDB', 'Tailwindcss', 'Aws Lambda']}
                link='https://jjkgram.vercel.app/'
            ></ProjectInfo>

            <div className='h-14'></div>

            {/*Nhl TeamEdits 23*/}
            <ProjectInfo 
                name='NHL TEAMEDITS23' 
                imgArray={[nhl5, nhl3, nhl4, nhl1, nhl2]} 
                dependencyArray={['React', 'Javascript', 'Python', 'Express', 'Flask', 'BeautifulSoup4', 'Tailwindcss']}
                link='https://team-build23.vercel.app/'   
            ></ProjectInfo> 

            <div className='h-14'></div>

            {/* Personal Website Project */}
            <ProjectInfo name='sw2003.github.io' imgArray={[]} dependencyArray={['React', 'Typescript', 'Webpack', 'Babel', 'Tailwindcss']} link=''></ProjectInfo>         


            <div className='h-14'></div>

            {/* cbookingreport.com */}
            <ProjectInfo name='cbookingreport.com' imgArray={[cosco1]} dependencyArray={['React', 'Typescript', 'Express', 'xlsxPopulate', 'multer']} link='https://cbookingreport.com/'></ProjectInfo>      

            <div className='h-14'></div>

            <div className='w-full h-36 bg-slate-950'>
                <div className='h-4'></div>
                <div className='flex-col md:flex-row md:flex md:justify-center md:gap-8 text-white ml-4'>
                    <div className='text-white'>Contact</div>    
                    <a className='block' href="https://www.linkedin.com/in/sam-wen-185b69274">LinkedIn</a>
                    <a href="href='https://github.com/sw2003'">Github</a>
                </div>    
            </div>   
        </div>
    )
}


