import React from "react";
import abtImg from '../../assets/Img/mh-hero.jpg'
import team from '../../assets/Img/team.jpg'
import vision from '../../assets/Img/vision.jpg'
import approach from '../../assets/Img/approach.jpg'


export default function MyApp() {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6 ">
        <div className="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center">
          <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
            <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="money">
                  <img src={team} alt="" className=" rounded-full object-cover " />
                </div>
              <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">About Us</h1>
              <p className="sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600">FASTREBOOT is a Kerala-based personal mentorship platform that aims to empower individuals by providing personalized mentorship to help them achieve their life goals and get better in life. With a team of highly qualified and experienced mentors, we will cater to clients from diverse backgrounds and age groups.</p>
              <div className="md:mt-14 mt-12 flex flex-col items-center">
                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="money">
                <img src={approach} alt="" className=" rounded-full object-cover" />
                </div>
                <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">Our Approach</h1>
                <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">At Fastreboot, we understand that each person's journey towards personal transformation is unique and deserving of empathy, understanding, and dedicated support. Our mission is to prioritize these values in our mentorship approach, ensuring that every individual receives the personalized attention they need to thrive.</p>
              </div>
              <div className="mt-7 flex flex-col items-center">
                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="phone">
                <img src={vision} alt="" className=" rounded-full object-cover " />
                </div>
                <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">Our Vision</h1>
                <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">Our vision at Fastreboot is to empower people to unlock their full potential and live their best lives. We firmly believe that everyone possesses the capacity to lead a fulfilling and meaningful life, but obstacles such as self-doubt, fear of change, and limiting beliefs often hinder progress. Through our personal transformation programs, we provide the necessary resources and support to help individuals overcome these challenges and realize their goals.</p>
              </div>
            </div>
          </div>
          <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
            <img src={abtImg} alt="image of about page" className="h-full rounded-md object-cover object-center md:block hidden" />
            <img src={abtImg} alt="image of aboutpage" className="h-auto w-auto md:hidden block" />
          </div>
        </div>
        

        {/* quotes */}
        
        <figure className=" container  mx-auto text-center py-5 px-5">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic  text-gray-900 font-extrabold dark:text-gray-600">
              "It is not always easy, but it is the most rewarding journey you will ever take."
            </p>
          </blockquote>

        </figure>
      </div>

      <section>
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div>
            <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
              Meet Our Team
              <span className="block text-gray-600">Diverse. Skilled. United.</span>
            </h1>
            <p className="mt-4 text-base font-medium text-gray-500">
              A group of passionate individuals working together to innovate and excel
              in our industry.
            </p>
            <ul
              role="list"
              className="mt-12 mx-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-12"
            >
              <li>
                <div className="flex flex-col gap-4">
                  <img
                    className="object-cover rounded-full size-16 lg:size-20"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-black">
                      Michael Andreuzza
                    </h3>
                    <p className="text-base text-gray-500">
                      Creator of Windstatic.com
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-4">
                  <img
                    className="object-cover rounded-full size-16 lg:size-20"
                    src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1999&q=80"
                    alt=""
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-black">
                      Juan Echanove
                    </h3>
                    <p className="text-base text-gray-500">Founder of Pay Oneeer</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-4">
                  <img
                    className="object-cover rounded-full size-16 lg:size-20"
                    src="https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1639&q=80"
                    alt=""
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-black">
                      Elona Muska
                    </h3>
                    <p className="text-base text-gray-500">Founder of Fesla</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-4">
                  <img
                    className="object-cover rounded-full size-16 lg:size-20"
                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                    alt=""
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-black">
                      Messina Lionel
                    </h3>
                    <p className="text-base text-gray-500">COO at Pff Inc</p>
                  </div>
                </div>
              </li>
              {/* More humans... */}
            </ul>
          </div>
        </div>
      </section>

    </div>


  );
}
