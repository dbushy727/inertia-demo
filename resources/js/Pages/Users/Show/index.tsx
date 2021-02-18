import React from 'react';
import { Heading, Text, Pane, majorScale } from 'evergreen-ui';
import Layout from '../../../Shared/Layout';
import { UserType } from 'Shared/ResourceTypes/user';
import { sample } from 'lodash'

export default ({ user }: { user: UserType }) => {
  return (
  	<Layout>
  		<Pane
  			display="flex"
  			alignItems="center"
  			justifyContent="center"
  			border="none"
  			padding={majorScale(3)}
        marginTop={majorScale(2)}
  		>
        <Pane>
      		<Heading size={900}>
            {user.name}
          </Heading>
            <Text>{sample(user.quotes)}</Text>
        </Pane>
        <img src={user.image} />
  		</Pane>
  	</Layout>
  );
};