import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SidebarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

const Divider = () => <hr className="sidebar-hr" />;

const SideBar = () => {
    return (
        <div className="flex flex-col fixed left-0 top-0 h-screen w-16 bg-white dark:bg-gray-900 shadow-lg">
            <SidebarIcon icon={<FaFire size='28' />} />
            <Divider />
            <SidebarIcon icon={<BsPlus size='32' />} />
            <SidebarIcon icon={<BsFillLightningFill size='20' />} />
            <SidebarIcon icon={<FaPoo size='20' />} />
            <Divider />
            <SidebarIcon icon={<BsGearFill size='22' />} />
        </div>
    )
}

export default SideBar