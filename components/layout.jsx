import { Link } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar'
import { sideNavItems } from './nav-data';

const Layout = ({ children }) => {
    const router = useRouter();

    return (
        <>
            <Navbar />
            <div className='md-blue-top-separator p-4 flex'>
                <aside className='bg-teal-200 rounded w-1/6 pt-2 hidden lg:flex'>
                    <nav className='w-full'>
                        <ul>
                        {sideNavItems.map(({ href, title, icon }) => (
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
                <main className='flex-3 w-full pl-4 pb-4 pr-4 lg:pr-0 lg:w-10/12'>{children}</main>
            </div>
        </>
    )
}

export default Layout;