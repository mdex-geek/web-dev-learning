import "./App.css";
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atom/counter";
import { useEffect, useState, memo } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <Button />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </>
  );
}

function Button() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>increase</button>
      <button onClick={() => setCount((c) => c - 1)}>decrease</button>
    </div>
  );
}

function Counter() {
  const counter = useRecoilValue(counterAtom);

  return <>{counter}</>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <>{even ? "even" : "odd"}</>;
}

export default App;
