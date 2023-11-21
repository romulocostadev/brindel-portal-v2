import { getItem } from "@/helpers/getItem";
import { MailOutlined, FunnelPlotOutlined, SettingOutlined  } from "@ant-design/icons";

import type { MenuProps } from 'antd';

const menuItems: MenuProps['items'] = [
  getItem('Notas', 'g1', <MailOutlined />, [
    getItem('Apagadas', 'apagadas', null),
    getItem('A Validar', 'validar', null),
    getItem('Em transito', 'transito', null),
    getItem('Recebidas', 'recebidas', null)
  ]),

  getItem('Vendas', 'g2', <FunnelPlotOutlined />, [
    getItem('Dashboard', '5'),
    getItem('Finalizadas', '6')
  ]),

  { type: 'divider' },

  getItem('Usuários', '7', <SettingOutlined />)
];
  
export {menuItems}