import React, { useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { debounce } from 'lodash';
import { Pane, Table, ArrowDownIcon, ArrowUpIcon } from 'evergreen-ui';
import queryString from 'query-string';
import route from 'ziggy';

import Layout from 'Shared/Layout';
import Pagination from 'Shared/Pagination';
import { UserType } from 'Shared/ResourceTypes/user';

import { IndexPropsType } from './types';
import { ImageWrapper, Image, Sort } from './style';

export default ({ users: paginatedUsers }: IndexPropsType) => {
  const {
  	data: users,
  	meta: {
      links
  	}
  } = paginatedUsers;

  const searchInput = useRef<HTMLInputElement>(null);
  const currentSortDirection = queryString.parse(location.search).sortDirection as string;
  const currentSearchTerm = queryString.parse(location.search).searchTerm as string;

  const search = (searchTerm: string, sort: string|null) => {
    Inertia.get(
      // @ts-ignore
      route('users.index'),
      { searchTerm, sortDirection: sort },
      { preserveState: true}
    );
  };

  const viewUser = (user: UserType) => {
    Inertia.get(
      route('users.show', { user: user.id }),
    );
  };

  useEffect(() => {
    if (currentSearchTerm && searchInput?.current?.value === "") {
      searchInput.current.value = currentSearchTerm;
    }
  }, []);


  const toggleSort = () => {
    let sort: string|null = null;

    if (!currentSortDirection) {
      sort = 'asc';
    }

    if (currentSortDirection === 'asc') {
      sort = 'desc';
    }

    search(currentSearchTerm, sort);
  };

  const sortIcon = currentSortDirection === 'asc'
      ? <ArrowUpIcon size={12} />
      : <ArrowDownIcon size={12} />;

  return (
  	<Layout>
        <Pane>
          <ImageWrapper>
            <Image>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png" />
              <span>Character Search</span>
            </Image>
          </ImageWrapper>
        </Pane>
        <Pane>
          <Table>
            <Table.Head>
              <Table.SearchHeaderCell
                ref={searchInput}
                onChange={debounce((input) =>search(input, currentSortDirection), 200)}
                placeholder="Search..."
              />
              <Table.TextHeaderCell onClick={toggleSort}>
                <Sort>Name {currentSortDirection && sortIcon}</Sort>
              </Table.TextHeaderCell>
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
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
    		  <Pagination links={links}/>
        </Pane>
  	</Layout>
  );
};