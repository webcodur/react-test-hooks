import { useState, useReducer } from 'react';
import Student from './Student';

const reducer = (state, action) => {
	switch (action.type) {
		case 'add-student':
			const name = action.payload.name;
			const newStudent = {
				id: Date.now(),
				name,
				isHere: false,
			};
			return {
				count: state.count + 1,
				students: [...state.students, newStudent],
			};

		case 'delete-student':
			return {
				count: state.count - 1,
				students: state.students.filter(
					(student) => student.id !== action.payload.id
				),
			};

		case 'mark-student':
			return {
				count: state.count,
				students: state.students.map((student) => {
					if (student.id === action.payload.id) {
						return { ...student, isHere: !student.isHere };
					}
					return student;
				}),
			};

		default:
			return state;
	}
};
const initialState = {
	count: 0,
	students: [],
};

const Ex2 = () => {
	const [name, setName] = useState('');
	const [studentsInfo, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h2>출석부</h2>
			<p>총 학생 수 : {studentsInfo.count}</p>

			<input
				type="text"
				value={name}
				placeholder="이름을 입력하세요"
				onChange={(e) => setName(e.target.value)}
			/>

			<button
				onClick={() => {
					dispatch({ type: 'add-student', payload: { name } });
				}}>
				추가
			</button>

			{studentsInfo.students.map((student) => {
				return (
					<Student
						key={student.id}
						id={student.id}
						name={student.name}
						isHere={student.isHere}
						dispatch={dispatch}
					/>
				);
			})}
		</div>
	);
};

export default Ex2;
