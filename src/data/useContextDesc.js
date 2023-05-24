export const desc1 = `
  recoil, redux, mobx 설치 없이 사용가능한 전역 상태
  
  <사용된 방식>
  in app.js
  ㄴ UserContext.Provider로 root 감싸줌
  
  in page/component
  ㄴ import { useContext } from 'react';
  ㄴ import { UserContext } from '../../context/UserContext';`;
