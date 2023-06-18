import React, { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { UserContext } from '../userContext.js';


const Topbar = () => {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setUserId(null);

    navigate('/login');
  }

  return (
    <div className=' px-5 flex justify-end items-center h-12 sticky top-0 z-50'>
      <div className='flex gap-3 items-center z-50'>

          <Menu as="div" className="relative inline-block text-left z-50">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 z-50">
                <div className='bg-black rounded-full h-7 w-7 '></div>
              </Menu.Button>
            </div>
            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="p-1 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      View Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={handleLogout}>
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          
      </div>
    </div>
  )
}

export default Topbar