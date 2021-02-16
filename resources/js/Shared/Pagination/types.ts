export type PaginationPropsType = {
	links: LinkType[],
};

export type LinkType = {
	active: boolean,
	label: string,
	url: string,
};