import { Suspense, SuspenseProps, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const useHello = () => {
  const {
    data: hello,
    isLoading,
    isFetching,
  } = useQuery(
    ['todo'],
    () => {
      return new Promise<string>((resolve) =>
        setTimeout(() => {
          resolve('resolved ???');
        }, 1000),
      ).then((v) => {
        return v;
      });
    },
    { keepPreviousData: false, suspense: true },
  );
  // 여기까지 안온다 suspense 없을때
  // https://tanstack.com/query/v4/docs/guides/queries#why-two-different-states
  // loading 은 data 유무
  // fetch 는 queryFn 실행중 여부
  console.log(`< query >`, JSON.stringify({ hello, isFetching, isLoading }));
  return hello;
};

const Hello = () => {
  console.log(`< Hello render >`);
  const r = useHello();
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
