import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];



const ChanelBar = () => {
    return (
        <div className="channel-bar shadow-lg">
            <div className="channel-block" >
                <h5 className="channel-block-text">Channels</h5>
            </div>
            <div className='channel-container'>
                <Dropdown header='Topics' selections={topics} />
                <Dropdown header='Questions' selections={questions} />
                <Dropdown header='Random' selections={random} />
            </div>
        </div>
    )
}

const Dropdown = ({ header, selections }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className='dropdown'>
            {/* Dropdown header */}
            <div onClick={() => setIsExpanded(!isExpanded)} className='dropdown-header'>
                <ChevronIcon isExpanded={isExpanded} />
                <h5 className={isExpanded
                    ? 'dropdown-header-text-selected'
                    : 'dropdown-header-text'}>
                    {header}
                </h5>
                <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
            </div>
            {isExpanded &&
                selections &&
                selections.map(selection => <TopicSelection selection={selection} />)
            }
        </div>
    )
}

const ChevronIcon = ({ isExpanded }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
    return isExpanded
        ? (<FaChevronDown size='14' className={chevClass} />)
        : (<FaChevronRight size='14' className={chevClass} />)
}

const TopicSelection = ({ selection }) => (
    <div className='dropdown-selection'>
        <BsHash size='24' className='text-gray-400' />
        <h5 className='dropdown-selection-text'>{selection}</h5>
    </div>
);

export default ChanelBar