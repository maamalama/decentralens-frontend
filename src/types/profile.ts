export type InterestIntersection = {
  interest: Interest;
  count: number;
}

export type Analytics = {
  interests: InterestIntersection[];
  stats: AvgFollowerStats;
}

export type Interest = {
  name: string;
  formattedName: string;
}

export type AvgFollowerStats = {
  avgFollowers: number;
  avgFollowing: number;
  avgPosts: number;
}

export type FollowerStats = {
  totalFollowers: number;
  totalFollowing: number;
  totalPosts: number;
}

export type Follower = {
  address: string;
  name: string;
  bio: string;
  handle: string;
  interests: string[];
  profileImageUrl: string;
  stats: FollowerStats
}

export type FollowersDashboard = {
  followers: Follower[];
  count: number;
}

export type UserNft = {
  name: string;
  contractAddress: string;
  tokenId: string;
  contentURI: string;
  chainId: number;
}

export type NftDashboard = {
  nfts: UserNft[];
  count: number;
}

export type Dashboards = {
  followers: FollowersDashboard;
  interests: InterestIntersection[];
  stats: AvgFollowerStats;
  nfts: NftDashboard;
  profile: Profile
  recomended: Profile[];
}
// ------------

export type Attribute = {
  displayType: string;
  traitType: string | null;
  key: string;
  value: string;
  __typename: string;
};

export type NftImage = {
  contractAddress: string;
  tokenId: string;
  uri: string;
  chainId: number;
  verified: boolean;
  __typename: string;
};

export type ProfileStats = {
  totalFollowers: number;
  totalFollowing: number;
  totalPosts: number;
  totalComments: number;
  totalMirrors: number;
  totalPublications: number;
  totalCollects: number;
  __typename: string;
};

export type Profile = {
  id: string;
  name: string;
  bio: string;
  isDefault: boolean;
  attributes: Attribute[];
  followNftAddress: string;
  metadata: string;
  handle: string;
  picture: NftImage;
  coverPicture: null;
  ownedBy: string;
  dispatcher: null;
  stats: ProfileStats;
  followModule: null;
  __typename: string;
};

export type ProfileWithAnalytics = {
  profile: Profile;
  dashboards: Dashboards;
}