import HomePage from './pages/homePage';
import UseCallbackPage from './pages/useCallbackPage';
import UseContextPage from './pages/useContextPage';
import UseMemoPage from './pages/useMemoPage';
import UseReducerPage from './pages/useReducerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from './context/UserContext';

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
		<UserContext.Provider value={{ name: 'John', id: 'John01' }}>
			<BrowserRouter>
				{/* Header */}
				<HeaderStyle>
					<Link to={'./homePage'}>HomePage</Link>
					<Link to={'./useContextPage'}>useContext</Link>
					<Link to={'./useCallbackPage'}>useCallback</Link>
					<Link to={'./useMemoPage'}>useMemo</Link>
					<Link to={'./useReducerPage'}>useReducer</Link>
				</HeaderStyle>

				{/* Routes */}
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="/homePage" element={<HomePage />} />
					<Route path="/useContextPage" element={<UseContextPage />} />
					<Route path="/useCallbackPage" element={<UseCallbackPage />} />
					<Route path="/useMemoPage" element={<UseMemoPage />} />
					<Route path="/useReducerPage" element={<UseReducerPage />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}
export default App;
