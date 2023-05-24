// import Ex1 from '../components/useContextComp/Ex1';
// import Ex2 from '../components/useContextComp/Ex2';
import { HrTag, ExampleTag, TextAreaTag, TitleTag } from '../style/Tags';
import { PageLayout } from '../style/Layouts';
import { EmptyH100 } from '../style/EmptySpace';
import { desc1, desc2 } from '../data/useContextDesc';

const useContextPage = () => {
	return (
		<PageLayout>
			{/* title */}
			<TitleTag>useContext</TitleTag>

			{/* example1 */}
			<ExampleTag>
				<h1>Ex1</h1>
				<TextAreaTag defaultValue={desc1}></TextAreaTag>
				{/* <Ex1 /> */}
			</ExampleTag>
			<HrTag />

			{/* example2 */}
			<ExampleTag>
				<h1>Ex2</h1>
				<TextAreaTag defaultValue={desc2}></TextAreaTag>
				{/* <Ex2 /> */}
			</ExampleTag>
			<EmptyH100 />
		</PageLayout>
	);
};

export default useContextPage;
