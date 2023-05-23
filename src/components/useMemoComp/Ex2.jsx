import { useState, useEffect, useMemo } from 'react';

const Ex2 = () => {
	const [number, setNumber] = useState(0);
	const [isKorea, setIsKorea] = useState(true);
	const location = isKorea ? '한국' : '외국';

	const locationObj = useMemo(() => {
		return {
			country: isKorea ? '한국' : '외국',
		};
	}, [isKorea]);

	useEffect(() => {
		console.log('useEffect 호출');
	}, [locationObj]);

	return (
		<>
			<div>
				<h2>하루에 몇끼 먹어요?</h2>
				<input
					type="number"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
				<h2>어느 나라에 있어요?</h2>
				<p>나라 (location) : {location}</p>
				<p>나라 (locationObj) : {locationObj.country}</p>
				<button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
			</div>
		</>
	);
};

export default Ex2;
