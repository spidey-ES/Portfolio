type props = {
  onCloseBtn: (val: null) => void;
};
const Startwindow = ({ onCloseBtn }: props) => {
  return (
    <div className='flex flex-row justify-center'>
      <div className='absolute top-10   bg-stone-50 shadow-md border p-2 h-[85vh] w-[40vw] rounded-md'>
        <div>
          <button onClick={() => onCloseBtn(null)}>close it</button>
        </div>
      </div>
    </div>
  );
};
export default Startwindow;
