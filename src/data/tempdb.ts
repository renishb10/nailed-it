import { Asset, Profile, Tag, User } from '@/types';

export const UserTable: User[] = [
  {
    id: 'clzzfpk1s00020cmj76v27igm',
    name: 'John Doe',
    email: 'johndoe@gnail.com',
    password: 'password123',
  },
  {
    id: 'clzzfpgvf00010cmjce2768tk',
    name: 'Jane Doe',
    email: 'janedoe@gnail.com',
    password: 'password123',
  },
];

export const ProfileTable: Profile[] = [
  {
    id: 'cm00vsljy00000clahopzh36t',
    userId: 'clzzfpgvf00010cmjce2768tk',
    tagId: 'cm00vu65000000cjqgu8sfcpg',
    type: 'INSTAGRAM',
    url: 'https://instagram.com/janedoe', // maintain both url and custom scheme
    scheme: 'instagram://user?username=janedoe', // maintain both url and custom scheme
  },
  {
    id: 'cm00vsoz400010claa47whkhv',
    userId: 'clzzfpgvf00010cmjce2768tk',
    tagId: 'clzzfv0tm000a0cl32pocaktr',
    type: 'TWITTER',
    url: 'https://x.com/janedoe', // maintain both url and custom scheme
    scheme: 'twitter://user?username=janedoe', // maintain both url and custom scheme
  },
];

export const AssetTable: Asset[] = [
  {
    id: 'clzzflpdt000008l132uo4pxs',
    type: 'NAILS',
    user: 'clzzfpk1s00020cmj76v27igm',
  },
  {
    id: 'clzzfpb5w00000cmj5o419nqq',
    type: 'NAILS',
    user: 'clzzfpgvf00010cmjce2768tk',
  },
];

export const TagTable: Tag[] = [
  {
    id: 'clzzfuws600090cl367aigjoh',
    assetId: 'clzzflpdt000008l132uo4pxs',
    status: 'NEW',
    user: 'clzzfpk1s00020cmj76v27igm', // John got one, but didnt scan NFC yet
  },
  {
    id: 'cm01047we00040cl9b7gif8al',
    assetId: 'clzzflpdt000008l132uo4pxs',
    status: 'INACTIVE',
    user: 'clzzfpk1s00020cmj76v27igm',
  },
  {
    id: 'clzzfv0tm000a0cl32pocaktr',
    assetId: 'clzzfpb5w00000cmj5o419nqq',
    status: 'ACTIVE',
    user: 'clzzfpgvf00010cmjce2768tk', // Jane has active one
  },
  {
    id: 'cm00vu65000000cjqgu8sfcpg',
    assetId: 'clzzfpb5w00000cmj5o419nqq',
    status: 'ACTIVE',
    user: 'clzzfpgvf00010cmjce2768tk', // Jane has another one too
  },
  {
    id: 'cm00xw1q600020cjzd1x4hnsv',
    assetId: 'clzzfpb5w00000cmj5o419nqq',
    status: 'NEW',
    user: 'clzzfpgvf00010cmjce2768tk', // Jane has active one
  },
];
