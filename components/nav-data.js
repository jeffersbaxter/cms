import { faHome, faBook, faAddressCard, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'

export const sideNavItems = [
    {
        href: '/',
        title: 'Home',
        icon: faHome
    },
    {
        href: '/season-stat-line',
        title: 'Statistics',
        icon: faMagnifyingGlassChart
    },
];

export const topNavItems = [
    {
        href: '/about',
        title: 'About',
        icon: faBook
    },
    {
        href: '/contact',
        title: 'Contact',
        icon: faAddressCard
    }
];

export const allNavItems = [
    ...sideNavItems,
    ...topNavItems
];
