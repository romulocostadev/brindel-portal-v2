import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Notas
          </h2>
          <div className="space-y-1 ml-4">
            <Button variant="ghost" className="w-full justify-start">
              Apagadas
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              A Validar
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Em transito
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Em transito
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Vendas
          </h2>
          <div className="space-y-1 ml-4">
            <Button variant="ghost" className="w-full justify-start">
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Finalizadas
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <Button variant="ghost" className="w-full justify-start">
            Usuarios
          </Button>
        </div>
        <div className="px-3 py-2">
          <Button variant="ghost" className="w-full justify-start">
            Financeiro
          </Button>
        </div>
      </div>
    </div>
  );
}
