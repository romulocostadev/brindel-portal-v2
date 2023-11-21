import { AppRouter } from '@/server';
import { createTRPCReact } from '@trpc/react-query';

export const server = createTRPCReact<AppRouter>({});
