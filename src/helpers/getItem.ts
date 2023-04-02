import type { MenuProps } from 'antd';

type MenuItemProps = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItemProps[],
    type?: 'group',
  ): MenuItemProps {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItemProps;
}
  
export { getItem };
