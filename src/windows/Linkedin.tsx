type closefunc = {
  onCloseLinkedInBtn: (val: null) => void;
};
const Linkedin = ({ onCloseLinkedInBtn }: closefunc) => {
  return (
    <div className='absolute top-10 left-20 bg-black shadow-md border p-2 h-[80vh] w-[90vw] rounded-md'>
      <div className='flex flex-row justify-end'>
        <button
          className='text-white   h-[20px] w-[15px] flex justify-center items-center hover:bg-red-600'
          onClick={() => {
            onCloseLinkedInBtn(null);
          }}>
          x
        </button>
      </div>
      <h1 className='text-white'>Welcome to fight club</h1>
    </div>
  );
};
export default Linkedin;
