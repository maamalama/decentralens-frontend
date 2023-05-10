//src/components/NFTCard.js
import React from 'react';
import { UserNft } from '../../types/profile';
import Image from 'next/image';

type NFTCardProps = {
  nft: UserNft;
};

const getNFTType = (nft: UserNft) => {
  switch (nft?.chainId) {
    case 1:
      return 'Ethereum';
    case 137:
      return 'Polygon';
    default:
      return 'Unknown';
  }
};

const NFTCard = ({ nft }: NFTCardProps) => {
  return (
    <div className='max-w-lg rounded overflow-hidden shadow-lg'>
      <Image src={nft?.contentURI || ''} alt='' className='w-full' />
      <div className='px-4 py-4'>
        <div className='font-bold text-teal-600 text-xl mb-2'>
          {nft?.name || ''}
        </div>
        <ul>
          <li>
            Chain: <strong>{getNFTType(nft)}</strong>
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        <span
          className='inline-block bg-gray-200
                 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2'
        >
          Contract Address: {nft?.contractAddress || ''}
        </span>
        <div></div>
      </div>
    </div>
  );
};

export default NFTCard;
