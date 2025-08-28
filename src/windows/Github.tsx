type closeGitHubfunc = {
  onCloseGitBtn: (val: null) => void;
};
const Github = ({ onCloseGitBtn }: closeGitHubfunc) => {
  return (
    <div className='absolute top-10 left-20 bg-black shadow-md border p-2 h-[80vh] w-[90vw] rounded-md'>
      <div className='flex flex-row justify-end'>
        <button
          className='text-white   h-[20px] w-[15px] flex justify-center items-center hover:bg-red-600'
          onClick={() => {
            onCloseGitBtn(null);
          }}>
          x
        </button>
      </div>
      <h1 className='text-white'>you cant talk about it</h1>
    </div>
  );
};
export default Github;
