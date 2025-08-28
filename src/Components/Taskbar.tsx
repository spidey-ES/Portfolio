import windowsicon from '../assets/icons8-windows-48.png';
import linkedinicon from '../assets/icons8-linkedin-48.png';
import githubicon from '../assets/icons8-github-logo-50.png';
import chromeicon from '../assets/icons8-chrome-48.png';
import { useEffect, useState } from 'react';

type totalFuncs = {
  onOpenStartBtn: (val: boolean) => void;
  onOpenLinkedIn: (val: boolean) => void;
  onOpenGitHUb: (val: boolean) => void;
  onOpenChromebtn: (val: boolean) => void;
};
const Taskbar = ({
  onOpenStartBtn,
  onOpenLinkedIn,
  onOpenGitHUb,
  onOpenChromebtn,
}: totalFuncs) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);
  return (
    <div className='fixed bottom-0 bg-gradient-to-r from-red-500 via-black shadow via-60%  to-red-400 w-full h-[35px] flex  flex-row justify-center '>
      <div className='flex flex-row justify-center items-center gap-2'>
        <img
          src={windowsicon}
          className='h-[30px]'
          onClick={() => {
            onOpenStartBtn(true);
          }}
        />
        <input
          type='search'
          placeholder='search'
          className='border border-solid border-white h-[25px] text-white text-xs  rounded-lg w-[150px] placeholder-white placeholder:text-xs p-2 placeholder:mb-[2px] placeholder:p-2 text-center outline:none'
        />
        <img
          src={linkedinicon}
          className='h-[30px]'
          onClick={() => {
            onOpenGitHUb(true);
          }}
        />
        <img
          src={githubicon}
          className='h-[30px]'
          onClick={() => {
            onOpenLinkedIn(true);
          }}
        />
        <img
          src={chromeicon}
          className='h-[30px]'
          onClick={() => {
            onOpenChromebtn(true);
          }}
        />
      </div>
      <div className='flex flex-row justify-end fixed right-3'>
        <p className='text-white text-[11px]  font-bold'>
          {currentDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
          <br></br>
          {currentDate.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};
export default Taskbar;
