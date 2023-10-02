/* import Link from 'next/link'; */
import Image from 'next/image'

function Header() {
  return (
    <>
    <div className="navbar bg-gray-800">
      
      {/* タイトル */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-white">タイトル</a>
      </div>

      {/* ベルマーク */}  
      <button className="btn btn-ghost btn-circle">
        <div className="indicator text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>

      {/* アイコンマーク */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image alt="icon_mark" width="20" height="20" src="/icons/account_circle_white_24dp.svg"></Image>
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
    </> 
  );
}

export default Header;