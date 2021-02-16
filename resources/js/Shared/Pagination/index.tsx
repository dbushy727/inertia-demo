import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import { Paginator } from './style';
import { PaginationPropsType } from './types';

export default ({ links }: PaginationPropsType) => (
	<Paginator>
		{links.map(link =>
			link.active || !link.url
				? <span
					key={link.label}
					dangerouslySetInnerHTML={{__html: link.label}}
				/>
				: <InertiaLink
					key={link.label}
					href={link.url}
					dangerouslySetInnerHTML={{__html: link.label}}
				/>

		)}
	</Paginator>
);
