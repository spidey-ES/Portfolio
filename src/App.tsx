import DesktopItems from './Components/DesktopItems';
import Taskbar from './Components/Taskbar';
import type { folders } from './windows/types/Types';
import About from './windows/About/About';
import Contact from './windows/Contact';
import Projects from './windows/Projects';
import Skills from './windows/Skilss';
import FolderIcon from './assets/Folder.png';
import { useState } from 'react';
import Windows from './Components/window';
import Startwindow from './windows/Startwindow';
import Linkedin from './windows/Linkedin';
import Github from './windows/Github';
import Chrome from './windows/chrome';
type eitherFolders = number | null;
type eitherTaskbarItems = boolean | null;
const App = () => {
  const [showFolder, setShowFolder] = useState<eitherFolders>(null);
  const displayFolders: folders[] = [
    {
      id: 1,
      title: 'About',
      icon: `${FolderIcon}`,
      component: <About />,
    },
    {
      id: 2,
      title: 'Contact',
      icon: `${FolderIcon}`,
      component: <Contact />,
    },
    {
      id: 3,
      title: 'Projects',
      icon: `${FolderIcon}`,
      component: <Projects />,
    },
    {
      id: 4,
      title: 'Skills',
      icon: `${FolderIcon}`,
      component: <Skills />,
    },
  ];
  const [showStartbtn, SetStartbtn] = useState<eitherTaskbarItems>(null);
  const [showLinkedin, setShowLinkedin] = useState<eitherTaskbarItems>(null);
  const [showGithub, setShowGitHub] = useState<eitherTaskbarItems>(null);
  const [showChrome, setShowChrome] = useState<eitherTaskbarItems>(null);

  const filterFolder = (isthere: eitherFolders) => {
    for (const each of displayFolders) {
      if (each.id === isthere) {
        return each.component;
      }
    }
    return null;
  };

  const onOpen = (id: number): void => {
    setShowFolder(id);
  };
  const closeIt = (id: null): void => {
    setShowFolder(id);
  };
  const onOpenStartBtn = (val: boolean): void => {
    SetStartbtn(val);
  };
  const onCloseBtn = (val: null): void => {
    SetStartbtn(val);
  };
  const onOpenLinkedIn = (val: boolean): void => {
    setShowLinkedin(val);
  };
  const onCloseLinkedInBtn = (val: null): void => {
    setShowLinkedin(val);
  };
  const onOpenGitHUb = (val: boolean): void => {
    setShowGitHub(val);
  };
  const onCloseGitBtn = (val: null): void => {
    setShowGitHub(val);
  };
  const onOpenChromebtn = (val: boolean): void => {
    setShowChrome(val);
  };
  const onCloseChromeBtn = (val: null): void => {
    setShowChrome(val);
  };

  return (
    <div className='h-screen'>
      <div className='h-screen bg-[url("src/assets/batman-logo(1).jpg")] bg-cover bg-center]'>
        <div className='folders '>
          <DesktopItems Folders={displayFolders} onOpen={onOpen} />
        </div>
        <div>
          {showFolder !== null ? (
            <Windows content={filterFolder(showFolder)} closeIt={closeIt} />
          ) : null}
        </div>
        <div className='taskbar-items'>
          {showStartbtn !== null ? (
            <Startwindow onCloseBtn={onCloseBtn} />
          ) : null}
          {showLinkedin !== null ? (
            <Linkedin onCloseLinkedInBtn={onCloseLinkedInBtn} />
          ) : null}
          {showGithub !== null ? (
            <Github onCloseGitBtn={onCloseGitBtn} />
          ) : null}
          {showChrome !== null ? (
            <Chrome onCloseChromeBtn={onCloseChromeBtn} />
          ) : null}
        </div>
        <div className=' '>
          <Taskbar
            onOpenStartBtn={onOpenStartBtn}
            onOpenLinkedIn={onOpenLinkedIn}
            onOpenGitHUb={onOpenGitHUb}
            onOpenChromebtn={onOpenChromebtn}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
