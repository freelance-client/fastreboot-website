import React from 'react'

const Quotes = () => {
  return (
    <>
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
            Every Great Achiever is Inspired By A Great Mentor
          </p>
        </blockquote>
        {/* <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <img
            className="w-6 h-6 rounded-full"
            src="https://pbs.twimg.com/profile_images/610052066296397824/PWLTudGp_400x400.jpg"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-gray-900">
              Lailah Gifty Akita
            </cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-900">
              Author
            </cite>
          </div>
        </figcaption> */}
      </figure>
      
      {/* sitting with mentor paragraph */}

      <div className=' flex justify-center px-8 text-wrap font-semibold py-8 container mx-auto'>
        <p>തുടർച്ചയായി ഒന്നിടവിട്ട ദിവസങ്ങളിൽ നിങ്ങളുടെ
          Personal Mentor -മായി നിങ്ങൾക്ക്ഒരു sitting ഉണ്ടായിരിക്കുന്നതാണ്. നിങ്ങളെ ഓരോ alternative days ഇലും call ചെയ്ത് ഒരു Independent & Strong Mindset Build
          ചെയ്തെടുക്കാനും സഹായിക്കുന്നു. ഈപ്രോഗ്രാമിൻ്റെ ഏറ്റവും വലിയവിശേഷണവും ഇത് തന്നെയാണ്.
          നിങ്ങളുടെ പ്രശ്നങ്ങളുടെ root cause കണ്ടെത്താൻ
          അവർ നിങ്ങളെ സഹായിക്കുകയും നിങ്ങൾക്ക് അവർ
          ഒരു കരുത്താവുകയും ചെയ്യുന്നു .</p>
      </div>
    </>
  )
}

export default Quotes
