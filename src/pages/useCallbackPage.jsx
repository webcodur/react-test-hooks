import Ex1 from '../components/useCallbackComp/Ex1';
import Ex2 from '../components/useCallbackComp/Ex2';

const useCallbackPage = () => {
	const text1 = `
    input 변화마다 useEffect로 
    함수의 리랜더 여부 확인...
  `;

	const text2 = `
    다크모드시 boxStyle함수가
    리랜더링되지 않게 처리
  `;

	const outerDivStyle = {
		marginTop: '30px',
		width: '235px',
		border: '1px solid black',
	};

	const textAreaStyle = {
		width: '230px',
		height: '70px',
		border: '1px solid black',
		padding: '0px',
	};

	return (
		<>
			<div style={outerDivStyle}>
				useCallback 훅 연습1
				<textarea defaultValue={text1} style={textAreaStyle}></textarea>
				<Ex1 />
			</div>

			<div style={outerDivStyle}>
				useCallback 훅 연습2
				<textarea defaultValue={text2} style={textAreaStyle}></textarea>
				<Ex2 />
			</div>
		</>
	);
};

export default useCallbackPage;
