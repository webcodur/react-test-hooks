const Student = ({ name, dispatch, id, isHere }) => {
	return (
		<div>
			{/* TEST */}
			<span
				style={{
					textDecoration: !isHere ? 'none' : 'line-through',
					color: !isHere ? 'black' : 'gray',
				}}
				onClick={() => {
					dispatch({ type: 'mark-student', payload: { id } });
				}}>
				{name}
			</span>

			{/* 삭제 */}
			<button
				onClick={() => {
					dispatch({ type: 'delete-student', payload: { id } });
				}}>
				삭제
			</button>
		</div>
	);
};

export default Student;
