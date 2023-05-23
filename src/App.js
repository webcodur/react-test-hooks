import HomePage from './pages/homePage';
import UseCallbackPage from './pages/useCallbackPage';
import UseContextPage from './pages/useContextPage';
import UseMemoPage from './pages/useMemoPage';
import UsePromisePage from './pages/usePromisePage';
import UseReducerPage from './pages/useReducerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: aliceblue;
	a {
		text-decoration: none;
		color: black;
		width: 200px;
	}
	a:hover {
		color: Red;
	}
`;

function App() {
	return (
		<BrowserRouter>
			{/* Header */}
			<HeaderStyle>
				<Link to={'./'}>HomePage</Link>
				<Link to={'./useCallbackPage'}>useCallback</Link>
				<Link to={'./useMemoPage'}>useMemo</Link>
				<Link to={'./useContextPage'}>useContext</Link>
				<Link to={'./useReducerPage'}>useReducer</Link>
				<Link to={'./usePromisePage'}>usePromise</Link>
			</HeaderStyle>
			{/* Routes */}
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/useCallbackPage" element={<UseCallbackPage />} />
				<Route path="/useContextPage" element={<UseContextPage />} />
				<Route path="/useMemoPage" element={<UseMemoPage />} />
				<Route path="/usePromisePage" element={<UsePromisePage />} />
				<Route path="/useReducerPage" element={<UseReducerPage />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
