import Ex1 from '../components/useMemoComp/Ex1';
import Ex2 from '../components/useMemoComp/Ex2';
import { HrTag, ExampleTag, TextAreaTag, TitleTag } from '../style/Tags';
import { PageLayout } from '../style/Layouts';
import { desc1, desc2 } from '../data/useMemoDesc';
import { EmptyH100 } from '../style/EmptySpace';

const useMemoPage = () => {
	return (
		<PageLayout>
			{/* title */}
			<TitleTag>useMemo</TitleTag>

			{/* example1 */}
			<ExampleTag>
				<h1>Ex1</h1>
				<TextAreaTag defaultValue={desc1} />
				<Ex1 />
			</ExampleTag>
			<HrTag />

			{/* example2 */}
			<ExampleTag>
				<h1>Ex2</h1>
				<TextAreaTag defaultValue={desc2} />
				<Ex2 />
			</ExampleTag>
			<EmptyH100 />
		</PageLayout>
	);
};

export default useMemoPage;
