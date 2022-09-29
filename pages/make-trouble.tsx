import SafeSuspense from '../component/SafeSuspense';

const useHello = () => {
  throw new Promise<string>((resolve) => setTimeout(() => resolve('hello'), 1000));
};

const Hello = () => {
  console.log(`< hello render >`);
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
