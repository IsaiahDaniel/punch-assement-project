import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Person from "../assets/icons/person.svg";
import Search from "../assets/icons/search.svg";

import StripLinesIcon from "../assets/icons/Union.svg";
import SkillsIcon from "../assets/icons/skills.svg";
import CategoryIcon from "../assets/icons/category.svg";
import ExploreIcon from "../assets/icons/explore-icon.svg";
import GrooveLogo from "../assets/images/groove-logo.png";

import GrooveOne from "../assets/icons/groove-btn-1.svg";
import Groovetwo from "../assets/icons/groove-btn-2.svg";

import GrooveLogoLarge from "../assets/images/groove-large-logo.svg";
import SliceOneIcon from "../assets/icons/slice-1.svg";


import VideoTagIcon from "../assets/icons/video-tag-icon.svg";

import JasonImage from "../assets/images/jason.png";
import PersonRounded from "../assets/images/portrait-charming.png";

import RoundedTimesOne from "../assets/images/rounded-times-1.png";
import RoundedTimesTwo from "../assets/images/rounded-times-2.png";

import JourneyImgOne from "../assets/images/journey-img-1.png";
import JourneyImgTwo from "../assets/images/journey-img-2.png";
import JourneyImgThree from "../assets/images/journey-img-3.png";

import SliderOne from "../assets/images/slider-1.png";

import { COURSES, IT_CARD_DATA, TABS, TabType, VideoTABS } from '../constants/app.constants';
import Card from '../components/Card';
import Footer from '../components/Footer';
import ImageSlider from '../components/Slider';

