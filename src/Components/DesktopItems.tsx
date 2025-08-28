import type { folders } from '../windows/types/Types';
import DesktopIcons from './DesktopIcons';
import './DesktopItems.css';
type props = {
  Folders: folders[];
  onOpen: (id: number) => void;
};
const DesktopItems = ({ Folders, onOpen }: props) => {
  return (
    <div>
      {Folders.map((each) => {
        return (
          <div  onClick={() => onOpen(each.id)} key={each.id}>
            <DesktopIcons
              id={each.id}
              title={each.title}
              icon={each.icon}
              component={each.component}
            />
          </div>
        );
      })}
    </div>
  );
};
export default DesktopItems;
