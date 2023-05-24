import styled from 'styled-components';

export const TitleTag = styled.h1`
	font-size: 30px;
	margin-top: 50px;
	margin-bottom: 20px;
	text-align: center;
`;

export const HrTag = styled.hr`
	height: 10px;
	color: red;
	background-color: gray;
	margin-top: 20px;
`;

export const ExampleTag = styled.div`
	width: '235px';
	margin-top: '30px';
`;

export const TextAreaTag = styled.textarea`
	width: 100%;
	border: 1px solid black;
	padding: 0px;
	font-size: 18px;
	resize: none;
	height: ${(props) => props.height || '170px'};
`;
