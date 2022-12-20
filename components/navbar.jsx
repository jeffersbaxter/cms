import { useState } from 'react';
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@aws-amplify/ui-react';
import { topNavItems, allNavItems } from './nav-data';
import { useRouter } from 'next/router';

export default function Navbar(props) {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    const onMobileNavClick = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <nav className="away-blue-bg flex items-center justify-between flex-wrap bg-teal-500 py-6 px-8">
            <div className='flex justify-between w-full lg:w-1/2'>
                <div className="flex items-center text-4xl flex-shrink-0 team-red mr-6">
                    <Link href="/">
                        <FontAwesomeIcon icon={faHockeyPuck} />
                        <span className="font-semibold tracking-tight">&nbsp; Power Play CRM</span>
                    </Link>
                </div>
                <div className="flex justify-end lg:hidden">
                    <button onClick={onMobileNavClick} className="flex items-center justify-end px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
            </div>
            <div className='visible lg:hidden'>
                {
                    mobileOpen ?
                        <div className="w-full flex flex-col text-left flex-grow text-teal lg:items-center lg:w-auto">
                            {allNavItems.map(({ href, title, icon }) => (
                                <div className='m-2' key={title}>
                                    <Link
                                        className={`text-white w-full text-left hover:text-teal cursor-pointer`}
                                        href={href} key={href}>
                                        <span className='leading-4'>&nbsp; {title}</span>
                                    </Link>
                                </div>
                            ))}
                        </div> :
                        null
                }
            </div>
            <div className='hidden lg:block w-1/2'>
                <div className="w-full flex justify-end">
                    {topNavItems.map(({ href, title, icon }) => (
                        <div className='m-2' key={title}>
                            <Link
                                className={`m-2 text-teal-100 hover:text-white cursor-pointer ${router.asPath === href && 'md-blue-bg text-white'
                                    }`}
                                href={href} key={href}>
                                {/* <FontAwesomeIcon icon={icon} /> */}
                                <span className='leading-4'>&nbsp; {title}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}