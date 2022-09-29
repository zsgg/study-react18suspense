import { Suspense, SuspenseProps, useEffect, useRef, useState } from 'react';

// 실제로 React의 Suspense가 이것과 똑같이 동작하지는 않겠지만
// 구현 컨셉을 잘 드러내고 있는 코드 조각입니다.
// suspense 역활
const cache = new Map();
const pending = new Map();

function fetchTextSync(url: string) {
  if (cache.has(url)) {
    return cache.get(url); // 캐시 맵객체
  }
  if (pending.has(url)) {
    throw pending.get(url); // Pending Promise throw
  }
  // 비동기 로직
  const promise = Promise.all([
    fetch(url)
      .then((response) => response.text()) // 처리되는 경우
      .then((text) => {
        pending.delete(url);
        cache.set(url, text);
      }),
    new Promise((resolve) => {
      setTimeout(() => resolve(''), 5000);
    }),
  ]).then((value) => value[0]);
  pending.set(url, promise); // 팬딩 객체에 팬딩인거 표시
  throw promise;
}

const Hello = () => {
  console.log(`< hello render >`);
  // 무한 랜더 시도하지만 promise resolve 되고 cache 에 들어가면 cache 를 get 함
  const r = fetchTextSync('https://run.mocky.io/v3/d6ac91ac-6dab-4ff0-a08e-9348d7deed51');
  return <>{JSON.stringify(r)}</>;
};

const Page = () => {
  return (
    <div>
      <div>hello page</div>
      <Hello />
    </div>
  );
};

export default Page;
