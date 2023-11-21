'use client';

import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { server } from '@/app/_trpc/client';
import { httpBatchLink } from '@trpc/client';
import { ThemeProvider } from './Theme';

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    server.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc'
        })
      ]
    })
  );

  return (
    <server.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </server.Provider>
  );
};

export default Providers;
