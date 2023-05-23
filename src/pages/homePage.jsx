import { Link } from 'react-router-dom';
import styled from 'styled-components';

const aTagStyle = {
	textDecoration: 'none',
	color: 'black',
};

const Green = styled.div`
	color: 'green';
`;

const HomePage = () => {
	return (
		<Green>
			Green
			<br />
			<Link style={aTagStyle} to={'./'}>
				HomePage
			</Link>
			<br />
			<Link style={aTagStyle} to={'./useCallbackPage'}>
				useCallbackPage
			</Link>
			<br />
			<Link style={aTagStyle} to={'./useMemoPage'}>
				useMemoPage
			</Link>
			<br />
			<Link style={aTagStyle} to={'./useContextPage'}>
				useContextPage
			</Link>
			<br />
			<Link style={aTagStyle} to={'./useReducerPage'}>
				useReducerPage
			</Link>
			<br />
			<Link style={aTagStyle} to={'./usePromisePage'}>
				usePromisePage
			</Link>
			<br />
		</Green>
	);
};

export default HomePage;
