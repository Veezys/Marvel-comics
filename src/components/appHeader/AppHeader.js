import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <a href="#" className='header__link'>
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__item header-red"><a href="#">Characters</a></li>
                        <p>/</p>
                        <li><a href="#">Comics</a></li>
                    </ul>
            </nav>
        </header>
    )
}

export default AppHeader;