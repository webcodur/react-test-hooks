import { useState, useCallback, useEffect } from 'react';
import Box from './Ex2Box';

const UseCallbackComp2 = () => {
	const [size, setSizess] = useState(100);
	const [isDark, setIsDark] = useState(false);

	const createBoxStyle = useCallback(() => {
		return {
			backgroundColor: 'red',
			width: `${size}px`,
			height: `${size}px`,
		};
	}, [size]);

	return (
		<div
			style={{
				border: '1px solid black',
				width: '230px',
				background: isDark ? 'black' : 'white',
			}}>
			<input
				type="number"
				value={size}
				onChange={(e) => setSizess(e.target.value)}
			/>
			<button onClick={() => setIsDark(!isDark)}>다크모드</button>
			<Box createBoxStyle={createBoxStyle} />
		</div>
	);
};

export default UseCallbackComp2;
