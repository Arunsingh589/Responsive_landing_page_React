import React, { useState, useEffect } from 'react';

const ProgressBarComponent = () => {
  const [activeButton, setActiveButton] = useState('stockouts');
  const [progress, setProgress] = useState(0); // Start progress from 0

  const handleButtonClick = (button) => {
    setActiveButton(button);
    switch (button) {
      case 'stockouts':
        animateProgress(85); // Animate progress to 85%
        break;
      case 'cashRecovery':
        animateProgress(30); // Dummy value for demonstration
        break;
      case 'revenue':
        animateProgress(50); // Dummy value for demonstration
        break;
      default:
        break;
    }
  };

  const animateProgress = (targetProgress) => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress >= targetProgress) {
        clearInterval(interval);
      } else {
        currentProgress += 1;
        setProgress(currentProgress);
      }
    }, 10); // Adjust the interval for smoother animation
  };

  useEffect(() => {
    handleButtonClick('stockouts'); // Start with 'stockouts' selected
  }, []);

  return (
    <div className="flex h-screen bg-black  text-white">
      <div className="flex flex-col items-start p-4 relative w-1/4">
        <div className="relative h-64 flex items-center">
          <div className="absolute left-[14px] top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500"></div>
          <div
            className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center"
            style={{ bottom: `${progress}%`, transform: `translateY(${100 - progress}%)` }}
          >
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <div className="ml-16 flex flex-col justify-center h-full">
          {/* <div className="ml-8 flex flex-col mt-8"> */}
          <button
            className={`mb-4 p-2 rounded-full ${activeButton === 'stockouts' ? 'border-2 border-pink-500' : ''}`}
            onClick={() => handleButtonClick('stockouts')}
          >
            STOCKOUTS
          </button>
          <button
            className={`mb-4 p-2 rounded-full ${activeButton === 'cashRecovery' ? 'border-2 border-pink-500' : ''}`}
            onClick={() => handleButtonClick('cashRecovery')}
          >
            CASH RECOVERY CYCLE
          </button>
          <button
            className={`mb-4 p-2 rounded-full ${activeButton === 'revenue' ? 'border-2 border-pink-500' : ''}`}
            onClick={() => handleButtonClick('revenue')}
          >
            REVENUE
          </button>
        </div>
          {/* </div> */}
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center mr-20 mt-10 md:mt-5 md:mr-48">
        <div className="text-4xl md:text-9xl font-bold text-purple-500">
          {progress}%
        </div>
        <div className="md:text-2xl mt-2">
          {activeButton === 'stockouts' && 'Reduction in out-of-stock'}
          {activeButton === 'cashRecovery' && 'Reduction in cash recovery time'}
          {activeButton === 'revenue' && 'Growth in revenue'}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;











