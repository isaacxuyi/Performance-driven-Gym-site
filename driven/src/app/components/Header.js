// driven/src/app/components/Header.js
import logo from '../Images/Vector.svg'
import Image from 'next/image';


export default function Header() {
  return (
    <>
  <div className="w-full p-5 flex justify-between items-center header bg-neutral-100">
          <div className="flex items-center">
            <Image height={40} width={40} src={logo} alt='logo' />
            <p className='ml-1 font-bold'>PrimalTraining</p>
          </div>
          <nav>
            <ol className='flex gap-5 items-center'>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>
                <button
                  style={{ background: '#808DFD', color: 'black' }}
                  className="py-2 px-6 rounded-lg  transition-colors duration-200 cursor-pointer hover:brightness-90"
                >
                  RESERVE YOUR SPOT
                </button>
              </li>
            </ol>
          </nav>
        </div>
    </>
  );
}
