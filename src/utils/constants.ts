import type { NavigationLink } from "./types";

export const SITE_CONFIG = {
  name: 'Avantys',
  title: 'Avantys - Soluciones Digitales Completas',
  description:
    'Hosting, diseño web, marketing digital y más. Todo lo que necesitas para crecer online.',
  url: 'https://avantys.com',
  author: 'Avantys',
  lang: 'es',
} as const;

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    name: 'Comienza',
    href: '/comienza',
    color: 'comienza',
    submenu: [
      { name: 'Dominios', href: '/comienza/dominios' },
      { name: 'Hosting Web', href: '/comienza/hosting' },
      { name: 'Hosting WordPress', href: '/comienza/hosting-wordpress' },
    ],
  },
  {
    name: 'Crece',
    href: '/crece',
    color: 'crece',
    submenu: [
      { name: 'Growth 360', href: '/crece/growth-360' },
      { name: 'Redes Sociales', href: '/crece/redes-sociales' },
      { name: 'Marketing Deportivo', href: '/crece/marketing-deportivo' },
    ],
  },
  {
    name: 'Crea',
    href: '/crea',
    color: 'crea',
    submenu: [
      { name: 'Desarrollo Web', href: '/crea/desarrollo-web' },
      { name: 'Creador de webs gratuito', href: '/crea/creador-web' },
    ],
  },
  {
    name: 'Transforma',
    href: '/transforma',
    color: 'transforma',
    submenu: [
      { name: 'Cloud', href: '/transforma/cloud' },
      { name: 'Servidores', href: '/transforma/servidores' },
      { name: 'Administración de Servidores', href: '/transforma/administracion-servidores' },
      { name: 'Paneles de Control', href: '/transforma/paneles-control' },
    ],
  },
  {
    name: 'Sobre Avantys',
    href: '/sobre-avantys',
    color: 'primary',
  },
];

export const CONTACT_INFO = {
  phone: '+34 XXX XXX XXX',
  email: 'info@avantys.com',
  address: 'Tu dirección aquí',
  clientPanel: 'https://clientes.avantys.com',
  support: '/soporte',
} as const;

export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  linkedin: '#',
  instagram: '#',
} as const;