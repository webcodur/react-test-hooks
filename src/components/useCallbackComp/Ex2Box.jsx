import { useState, useCallback, useEffect } from 'react';

const Box = ({ createBoxStyle }) => {
	const [style, setStyle] = useState({});

	useEffect(() => {
		console.log('박스 키우기');
		setStyle(createBoxStyle());
	}, [createBoxStyle]);

	return <div style={style}>BOX</div>;
};

export default Box;
