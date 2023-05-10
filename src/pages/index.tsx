/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { SignInWithLens } from '@lens-protocol/widgets-react';
import { setCookie } from 'cookies-next';
import { useState } from 'react';
import Layout from './components/layout';

export default function Home() {
  const [profile, setProfile] = useState<string>('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    window.location.href = `/profile/${profile}`;
  };

  async function onSignIn(tokens: any, profile: any) {
    console.log('tokens: ', tokens);
    console.log('profile: ', profile);
    setCookie('lensProfile', JSON.stringify(profile), {
      maxAge: 60 * 60 * 24 * 7,
    });
    window.location.href = `/profile/${profile.handle}`;
  }
  return (
    <>
      <Layout title='Home' description={'Decentralens'}>
        <main className='main min-h-screen px-6 sm:px-12 md:px-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='flex flex-col gap-[24px]'>
              <div className='p-6 sm:p-12 dark:text-gray-100 min-w-full'>
                <div>
                  <div
                    className={
                      'text-6xl font-bold text-center text-white items-center justify-center '
                    }
                  >
                    <div className='inline-flex items-center justify-center'>
                      Decentralens
                      <span className='ml-2 bg-green-100 text-green-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'>
                        Beta
                      </span>
                    </div>
                  </div>
                  <div
                    className={'text-3xl font-bold text-center text-white pt-2'}
                  >
                    All in one profile explorer
                  </div>
                </div>
              </div>
              <form className='pt-4' onSubmit={handleSearch}>
                <label
                  htmlFor='default-search'
                  className='mb-2 text-sm font-medium  text-gray-900 sr-only dark:text-white'
                >
                  Search
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-gray-500 dark:text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      ></path>
                    </svg>
                  </div>
                  <input
                    type='search'
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                    id='default-search'
                    className='block w-full p-4 pl-10 text-xl text-gray-900 bg-[#171717] border border-[#fff] rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:border-[#fff]  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='0xfly.lens...'
                    required
                  />
                  <button
                    type='submit'
                    className='text-md text-white absolute right-2.5 bottom-3 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                  >
                    Search
                  </button>
                </div>
              </form>
              <div className='pt-4 pl-4 text-white font-medium text-3xl text-center'>
                Unlock the insights to your audience's behavior
                <img src={'/profile.png'} alt={'Profile'} />
              </div>

              <div className='pt-4 pl-4 text-white font-medium text-3xl'>
                Explore your followers' profiles
              </div>
              <div className='px-16'>
                <img src={'/followers.png'} alt={'Followers'} />
              </div>
              <div className='pt-4 pl-4 text-white font-medium text-3xl'>
                Discover new and exciting profiles
              </div>
              <div className='px-16'>
                <img src={'/recommended.png'} alt={'Recommended'} />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
