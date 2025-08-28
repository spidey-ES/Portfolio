import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import './window.css';

type windowsType = {
  content: ReactNode;
  closeIt: (id: null) => void;
};
type stateit = boolean;

const Windows = ({ content, closeIt }: windowsType) => {
  const [loadIt, setLoadIt] = useState<stateit>(false);
  useEffect(() => {
    setTimeout(() => setLoadIt(true), 3000);
  }, []);

  const loader = () => (
    <div className='flex flex-row justify-center items-center h-[100vh]'>
      <RingLoader color='#e419abff' />
    </div>
  );

  return (
    <div className='fadeit absolute top-10 left-20 bg-black shadow-md border p-2 h-[80vh] w-[90vw] rounded-md overflow-auto'>
      <div className='flex flex-row justify-end fixed  top-0 right-2'>
        <button
          className='text-white   h-[20px] w-[17px] flex justify-center items-center hover:bg-red-600  '
          onClick={() => {
            closeIt(null);
          }}>
          x
        </button>
      </div>
      {loadIt != true ? loader() : <div className='fadeit'>{content}</div>}
    </div>
  );
};
export default Windows;
