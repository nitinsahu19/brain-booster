import React from "react";
import Button from "../atoms/Button";
import { CiUser, CiStopwatch } from "react-icons/ci";
import { HiOutlineSave } from "react-icons/hi";
// import logo from '../image/logo.png'
// import Cardimg from "../atoms/Cardimg";

const BlogSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8 p-4 md:p-8 lg:p-12">
        <div className="lg:col-span-3">
          <img
            // src={logo}
            alt="error"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        <div className="lg:col-span-3 flex flex-col gap-4 justify-center">
          <div className="flex flex-wrap gap-2">
            <Button label="Technology" />
            <Button label="Healthcare" />
            <Button label="AI" />
          </div>

          <h1 className="font-bold text-2xl md:text-3xl leading-snug">
            The Future of Artificial Intelligence in Modern Healthcare
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <CiUser className="text-lg" /> Dr. Sarah Mitchell
            </span>
            <span className="flex items-center gap-1">
              <CiStopwatch className="text-lg" /> October 15, 2023
            </span>
          </div>

          <p className="text-sm md:text-base text-gray-600">
            Explore how artificial intelligence is revolutionizing healthcare
            delivery, from diagnostic tools to personalized treatment plans.
            Discover the latest breakthroughs and their impact on patient care.
          </p>

          <div className="flex items-center gap-2 text-blue-500 hover:underline cursor-pointer w-fit">
            <p className="font-medium">Read More</p>
            <HiOutlineSave className="text-lg mt-0.5" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold px-15">Latest Articles</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <div className="bg-white shadow rounded-xl p-6">
            {/* <Cardimg src="https://thumbs.dreamstime.com/b/earth-hands-environment-concept-usa-elements-ima-image-furnished-nasa-66834955.jpg" /> */}

            <div className="flex gap-10 mt-3">
              <Button label="Design" />
              <Button label="Sustainability" />
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-4">
                Sustainable Design Practices for Digital Products
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-5">
              <span className="flex items-center gap-1">
                <CiUser className="text-lg" />
                Dr. Sarah Mitchell
              </span>
              <span className="flex items-center gap-1">
                <CiStopwatch className="text-lg" />
                October 15, 2023
              </span>
            </div>
            <div>
              <p className="opacity-60 mt-6 text-sm">
                Learn how sustainable design principles can be applied to
                digital products to create more environmentally conscious
                solutions.
              </p>
            </div>

            <div className="flex items-center gap-2 text-blue-500 hover:underline cursor-pointer mt-3">
              <p>Read More</p>
              <HiOutlineSave className="text-lg mt-0.5" />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            {/* <Cardimg src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" /> */}

            <div className="flex gap-10 mt-3">
              <Button label="Business" />
              <Button label="Remote Work" />
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-4">
                The Rise of Remote Work Culture
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-5">
              <span className="flex items-center gap-1">
                <CiUser className="text-lg" />
                Dr. Sarah Mitchell
              </span>
              <span className="flex items-center gap-1">
                <CiStopwatch className="text-lg" />
                October 15, 2023
              </span>
            </div>
            <div>
              <p className="opacity-60 mt-6 text-sm">
                Examining the lasting impact of remote work on company culture
                and the future of workplace dynamics.
              </p>
            </div>

            <div className="flex items-center gap-2 text-blue-500 hover:underline cursor-pointer mt-3">
              <p>Read More</p>
              <HiOutlineSave className="text-lg mt-0.5" />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            {/* <Cardimg src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" /> */}

            <div className="flex gap-10 mt-3">
              <Button label="Lifestyle" />
              <Button label="Wellness" />
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-4">
                Mindfulness in the Digital Age
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-5">
              <span className="flex items-center gap-1">
                <CiUser className="text-lg" />
                Dr. Sarah Mitchell
              </span>
              <span className="flex items-center gap-1">
                <CiStopwatch className="text-lg" />
                October 15, 2023
              </span>
            </div>
            <div>
              <p className="opacity-60 mt-6 text-sm">
                Discovering ways to maintain mindfulness in our increasingly
                connected world and improve digital wellness.
              </p>
            </div>

            <div className="flex items-center gap-2 text-blue-500 hover:underline cursor-pointer mt-3">
              <p>Read More</p>
              <HiOutlineSave className="text-lg mt-0.5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
