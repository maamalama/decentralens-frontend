import Image from 'next/image';
import { Inter } from 'next/font/google';
import { SignInWithLens } from '@lens-protocol/widgets-react';
import { setCookie } from 'cookies-next';

export default function Home() {
  async function onSignIn(tokens: any, profile: any) {
    console.log('tokens: ', tokens);
    console.log('profile: ', profile);
    setCookie('lensProfile', JSON.stringify(profile), {
      maxAge: 60 * 60 * 24 * 7,
    });
    window.location.href = '/profile';
  }
  return (
    <main className={'main min-h-screen p-24'}>
      <div className={'container'}>
        <div className={'flex flex-col items-center justify-center'}>
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
            <div className={'text-3xl font-bold text-center text-white pt-2'}>
              All in one profile explorer
            </div>
          </div>
          <div className={'pt-2'}>
            {/* @ts-ignore */}
            <SignInWithLens theme='green' size={'large'} onSignIn={onSignIn} />
          </div>
        </div>
        {/* <form>
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
              id='default-search'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-black focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search Mockups, Logos...'
              required
            />
            <button
              type='submit'
              className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Search
            </button>
          </div>
        </form> */}
      </div>
    </main>
  );
}
