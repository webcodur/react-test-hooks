import Ex1 from '../components/useContextComp/Ex1';
import { ExampleTag, TextAreaTag, TitleTag } from '../style/Tags';
import { PageLayout } from '../style/Layouts';
import { EmptyH100 } from '../style/EmptySpace';
import { desc1 } from '../data/useContextDesc';

const useContextPage = () => {
	return (
		<PageLayout>
			{/* title */}
			<TitleTag>useContext</TitleTag>

			{/* example */}
			<ExampleTag>
				<h1>Ex</h1>
				<TextAreaTag defaultValue={desc1} height="240px"></TextAreaTag>
				<Ex1 />
			</ExampleTag>
			<EmptyH100 />
		</PageLayout>
	);
};

export default useContextPage;
