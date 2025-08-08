import { accessibilityFeatures } from '@/lib/data'
import { RootState, setTheme } from '@/store/store';
import { RootFilterQuery } from 'mongoose';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function AccessibilityPage() {
  const theme = useSelector((state:RootState)=>state.theme.mode)
  const dispatch = useDispatch();
  // Light/dark mode toggle handler
  const handleChangeMode = () => {
    if(theme ==="dark"){
      dispatch(setTheme('light'));
    }else{
      dispatch(setTheme('dark'));
    }
  };
 
  return (
    <div className='p-8 bg-gray-800 rounded-lg w-96 z-50'>
      <h2 className='text-2xl font-bold mb-4'>Accessibility Features</h2>
      <p className='text-gray-300'>
        Our platform is designed with accessibility in mind, ensuring that all users can benefit from our courses.
      </p>
      {/* Cards  */}
      <div className='grid grid-cols-2 gap-2 mt-4 '>
        {/* Light Mode Card */}
        <div
          className='bg-gray-700 p-4 rounded-lg mb-4 items-center justify-center flex flex-col cursor-pointer hover:bg-gray-600 transition-colors'
          onClick={handleChangeMode}
        >
          <h3 className='text-6xl font-semibold mb-2'>{theme==="light"?"🌞":"🌙"}</h3>
          <p className='text-gray-300 text-center'>{theme==="light"?"Light Mode":"Dark Mode"}</p>
        </div>
        
        {/* Other accessibility features */}
        {accessibilityFeatures.map((features, index) => (
          <div key={index} className='bg-gray-700 p-4 rounded-lg mb-4 items-center justify-center flex flex-col cursor-pointer hover:bg-gray-600 transition-colors'>
            <h3 className='text-6xl font-semibold mb-2'>{features.icon}</h3>
            <p className='text-gray-300 text-center'>{features.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
