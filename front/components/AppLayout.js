import Link from 'next/link';
import Logo from '../public/Logo.svg';
import LoginModal from './LoginModal';
import { useState } from 'react';

const AppLayout = ({ children, props }) => {
  const [isLogin, setIsLogin] = useState(false);

  const onLogOut = () => {
    setIsLogin(false);
  };
  return (
    <>
      {/* Nav */}
      <nav className="bg-white/100 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* Menu Left */}
            <div className="flex space-x-4">
              <div>
                <Link href="/">
                  <a className="flex items-center py-5 px-11 text-neutral-900 font-bold hover:text-neutral-500">
                    <Logo />
                    <span className="pl-2">HOME</span>
                  </a>
                </Link>
              </div>
            </div>

            {/* Menu Right */}
            <div className="hidden md:flex items-center space-x-1 px-10">
              <div className="py-5 px-3">
                <LoginModal
                  {...props}
                  isLogin={isLogin}
                  setIsLogIn={setIsLogin}
                  onLogOut={onLogOut}
                />
              </div>{' '}
              {/* modal */}
              <div>
                {isLogin ? (
                  <div>
                    <Link href="/write">
                      <button className="bg-blue-200 rounded text-black font-bold py-2 px-3 mr-4">
                        새 글 작성
                      </button>
                    </Link>
                    <button
                      onClick={onLogOut}
                      className="bg-red-300 hover:bg-red-400 rounded transition duration-300 font-bold py-2 px-3"
                    >
                      LOGOUT
                    </button>
                  </div>
                ) : (
                  <Link href="/signup">
                    <a className="py-2 px-3 bg-sky-300 hover:bg-sky-400 text-black hover:text-yellow-800 rounded transition duration-300 font-bold">
                      SIGN UP
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="flex mt-8">
        <div className="flex-1">
          <div className="flex flex-wrap justify-center">{children}</div>
        </div>
      </main>
    </>
  );
};

export default AppLayout;
