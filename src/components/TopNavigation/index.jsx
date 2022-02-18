import useDarkMode from '../../hooks/useDarkMode';
import { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';

const TopNavigation = () => {

    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);

    return (
        <div className='top-navigation'>
            <FaHashtag size='20' className='title-hashtag' />
            <h5 className='title-text'>Discord Design</h5>
            <span onClick={handleMode}>
                {darkTheme
                    ? (<FaSun size='24' className='top-navigation-icon' />)
                    : (<FaMoon size='24' className='top-navigation-icon' />)
                }
            </span>
            <div className='search'>
                <input className='search-input' type='text' placeholder='Search...' />
                <FaSearch size='18' className='text-secondary my-auto' />
            </div>
            <FaRegBell size='24' className='top-navigation-icon' />
            <FaUserCircle size='24' className='top-navigation-icon' />
        </div>
    )
}

export default TopNavigation