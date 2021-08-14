import classes from './Header.module.scss';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.header__logo} alt='2' src={logo}></img>
            <h1 className={classes.name}>TalkWithMe</h1>
            <div className={classes.loginBlock} >
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;