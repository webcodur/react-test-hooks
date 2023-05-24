import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Ex1 = () => {
	const { name, id } = useContext(UserContext);
	return (
		<>
			<h3>사용 결과</h3>
			<div>userName : {name}</div>
			<div>userId : {id}</div>
		</>
	);
};

export default Ex1;
