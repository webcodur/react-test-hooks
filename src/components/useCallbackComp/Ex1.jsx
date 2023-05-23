import { useState, useCallback, useEffect } from 'react';

const Ex1 = () => {
	const [str, setStr] = useState('');
	const [txt, setTxt] = useState('');

	const printValCb = useCallback(() => {
		setTxt(`cb value : ${str}`);
	}, [str]);

	const printValNoDep = useCallback(() => {
		setTxt(`cb NoDep value : ${str}`);
	}, []);

	const printVal = () => {
		setTxt(`df value : ${str}`);
	};

	useEffect(() => {
		console.log('Cb func rendered');
	}, [printValCb]);

	useEffect(() => {
		console.log('Cb NoDep func rendered');
	}, [printValNoDep]);

	useEffect(() => {
		console.log('default func rendered');
	}, [printVal]);

	return (
		<div style={{ border: '1px solid black', width: '230px' }}>
			<input value={str} onChange={(e) => setStr(e.target.value)} />
			<button onClick={printValCb}>printValCb</button>
			<br />
			<button onClick={printValNoDep}>printValNoDep</button>
			<br />
			<button onClick={printVal}>printVal</button>
			<br />
			{txt}
			<br />
		</div>
	);
};

export default Ex1;
