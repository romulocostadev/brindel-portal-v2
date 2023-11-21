import { db } from '@/db';
import { publicProcedure, router } from './trpc';
import { authRouter } from '@/services/auth';
import { userRouter } from '@/services/user';
import { nfeRouter } from '@/services/nfe';

export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  nfe: nfeRouter
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
