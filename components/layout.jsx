import { Link } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import { faHome, faBook, faAddressCard, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar'

const Layout = ({ children }) => {
    const router = useRouter();

    const menuItems = [
        {
            href: '/',
            title: 'Home',
            icon: faHome
        },
        {
            href: '/about',
            title: 'About',
            icon: faBook
        },
        {
            href: '/contact',
            title: 'Contact',
            icon: faAddressCard
        },
        {
            href: '/season-stat-line',
            title: 'Season Stats',
            icon: faMagnifyingGlassChart
        },
    ];

    return (
        <>
            <Navbar />
            <div className='md-blue-top-separator flex'>
                <aside className='bg-teal-200 w-1/6 pt-2'>
                    <nav>
                        <ul>
                        {menuItems.map(({ href, title, icon }) => (
                            <li className='m-2' key={title}>
                            <Link 
                                className={`flex p-2 bg-teal-200 rounded hover:away-blue-bg cursor-pointer ${
                                    router.asPath === href && 'md-blue-bg text-white'
                                }`}
                                href={href}>
                                <FontAwesomeIcon icon={icon} /> 
                                <span className='leading-4'>&nbsp; {title}</span>
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </aside>
                <main className='flex-3 w-10/12'>{children}</main>
            </div>
        </>
    )
}

export default Layout;