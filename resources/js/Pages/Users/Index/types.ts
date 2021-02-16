import { UserType } from 'Shared/ResourceTypes/user';
import { LinkType } from 'Shared/Pagination/types';

export type IndexPropsType = {
  users: {
    data: UserType[],
    meta: {
      links: LinkType[],
    }
  }
};