import Link from "next/link";
import Logo from '../public/Logo.svg';

const AppLayout = () => {
  return (
    <>
      {/* Nav */}
      <nav className="bg-slate-50 border-b border-gray-500">
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
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/profile">
                  <a className="py-5 px-3 text-neutral-900 hover:text-neutral-500 font-bold">
                    PROFILE
                  </a>
                </Link>
              </div>
            </div>

            <div className="z-30 flex items-center pr-24">
              <input type="text" placeholder="검색" className="border border-gray-500 bg-gray-300 pr-12 mt-1" />
            </div>

            {/* Menu Right */}
            <div className="hidden md:flex items-center space-x-1 px-10">
              <div className="py-5 px-3">LOGIN</div> {/* modal로넣기 */}
              <div>
                <Link href="/signup">
                  <a className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
                    SIGN UP
                  </a>
                </Link>
              </div>
              
              {/* Mobile */}
              <div>
              
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          1
        </div>
        <div className="col-span-8">
          2
        </div>
        <div className="col-span-2">
          3
        </div>
      </main>
    </>
  );
}

export default AppLayout
