import React from 'react';
import { Text, Pane, majorScale, ArrowLeftIcon } from 'evergreen-ui';
import Layout from '../../../Shared/Layout';
import { UserType } from 'Shared/ResourceTypes/user';
import { sample } from 'lodash'
import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy';
import { Name } from './style';

export default ({ user }: { user: UserType }) => {
  return (
  	<Layout>
      <InertiaLink href={route('users.index')}><ArrowLeftIcon /></InertiaLink>
  		<Pane
  			display="flex"
  			alignItems="center"
  			justifyContent="center"
        flexWrap="wrap-reverse"
  			border="none"
  			padding={majorScale(3)}
        marginTop={majorScale(2)}
  		>
        <Pane>
      		<Name size={900}>
            {user.name}
          </Name>
          <Text>{sample(user.quotes)}</Text>
        </Pane>
        <img src={user.image} />
  		</Pane>
  	</Layout>
  );
};