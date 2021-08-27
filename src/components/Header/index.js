import './Header.css';

function Header(props) {
    return (
        <header className="main-header">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </header>
    )
}

export default Header;