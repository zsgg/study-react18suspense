import Link from 'next/link';

const Home = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Link href="/recoil">
        <a>recoil</a>
      </Link>
      <Link href="/suspense-rq-o">
        <a>suspense(o) X react-query</a>
      </Link>
      <Link href="/suspense-rq-x">
        <a>suspense(x) X react-query</a>
      </Link>
      <Link href="/make-trouble">
        <a>make-trouble</a>
      </Link>
      <Link href="/make-suspense-work-1">
        <a>make-suspense-work-1</a>
      </Link>
      <Link href="/make-suspense-work-2">
        <a>make-suspense-work-2</a>
      </Link>
    </div>
  );
};

export default Home;
