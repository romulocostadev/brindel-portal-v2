import { publicProcedure, router } from '@/server/trpc';

export const userRouter = router({
  get3: publicProcedure.query(() => {
    return 'get3';
  }),
  get4: publicProcedure.query(() => {
    return 'get4';
  })
});
