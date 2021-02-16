import React from 'react';
import { Heading, Text, Paragraph, Pane, majorScale } from 'evergreen-ui';
import Layout from '../../../Shared/Layout';
import { UserType } from 'Shared/ResourceTypes/user';

export default ({ user }: { user: UserType }) => {
  return (
  	<Layout>
  		<Heading size={900}>
        {user.name} <Text color="muted">{user.email}</Text>
      </Heading>
  		<Pane
  			display="flex"
  			alignItems="center"
  			justifyContent="center"
  			border="default"
  			padding={majorScale(3)}
        marginTop={majorScale(2)}
  		>
      		<Paragraph>{user.bio}</Paragraph>
  		</Pane>
  	</Layout>
  );
};