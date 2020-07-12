import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Beranda',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Formulir',
    url: '/forms',
    icon: 'icon-note',
  },
  {
    name: 'Data',
    url: '/datas',
    icon: 'icon-chart'
  },
  {
    name: 'Keluar',
    url: '/logout',
    icon: 'icon-logout'
  },
  {
    divider: true
  }
];
