import type { folders } from '../windows/types/Types';

const DesktopIcons = ({ id, title, icon, component }: folders) => {
  return (
    <div>
      <div className='flex flex-col justify-items-start p-[3px] object-contain group '>
        <img src={icon} className='h-10 w-10 hover:bg-white/30 rounded' />
        <p className='text-[11px] pl-[5px] text-start font-medium group-hover:underline group-hover:text-white/60 '>
          {title}
        </p>
      </div>
    </div>
  );
};
export default DesktopIcons;
