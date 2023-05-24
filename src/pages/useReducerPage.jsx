import Ex1 from '../components/useReducerComp/Ex1';
import Ex2 from '../components/useReducerComp/Ex2';
import { HrTag, ExampleTag, TextAreaTag, TitleTag } from '../style/Tags';
import { PageLayout } from '../style/Layouts';
import { desc0 } from '../data/useReducerDesc';
import { EmptyH100 } from '../style/EmptySpace';

const useReducerPage = () => {
	return (
		<PageLayout>
			{/* title */}
			<TitleTag>useReducer</TitleTag>
			<h1>개념</h1>
			<TextAreaTag defaultValue={desc0} />

			{/* example1 */}
			<ExampleTag>
				<h1>Ex1</h1>
				<Ex1 />
			</ExampleTag>
			<HrTag />

			{/* example2 */}
			<ExampleTag>
				<h1>Ex2</h1>
				<Ex2 />
			</ExampleTag>
			<EmptyH100 />
		</PageLayout>
	);
};

export default useReducerPage;
