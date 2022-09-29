import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
