import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
              JobQuest is a pioneering job finder platform developed by Zidio Development, 
              a leader in innovative web solutions. At JobQuest, we are committed to
              transforming the job search experience, making it more efficient, intuitive, 
              and personalized for job seekers and employers alike.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        
        <h2 className='text-2xl text-blue-600 font-bold mb-5'>Our Mission</h2>

        Our mission is to bridge the gap between talent and opportunity. We understand that finding the right job can be a challenging journey, and we aim to simplify this process by providing a comprehensive platform where job seekers can discover opportunities that align with their skills, interests, and career goals. For employers, we strive to offer a seamless and effective way to connect with qualified candidates who can contribute to their organization’s success.

        <h2 className='text-2xl text-blue-600 font-bold mb-5 mt-5'>What We Offer</h2>

        <div>
          <h3 className="text-xl font-semibold">Intuitive Search and Matching :</h3>
          <p className="pl-4 text-gray-700 leading-tight mt-2 mb-2">
            JobQuest leverages advanced algorithms to match job seekers with positions that best fit their profiles. Our smart search functionality ensures that users can find the most relevant opportunities with ease.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">User-Friendly Interface :</h3>
          <p className="pl-4 text-gray-700 leading-tight mt-2 mb-2">
            Designed with the user in mind, JobQuest features an intuitive interface that makes navigating through job listings, creating profiles, and applying for positions a hassle-free experience.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Personalized Job Recommendations :</h3>
          <p className="pl-4 text-gray-700 leading-tight mt-2 mb-2">
            By analyzing user preferences and job history, JobQuest provides personalized job recommendations, ensuring that each user receives suggestions tailored to their career aspirations.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Comprehensive Employer Profiles :</h3>
          <p className="pl-4 text-gray-700 leading-tight mt-2 mb-2">
            Employers can create detailed profiles, showcasing their company culture, values, and benefits.
          </p>
        </div>
      </div>
        
    </div>
  );
};

export default About;
