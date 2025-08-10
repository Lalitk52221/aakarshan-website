import { accessibilityFeatures } from '@/lib/data'
import { RootState, setTheme } from '@/store/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function AccessibilityPage() {
  const theme = useSelector((state:RootState)=>state.theme.mode)
  const dispatch = useDispatch();
  // Light/dark mode toggle handler
  const handleChangeMode = () => {
    if (theme === "dark") {
      dispatch(setTheme('light'));
      if (typeof window !== 'undefined') {
        document.documentElement.classList.remove('dark');
      }
    } else {
      dispatch(setTheme('dark'));
      if (typeof window !== 'undefined') {
        document.documentElement.classList.add('dark');
      }
    }
  };
 
  return (
    <div className={`p-8  ${theme==="dark"?"bg-gray-800":"bg-blue-100"} rounded-lg w-96 z-50`}>
      <h2 className={`text-2xl font-bold mb-4 ${theme==="dark"?"text-gray-100": "text-gray-900"}`}>Accessibility Features</h2>
      <p className={`${theme==="dark"?"text-gray-300":"text-gray-700"}`}>
        Our platform is designed with accessibility in mind, ensuring that all users can benefit from our courses.
      </p>
      {/* Cards  */}
      <div className="grid grid-cols-2 gap-2 mt-4 ">
        {/* Light Mode Card */}
        <div
          className={` ${theme==="dark"?"bg-gray-700":"bg-blue-400"} p-4 rounded-lg mb-4 items-center justify-center flex flex-col cursor-pointer ${theme==="dark"?"hover:bg-gray-600":"hover:bg-blue-300"} transition-colors`}
          onClick={handleChangeMode}
        >
          <h3 className="text-6xl font-semibold mb-2">{theme==="light"?"🌞":"🌙"}</h3>
          <p className={` ${theme==="dark"?"text-gray-300":"text-gray-900"} text-center`}>{theme==="light"?"Light Mode":"Dark Mode"}</p>
        </div>
        {/* Other accessibility features */}
        {accessibilityFeatures.map((features, index) => (
          <div key={index} className={` ${theme==="dark"?"bg-gray-700":"bg-blue-400"} p-4 rounded-lg mb-4 items-center justify-center flex flex-col cursor-pointer ${theme==="dark"?"hover:bg-gray-600":"hover:bg-blue-300"} transition-colors`}>
            <h3 className="text-6xl font-semibold mb-2">{features.icon}</h3>
            <p className={` ${theme==="dark"?"text-gray-300":"text-gray-900"} text-center`}>{features.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
