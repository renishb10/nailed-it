// TODO: Remove it once you go for Prisma or any ORMs

export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
};

export type Asset = {
  id: string;
  type: keyof typeof AssetType;
  user?: string; // Refers to the purchased user
};

export type Tag = {
  id: string; // Unique ID used to identify the tag after shipping.
  assetId: string; // points to the respective asset type
  status: keyof typeof TagStatus;
  user?: string; // Refers to the user who purchased or who owns the tag right now
};

export enum AssetType {
  NAILS = 'nails',
  PENDANT = 'pendant',
}

export enum SocialMediaType {
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  TIKTOK = 'tiktok',
}

export enum TagStatus {
  NEW = 'new',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export type Profile = {
  id: string;
  userId: string; // Refers to the user
  tagId: string; // Refers to the respective tag
  type: keyof typeof SocialMediaType;
  url: string; // https://instagram.com/jane
  scheme: string; // instagram://user?username="jane"
};
