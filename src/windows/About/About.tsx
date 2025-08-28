import profile from '../../assets/Profile-img.jpg';
import CountUp from 'react-countup';
import './About.css';
import TextType from '../../ReactBits/typeWrite';

const About = () => {
  return (
    <div
      id='about'
      className='flex flex-col items-center justify-center mx-[130px] my-[60px]'>
      {/* Title Section */}
      <div className='relative'>
        <h1 className='px-[30px] text-[60px] font-medium text-[#DF8908]'>
          <TextType
            text={'About me'}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter='|'
          />
        </h1>
        {/* <img
          src={theme_pattern}
          alt='theme-pattern'
          className='absolute bottom-0 right-0 -z-10'
        /> */}
        b
      </div>

      {/* Bio Section */}
      <div className='flex flex-col md:flex-row items-center gap-[40px]'>
        <div className='hidden md:block'>
          <img
            src={profile}
            alt='profile'
            height='350px'
            width='300px'
            className='rounded-full'
          />
        </div>

        <div className='flex flex-col items-start p-5 rounded-xl shadow-lg max-w-[600px] font-[Poppins]'>
          <div className='mb-5'>
            <p className='text-white text-[16px] leading-relaxed'>
              I'm Satabish, an aspiring techie and first-year student @ NIAT. I
              love building, breaking, and learning everything tech. Currently
              diving into Next.js and React with a focus on TypeScript and
              JavaScript. I’ve got a strong base in HTML, CSS, JavaScript,
              Python, and TypeScript, helping me bridge development and
              operations. Whether it's frontend, scripting, or full websites — I
              love solving problems and learning by doing. As I grow, I'm
              excited to build real-world projects and team up with devs to make
              an impact.
            </p>
          </div>

          {/* Skills */}
          <div className='w-full mt-5'>
            <div className='mb-4'>
              <p className='text-[#afc0d1] font-semibold text-[16px] mb-1 '>
                HTML & CSS
              </p>
              <hr
                className='h-[6px] rounded-md bg-gradient-to-r from-[#df8908] via-[#4079ff] to-[#b415ff]  mb-4 grow-it-1'
                style={{ backgroundSize: '300% 100%' }}
              />
              <p className='text-[#afc0d1] font-semibold text-[16px] mb-1'>
                JavaScript
              </p>
              <hr
                className='h-[6px] rounded-md bg-gradient-to-r from-[#df8908] via-[#4079ff] to-[#b415ff] ] mb-4 grow-it-2'
                style={{ backgroundSize: '300% 100%' }}
              />
              <p className='text-[#afc0d1] font-semibold text-[16px] mb-1'>
                Reactjs
              </p>
              <hr
                className='h-[6px] rounded-md bg-gradient-to-r from-[#df8908] via-[#4079ff] to-[#b415ff]  mb-4 grow-it-3'
                style={{ backgroundSize: '300% 100%' }}
              />
              <p className='text-[#afc0d1] font-semibold text-[16px] mb-1'>
                Typescript
              </p>
              <hr
                className='h-[6px] rounded-md bg-gradient-to-r from-[#df8908] via-[#4079ff] to-[#b415ff]  mb-4 grow-it-4'
                style={{ backgroundSize: '300% 100%' }}
              />
              <p className='text-[#afc0d1] font-semibold text-[16px] mb-1'>
                MySQL
              </p>
              <hr
                className='h-[6px] rounded-md bg-gradient-to-r from-[#df8908] via-[#4079ff] to-[#b415ff]  mb-4 grow-it-5'
                style={{ backgroundSize: '300% 100%' }}
              />
              <p className='text-[#afc0d1] font-semibold text-[16px] mb-1'>
                Python
              </p>
              <hr
                className='h-[6px] rounded-md bg-gradient-to-r from-[#df8908] via-[#4079ff] to-[#b415ff]  mb-4 grow-it-6'
                style={{ backgroundSize: '300% 100%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className='flex flex-col md:flex-row justify-between w-full mt-10 gap-10'>
        {[
          { count: 4, label: 'Certificates' },
          { count: 5, label: 'Real-world projects completed' },
          { count: 10, label: 'Attended Podcasts hosted by NxtWave' },
          { count: 4, label: 'Workshops' },
        ].map((item, idx) => (
          <div
            key={idx}
            className='flex flex-col items-center transition-transform duration-300 hover:scale-110'>
            <h1 className='text-[40px] font-semibold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>
              <p>
                <CountUp
                  start={0}
                  end={item.count}
                  duration={12}
                  separator=','
                  useEasing={false}
                  enableScrollSpy={true}
                  scrollSpyDelay={2}
                  startOnMount={false}
                />
                {'+'}
              </p>
            </h1>
            <p className='text-[#afc0d1]'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
