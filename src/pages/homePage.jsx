import styled from 'styled-components';
import { PageLayout } from '../style/Layouts';
import { TitleTag } from '../style/Tags';

const TextArea = styled.textarea`
	width: 700px;
	height: 300px;
	margin-top: 20px;
	padding-top: 20px;
	font-weight: 500;
	font-size: 20px;
	border: 3px solid gray;
`;

const HomePage = () => {
	const text = `
  <react-test-hooks 레포지토리>
  
  목표 : 각종 리액트 훅스 테스트
  배포링크 : https://webcodur.github.io/react-test-hooks/
  깃헙링크 : https://github.com/webcodur/react-test-hooks
  테스트된 훅
  - useContext (✔️)
  - useCallback (✔️)
  - useMemo (✔️)
  - useReducer (✔️)`;

	return (
		<PageLayout>
			<TitleTag>React Hooks Test</TitleTag>
			<TextArea defaultValue={text} />
		</PageLayout>
	);
};

export default HomePage;
