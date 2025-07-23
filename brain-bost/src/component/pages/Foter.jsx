import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";






const Foter = () => {
  return (
    <div className='mt-10 bg-gray-950 text-white'>
      <div className='grid md:grid-cols-4 gap-5 p-2'>

        <div>
            <div className='flex gap-2 p-3'>
            <span className=" text-2xl"><FaGraduationCap /></span>
            <p>QuizMaster</p>
            </div>
            <div className='pt-3'>
                <p>Empowering learners worldwide with interactive quizzes and comprehensive learning resources.</p>
            </div>
        </div>

        <div>
        <div className='p-3'>
            <p>Quick Links</p>
           <div>
            <p>Home</p>
             <p>Subject</p>
            <p>Leaderboard</p>
            <p>Blog</p>
           </div>
        </div>
        </div>

        <div>
    <div className='p-3'>
        <p>Support</p>
        <div>
        <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
        </div>
           
    </div>
        </div>

        <div>
            <div className='p-3'>
                <p>Connect</p>
                <div>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Instagram</p>
                </div>
          
            </div>
        </div>
      </div>
      <hr className='m-4'/>
      <div className='flex justify-between p-2'>
        <div>
            <p>2024 QuizMaster. All rights reserved.</p>
        </div>
        <div className='flex gap-5'>
            <a href=""><FaFacebook /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaLinkedin /></a>
            <a href=""><FaSquareInstagram /></a>
        </div>
      </div>
    </div>
  )
}

export default Foter
