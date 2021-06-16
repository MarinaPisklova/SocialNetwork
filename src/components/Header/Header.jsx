import classes from './Header.module.css';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} alt='2' src={logo}></img>
            <h1 className={classes.name}>TalkWithMe</h1>
        </header>
    )
}

export default Header;