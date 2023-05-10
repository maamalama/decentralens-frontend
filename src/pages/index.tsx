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
                <div className='flex justify-end pt-4 space-x-4 align-center'>
                  <a
                    rel='https://github.com/maamalama/decentralens-frontend'
                    href='https://github.com/maamalama/decentralens-frontend'
                    aria-label='GitHub'
                    className='p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400'
                  >
                    <svg
                      viewBox='0 0 496 512'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4 fill-current'
                    >
                      <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
                    </svg>
                  </a>

                  <a
                    rel='https://twitter.com/bokarevs'
                    href='https://twitter.com/bokarevs'
                    aria-label='Twitter'
                    className='p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400'
                  >
                    <svg
                      viewBox='0 0 512 512'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4 fill-current'
                    >
                      <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <div
                    className={
                      'font-bold text-center text-white items-center justify-center '
                    }
                  >
                    <p className='xl:text-6xl text-4xl inline-flex items-center justify-center'>
                      Decentralens
                      <span className='ml-2 bg-green-100 text-green-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'>
                        Beta
                      </span>
                    </p>
                  </div>
                  <div
                    className={'text-3xl font-bold text-center text-white pt-2'}
                  >
                    All in one profile explorer
                  </div>
                </div>
              </div>
              <form onSubmit={handleSearch}>
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
                <picture>
                  <img src={'/profile.png'} alt={'Profile'} />
                </picture>
              </div>

              <div className='pt-4 pl-4 text-white font-medium text-3xl'>
                Explore your followers' profiles
              </div>
              <div className='px-16'>
                <picture>
                  <img src={'/followers.png'} alt={'Followers'} />
                </picture>
              </div>
              <div className='pt-4 pl-4 text-white font-medium text-3xl'>
                Discover new and exciting profiles
              </div>
              <div className='px-16'>
                <picture>
                  <img src={'/recommended.png'} alt={'Recommended'} />
                </picture>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
