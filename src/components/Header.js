import Button from './button';

export const Header = (props) => {
    return (
        <header className='header'>
            <h1 >{props.title}</h1>
            <Button color = 'green' text = 'Add' onClick = {onClickFucntion}/>
        </header>
    )
}

const onClickFucntion = (e)=>{
    console.log('click from header')
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
