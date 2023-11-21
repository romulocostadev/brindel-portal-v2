import { db } from '@/db';
import { publicProcedure, router } from '@/server/trpc';

export const authRouter = router({
  get1: publicProcedure.query(() => {
    const foo = db.user.findMany();
    return foo;
  }),
  get2: publicProcedure.query(() => {
    return 'get2';
  })
});
