import PropTypes from 'prop-types'

const button = ({color, text, onClick}) => {
    
    
    return (
        <button onClick={onClick}
        style={{background: color}} 
        className='btn'>
            {text}
        </button>
    )
}

button.defaultProps = {
    color: 'steelblue'
}

// button.proptypes = {
//     text: PropTypes.string,
//     color: PropTypes.string,
// }

export default button
