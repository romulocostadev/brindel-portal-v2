import { AppRouter } from '@/server';
import { inferRouterOutputs } from '@trpc/server';
import { ColumnDef } from '@tanstack/react-table';

type RouterOutput = inferRouterOutputs<AppRouter>;

type Nfe = RouterOutput['nfe']['getById'];

export const columns: ColumnDef<Nfe>[] = [
  {
    accessorKey: 'company',
    header: 'Empresa'
  },
  {
    accessorKey: 'key',
    header: 'Chave'
  },
  {
    accessorKey: 'doc',
    header: 'Cnpj'
  }
];
