import { db } from '@/db';
import { publicProcedure, router } from '@/server/trpc';

export const nfeRouter = router({
  getAll: publicProcedure.query(() => {
    const nfes = db.nfe.findMany({
      include: {
        item: true
      }
    });
    return nfes;
  }),
  getById: publicProcedure.query(() => {
    const nfes = db.nfe.findFirst({
      include: {
        item: true
      }
    });
    return nfes;
  }),
  get4: publicProcedure.query(() => {
    return 'get4';
  })
});
