import abbyLogo from '../assets/abbybot-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGlobe, faRightToBracket, faChevronDown, faExternalLinkAlt, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DISCORD_BASE_URL } from '../env';
import { useState } from 'react';
export function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="bg-navbar header">
            <nav className='container navbar'>
                <div style={{ width: "100%", display: "flex" }}>
                    <section className="brand">
                        <img draggable="false" src={abbyLogo} alt="" width={50} height={50} />
                        <button className='btn-link text-condensed abbybot-text'>
                            AbbyBot-Dashboard
                        </button>
                    </section>
                    <section>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <button className='btn-link text-condensed'>
                                    <FontAwesomeIcon icon={faChartLine} color="white" size="sm" />
                                    Dashboard
                                </button>
                            </li>
                            <li className='nav-item text-condensed dropdown'>
                                <button className='btn-link text-condensed' onClick={toggleDropdown}>
                                    <FontAwesomeIcon icon={faEarthAmericas} color="white" size="sm" />
                                    AbbyBotProject
                                    <FontAwesomeIcon icon={faChevronDown} color="white" size="sm" />
                                </button>
                                {dropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="https://abbybot.cl">
                                                <FontAwesomeIcon icon={faGlobe} size="sm" /> AbbyBot (website)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/abbybot">
                                                <FontAwesomeIcon icon={faGithub} size="sm" /> GitHub Organization
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://reyesandfriends.cl/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" /> reyesandfriends.cl
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </section>
                </div>
                <div>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <button className='btn-link text-condensed' onClick={() => window.location.href = `${DISCORD_BASE_URL}`}>
                                <FontAwesomeIcon icon={faRightToBracket} color="white" size="sm" />
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
