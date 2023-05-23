import { useState, useMemo } from 'react';

const hardCalculate = (number) => {
	console.log('어려운 계산');
	for (let i = 0; i < 999999999; i++) {} // 연산시간
	return number + 10000;
};

const easyCalculate = (number) => {
	console.log('쉬운 계산');
	return number + 1;
};

const Ex1 = () => {
	const [hardNumber, setHardNumber] = useState(1);
	const [easyNumber, setEasyNumber] = useState(1);

	const hardSum = useMemo(() => {
		return hardCalculate(hardNumber);
	}, [hardNumber]);

	const easySum = easyCalculate(easyNumber);

	return (
		<>
			<div>
				<h3>어려운 계산기</h3>
				<input
					type="number"
					value={hardNumber}
					onChange={(e) => setHardNumber(parseInt(e.target.value))}></input>
				<span> + 10000 = {hardSum}</span>
			</div>

			<div>
				<h3>쉬운 계산기</h3>
				<input
					type="number"
					value={easyNumber}
					onChange={(e) => setEasyNumber(parseInt(e.target.value))}></input>
				<span> + 1 = {easySum}</span>
			</div>
		</>
	);
};
export default Ex1;