const Landing = () => {

  const [selectedTab, setSelectedTab] = useState<TabType>("IT & Development");

  return (
    <main>

      <section className='wrapper'>
        <Navbar />


        <section className='flex-col-center text-center mt-20 w-[65%] mx-auto pb-10'>
          <div className="flex items-center text-center text-5xl">
            <h1>Finding the right fit.</h1>
            <img src={Person} />
            <h1>has</h1>
          </div>
          <h1 className='text-5xl'>never been easier.</h1>

          <div className='w-[70%] mt-5'>
            <p>
              With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.
            </p>
          </div>

          <div className='flex items-center mt-5 w-[70%]'>
            <input type="text" className='border py-[15px] w-full px-4 outline-none' />
            <button className='bg-[#FFBE2E] p-5 rounded-xl -ml-[20px]'>
              <img src={Search} alt="" />
            </button>
          </div>


          <div className="bg-[#F8F8F8] p-5 mt-10 w-[100%] mx-auto rounded-md">
            {TABS.map(({ text, id }) => (
              <span
                key={id}
                className={`px-5 ${selectedTab == text && "bg-[#C7F4C2] p-2 font-semibold rounded-md"} cursor-pointer`}
                onClick={() => setSelectedTab(text)}
              >
                {text}
              </span>
            ))}

            <div className="grid grid-cols-3">
              {selectedTab == "IT & Development" && COURSES.map(course => (
                <p key={course.id} className='py-4'>{course.text}</p>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section className='my-6'>
        <img src={StripLinesIcon} />
      </section>

      <section className='bg-[#F6F6F6] py-20'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold'>Your one-stop marketplace for finding <br /> the talent your business needs.</h2>
        </div>

        <div className='flex-between wrapper mt-16'>
          <div className='w-1/2'>
            <h2>Find Dev and IT professionals to scale your business.</h2>
            <div className='flex space-x-5 mt-10'>
              <div className="flex items-center">
                <img src={SkillsIcon} className='mr-3' />
                <p>989 Skills</p>
              </div>
              <div className="flex items-center">
                <img src={CategoryIcon} className='mr-3' />
                <p>45 Sub-Categories</p>
              </div>
            </div>
          </div>

          <div className='w-1/2'>
            <h2>IT & Development</h2>
            <div className="flex items-end justify-end">
              {IT_CARD_DATA.map((item, index) => (
                <Card key={index}>
                  <div className="flex-col-center text-center">
                    <img src={item.icon} />
                    <p className='text-xs'>{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className='flex justify-between wrapper mt-16'>
          <div className='w-1/2'>
            <h2>Explore Creative individuals with a keen eye for detail.</h2>
            <div className='flex space-x-5 mt-10'>
              <div className="flex items-center">
                <img src={SkillsIcon} className='mr-3' />
                <p>989 Skills</p>
              </div>

              <div className="flex items-center">
                <img src={CategoryIcon} className='mr-3' />
                <p>45 Sub-Categories</p>
              </div>

            </div>
            <div className="flex items-center mt-5">
              <img src={CategoryIcon} className='mr-3' />
              <p>45 Sub-Categories</p>
            </div>

            <div className='mt-10 flex items-center'>
              <img src={ExploreIcon} className='mr-4' />
              <p className="text-dark font-medium">Explore More</p>
            </div>
          </div>

          <div className='w-1/2'>
            <h2>Design & Creative</h2>
            <div className="flex items-end justify-end">
              {IT_CARD_DATA.map((item, index) => (
                <Card key={index}>
                  <div className="flex-col-center text-center">
                    <img src={item.icon} />
                    <p className='text-xs'>{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className='mt-10'> <span className='font-bold'>30 more</span> to explore</p>
          </div>
        </div>

      </section>

      <section className='bg-dark py-20'>
        <div className="wrapper">
          <div className="flex items-center">
            <div className='text-white mr-20 flex-1'>
              <h1 className='text-5xl'>How it worked</h1>
              <div className='flex items-center'>
                <h1 className='text-5xl'>For Jason</h1>
                <img src={JasonImage} alt="Jason" className='rounded-full w-10 h-10 mx-4' />
                <h1 className='text-5xl'>at</h1>
              </div>
              <img src={GrooveLogo} className='w-40 mt-2' />

              <h3 className='mt-5'>Zwilt enabled us to deliver on time and they’ve <br /> been heavy hitters in our corner since.</h3>
              <div className="flex items-center mt-5 space-x-5">
                <img src={GrooveOne} />
                <img src={GrooveOne} />
              </div>
            </div>

            <div className='flex-1'>
              <div className='flex items-center'>
                <img src={GrooveLogoLarge} alt="" className='mr-5' />
                <div className='mb-5'>
                  <h3 className='text-white text-2xl'>Jason Makki</h3>
                  <p className='text-[#C6C4C4]'>Engineer at GROOVE</p>
                  <p className='text-[#C6C4C4]'>
                    San Francisco
                  </p>
                </div>
              </div>
              <p className='text-[#C6C4C4] mt-5'>
                Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-0'>
        <img src={SliceOneIcon} />
      </section>

      <section className='mt-20 py-20'>
        <div className="wrapper">
          <h1 className='text-3xl font-bold'>How we ensure you’re in good hands.</h1>

          <p className='text-[#1E1515]'>
            With our comprehensive screening process, we hand-pick highly <br /> skilled candidates so you can onboard them in a matter of days.
          </p>

          <div className="flex justify-between">
            <div className='w-1/2 mr-16'>
              {VideoTABS.map(video => (
                <div className='border border-[#F0F0F0] p-2 flex items-center my-3 cursor-pointer'>
                  <img src={VideoTagIcon} className='mr-3' />
                  <p><span className='font-bold'>{video.step}: </span>{video.text}</p>
                </div>
              ))}
            </div>

            <div className='w-1/2'>
              <img src={PersonRounded} className='w-[150px] h-[150px] ml-auto' />

              <div className='flex items-center'>
                <div className='bg-[#8BA4FD] px-3 py-5 rounded-md space-y-6'>
                  <img src={RoundedTimesOne} />
                  <img src={RoundedTimesTwo} />
                  <img src={RoundedTimesOne} />
                  <img src={RoundedTimesOne} />
                  <img src={RoundedTimesOne} />
                </div>

                <div className='space-y-8 mt-3 ml-5'>
                  <p>Tell us something about yourself</p>
                  <p className='text-[#202229]'>Give a short brief about your experience</p>
                  <p>Give a short brief about your experience</p>
                  <p>How to manage SOP of customers care?</p>
                  <p>Tell us something about yourself</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section className='py-20'>
        <div className="wrapper">
          <h2 className='text-center text-5xl font-bold mb-3'>Start your journey today.</h2>
        </div>

        <div className="flex-col-center cursor-pointer">
          <img src={JourneyImgOne} />
          <img src={JourneyImgTwo} />
          <img src={JourneyImgThree} />
        </div>

      </section>

      <section className='py-20 wrapper'>
        <div className="flex-between">
          <div className='w-1/2'>
            <h2 className='text-4xl font-bold'>Why choose Zwilt?</h2>
            <p>
              We take complex hiring processes - and simplify them. <br /> Connecting you to the world’s  highly qualified talent pool.
            </p>
          </div>

          <div className='w-1/2'>
            <ImageSlider />
          </div>
          

        </div>
      </section>

      <section className='py-20 bg-[#F3F3F3] pb-64'>
        <h2 className='text-4xl text-center font-bold'>Frequently asked questions</h2>

        <div className='divide-y border-t border-t-[#D6D6D6] mt-10'>
          <div className="flex items-center">
            <h2 className='border-r border-r-[#D6D6D6] p-5 px-14'>General</h2>
            <p className='text-center px-5 w-full'>I want to work part-time, is that possible</p>
          </div>
          <div>
            <p className='text-center p-5 px-5 w-full'>How long are the average projects?</p>
          </div>
          <div>
            <p className='text-center p-5 px-5 w-full'>How does the payment works?</p>
          </div>
          <div className="flex items-center">
            <h2 className='border-r border-r-[#D6D6D6] p-5 px-14'>General</h2>
            <h2 className='border-r border-r-[#D6D6D6] p-5 px-14 whitespace-nowrap'>Joining Process</h2>
            <p className='text-center px-5 w-full'>I want to work part-time, is that possible</p>
          </div>
          <div>
            <p className='text-center p-5 px-5 w-full'>How long are the average projects?</p>
          </div>
          <div>
            <p className='text-center p-5 px-5 w-full border-b border-b-[#D6D6D6]'>How does the payment works?</p>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}

export default Landing;