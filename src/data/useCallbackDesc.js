export const desc1 = `
  아래 input창 값 변경마다 useEffect로 함수 리랜더 여부 확인하는 예제

  - printValCb 함수는 useCallback으로 감싸서 input 변경시 리랜더
  - printValNoDep 함수는 감쌌지만 빈 배열로 두어 리랜더 안됨
  - printVal 함수는 감싸지 않아 어떤 상태가 바뀌어도 리랜더
`;

export const desc2 = `
  다크모드시 boxStyle 주는 함수가 리랜더링되지 않게
  useCallback 사용하는 예제
`;
