import SafeSuspense from '../component/SafeSuspense';

let promise: Promise<string>;
let isLoading = true;
const useHello = () => {
  if (!isLoading) return 'hello';
  if (!promise && typeof window !== 'undefined') {
    promise = new Promise<string>((resolve) => setTimeout(() => resolve('hello'), 10)).then((v) => {
      isLoading = false;
      return v;
    });
  }
  if (typeof window !== 'undefined') throw promise;
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
      {/*<SafeSuspense>*/}
      <Hello />
      {/*</SafeSuspense>*/}
    </div>
  );
};

export default Page;
