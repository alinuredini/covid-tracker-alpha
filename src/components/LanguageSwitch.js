import { ReactComponent } from '*.svg';
import React from 'react';
import { useState } from 'react';

class LanguageSwitch extends ReactComponent {
let ButtonPresser = () => {
  const [isOn, setIsOn] = useState(false)
  return (
    <div><button type="button" aria-checked={isOn} onClick={() => setIsOn(!isOn)}
    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
    Language
    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
  <div class="`${isOn ? 'absolute' : 'hidden'} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
  <div class="py-1" role="menu" aria-orientation="vertical" aria-hidden="true" aria-labelledby="options-menu">
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">English</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Македонски</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Shqip</a>
  </div>
</div>
</div>
  )

}
}
export default LanguageSwitch