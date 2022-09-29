import { Suspense, SuspenseProps, useEffect, useState } from 'react';

const useMounted = (): boolean => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

const SafeSuspense = ({ children, fallback }: SuspenseProps): JSX.Element => {
  const isMounted = useMounted();

  if (isMounted) {
    return (
      <Suspense fallback={fallback} data-f="SS-d00c">
        {children}
      </Suspense>
    );
  }
  return <>{fallback}</>;
};

export default SafeSuspense;
