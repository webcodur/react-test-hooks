import Ex1 from '../components/useMemoComp/Ex1';
import Ex2 from '../components/useMemoComp/Ex2';
import styled from 'styled-components';

const TextAreaUp = styled.textarea`
	width: 300px;
	margin-top: 20px;
`;

const Hr = styled.hr`
	height: 10px;
	color: red;
	background-color: gray;
	margin-top: 20px;
`;

const useMemoPage = () => {
	const text =
		'쉬운 계산기 계산 결과가 같이 늦어지는 상황 \n-> 어려운 계산에 useMemo를 사용하여 해결';

	const text2 =
		'몇끼 먹어요 수정 시 국적이 리랜더됨 \n-> 객체인 경우 useMemo 사용으로 해결';

	return (
		<>
			<h1>Ex1</h1>
			<Ex1 />
			<TextAreaUp defaultValue={text} />
			<Hr />

			<h1>Ex2</h1>
			<Ex2 />
			<TextAreaUp defaultValue={text2} />
			<Hr />
		</>
	);
};

export default useMemoPage;
