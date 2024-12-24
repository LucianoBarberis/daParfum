import { BsInstagram, BsFacebook,  } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <p>daParfum - Aromas autenticos</p>
                <p>Encontranos en nuestras redes sociales:</p>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=61571211712906" target="_blank" rel="noopener noreferrer">
                        <BsFacebook />
                    </a>
                    <a href="https://www.instagram.com/da.parfum_/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} daParfum. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;