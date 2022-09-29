import SafeSuspense from '../component/SafeSuspense';
import { atom, RecoilRoot, useRecoilValue } from 'recoil';

const helloStore = atom<string>({
  key: 'hello',
  // default: '',
});

const useHello = () => {
  const v = useRecoilValue(helloStore);
  // throw new Promise<string>((resolve) => setTimeout(() => resolve('hello'), 1000));
  // return v;
};

const Hello = () => {
  console.log(`< hello render >`);
  const r = useHello();
  return <>{JSON.stringify(r)}</>;
};

const Page = () => {
  return (
    <RecoilRoot>
      <div>hello page</div>
      <Hello />
    </RecoilRoot>
  );
};

export default Page;
