import React, { useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { debounce } from 'lodash';
import { Table } from 'evergreen-ui';
import queryString from 'query-string';

import Layout from 'Shared/Layout';
import Pagination from 'Shared/Pagination';
import { UserType } from 'Shared/ResourceTypes/user';

import { IndexPropsType } from './types';

export default ({ users: paginatedUsers }: IndexPropsType) => {
  const {
  	data: users,
  	meta: {
      links
  	}
  } = paginatedUsers;

  const searchInput = useRef<HTMLInputElement>(null);

  const search = (searchTerm: string) => {
    Inertia.get(
      // @ts-ignore
      route('users.index'),
      { searchTerm },
      { preserveState: true}
    );
  };

  const viewUser = (user: UserType) => {
    Inertia.get(
      // @ts-ignore
      route('users.show', { user: user.id }),
    );
  };

  useEffect(() => {
    const { searchTerm } = queryString.parse(location.search);

    if (searchTerm && searchInput?.current?.value === "") {
      searchInput.current.value = searchTerm as string;
    }
  }, []);

  return (
  	<Layout>
      <Table>
        <Table.Head>
          <Table.SearchHeaderCell
            ref={searchInput}
            onChange={debounce(search, 200)}
            placeholder="Search..."
          />
          <Table.TextHeaderCell>Name</Table.TextHeaderCell>
          <Table.TextHeaderCell>Email</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body>
          {users.map(user => (
            <Table.Row
              key={user.id}
              isSelectable
              onSelect={() => viewUser(user)}
            >
              <Table.TextCell isNumber>
                {user.id}
              </Table.TextCell>
              <Table.TextCell>{user.name}</Table.TextCell>
              <Table.TextCell>{user.email}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
		  <Pagination links={links}/>
  	</Layout>
  );
};