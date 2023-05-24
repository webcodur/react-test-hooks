import { useReducer, useState } from 'react';

// reducer - state 업데이트
// dispatch - state 업데이트를 위한 요구
// action - dispatch에게 전달되는 요구

const Ex1 = () => {
	const ACTION_TYPES = {
		deposit: 'deposit',
		withdraw: 'withdraw',
	};
	const reducer = (state, action) => {
		console.log('리듀서 작업 확인', state, action);
		switch (action.type) {
			case ACTION_TYPES.deposit:
				return state + action.payload;
			case ACTION_TYPES.withdraw:
				return state - action.payload;
			default:
				return state;
		}
	};

	const [number, setNumber] = useState(0);
	const [money, dispatch] = useReducer(reducer, 0);

	return (
		<>
			<h2>은행</h2>
			<p>잔고: {money}원</p>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
				step="1000"
			/>
			<button
				onClick={() => {
					dispatch({ type: ACTION_TYPES.deposit, payload: number });
				}}>
				예금
			</button>
			<button
				onClick={() => {
					dispatch({ type: ACTION_TYPES.withdraw, payload: number });
				}}>
				출금
			</button>
		</>
	);
};

export default Ex1;
