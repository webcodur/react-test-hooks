import HomePage from './pages/homePage';
import UseCallbackPage from './pages/useCallbackPage';
import UseContextPage from './pages/useContextPage';
import UseMemoPage from './pages/useMemoPage';
import UsePromisePage from './pages/usePromisePage';
import UseReducerPage from './pages/useReducerPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
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
