import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
`;

export const Image = styled.div`
	display: flex;
    flex-direction: column;
    text-align: right;

	& > img {
		width: 25rem;
	}

	& > span {
		font-family: 'simpsons';
	}
`;

export const Sort = styled.span`
  cursor:pointer;
`;
