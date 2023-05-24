import Ex1 from '../components/useCallbackComp/Ex1';
import Ex2 from '../components/useCallbackComp/Ex2';
import { HrTag, ExampleTag, TextAreaTag, TitleTag } from '../style/Tags';
import { PageLayout } from '../style/Layouts';
import { EmptyH100 } from '../style/EmptySpace';
import { text1, text2 } from '../data/useCallbackData';

const useCallbackPage = () => {
	return (
		<PageLayout>
			{/* title */}
			<TitleTag>useCallback</TitleTag>

			{/* example1 */}
			<ExampleTag>
				<h1>Ex1</h1>
				<TextAreaTag defaultValue={text1}></TextAreaTag>
				<Ex1 />
			</ExampleTag>
			<HrTag />

			{/* example2 */}
			<ExampleTag>
				<h1>Ex2</h1>
				<TextAreaTag defaultValue={text2}></TextAreaTag>
				<Ex2 />
			</ExampleTag>
			<EmptyH100 />
		</PageLayout>
	);
};

export default useCallbackPage;
