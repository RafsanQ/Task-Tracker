import { cloneNode } from '@babel/types';
import PropTypes from 'prop-types'

export const Header = (props) => {
    return (
        <header>
            <h1 style={headingStyle}>{props.title}</h1>
            <h1 style={headingStyle2}>{props.job}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    job: 'To track Tasks, bitch'
}

// Header.PropTypes = {
//     title: PropTypes.string.isRequired,

// }

// CSS in JS
const headingStyle = {
     color              : 'red',
     backgroundColor    : 'black' 
}

const headingStyle2 = {
    color              : 'white',
    backgroundColor    : 'black' 
}

export default Header;
