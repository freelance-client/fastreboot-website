import React from 'react'

import { BiTask } from "react-icons/bi";
import { PiChalkboardTeacher } from "react-icons/pi";
import {  FaWhatsapp } from "react-icons/fa";
const PersonalMentor = () => {
  return (
    <>
        {/* personal mentor */}

      <div className='container mx-auto pt-5  bg-gray-200'>
        <h1 className='text-3xl font-extrabold text-center text-gray-600'>Personal Mentor</h1>
        <p className=' font-bold mt-5 text-center text-base sm:text-xl '>നിങ്ങളുടെ വളർച്ചക്കായി, നിങ്ങളുടെകൂടെ ഒരു
          <br />MENTOR...
          താങ്ങായ്, വഴികാട്ടിയായ്
        </p>
        <div className='grid grid-cols-1  py-8 pr-5 sm:pr-24  gap-8 justify-items-start '>
          <div className='grid grid-cols-2 items-center justify-items-center '>
            <div className=' w-24 h-24 flex justify-center items-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-200'>
              <span>
                <PiChalkboardTeacher className=' h-16 w-16' />
              </span>
            </div>
            <h1 className=' text-xs sm:text-base font-semibold '>നിങ്ങളുടെ കൂടെ നിന്ന് നിങ്ങളെ സപ്പോർട്ട് ചെയ്യാൻ
              നിങ്ങൾക്ക് ഒരു <b> "പേഴ്സണൽ മെന്റർ"</b> ഉണ്ടാകുന്നതാണ്</h1>
          </div>

          {/* whatsapp */}

          <div className='grid grid-cols-2 items-center justify-items-center '>
            <div className=' w-24 h-24 flex justify-center items-center rounded-3xl bg-gradient-to-br from-purple-500 to-teal-500'>
              <span>
                <FaWhatsapp className=' h-16 w-16' />
              </span>
            </div>
            <h1 className=' text-xs sm:text-base font-semibold '>ദിവസവും രാവിലെ 8 മുതൽ രാത്രി 8 വരെയുള്ള
              ഏതൊരു സമയത്തും നിങ്ങൾക്ക് മെന്ററെ ആവശ്യാനുസരണം <b>Whatsapp</b> through കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
            </h1>
          </div>

          {/* routine */}

          <div className='grid grid-cols-2 items-center justify-items-center  '>
            <div className=' w-24 h-24 flex justify-center items-center rounded-3xl bg-gradient-to-br from-purple-700 to-cyan-300'>
              <span>
                <BiTask className=' h-16 w-16' />

              </span>
            </div>
            <h1 className=' text-xs sm:text-base font-semibold '>ദിവസവും അവർ നിങ്ങളെ WhatsApp through connect
              ചെയ്ത് നിങ്ങളിൽ ഒരു <b>Routine</b> Set ചെയ്തെടുക്കുകയും
              അവ Daily യഥാക്രമം നിങ്ങൾ ചെയ്യുന്നുണ്ടെന്ന് ഉറപ്പ്
              വരുത്തുകയും ചെയ്യുന്നു.</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default PersonalMentor
