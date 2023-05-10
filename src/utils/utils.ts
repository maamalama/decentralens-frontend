const ipfsGateway = 'https://lens.infura-ipfs.io';

export const getIPFSURL = (picture: any) => {
  let url = '';
  if (!picture) {
    return '/lens.jpeg';
  }
  if (picture.__typename === 'MediaSet') {
    url = picture.original.url;
  }
  if (picture.__typename === 'NftImage') {
    url = picture.uri;
  }

  if (url && url.startsWith('ipfs://')) {
    const cid = url.replace('ipfs://', '');
    return `${ipfsGateway}/ipfs/${cid}`;
  }
  return url;
};