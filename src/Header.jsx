import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header__image">
                    <img src="/src/assets/germaine.jpg" alt="Germaine ROZ" />
                </div>
                <h1 className="header__name">Germaine ROZ</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/accueil'}>
                            <img src="/src/assets/home.svg" alt="home" />
                            <p>Accueil</p>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/experience'}>
                            <img src="/src/assets/person.svg" alt="home" />
                            <p>Experience</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/portfolio'}>
                            <img src="/src/assets/image.svg" alt="home" />
                            <p>Portfolio</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            <img src="/src/assets/alternate_email.svg" alt="home" />
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;