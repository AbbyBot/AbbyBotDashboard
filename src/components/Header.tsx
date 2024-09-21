import abbyLogo from '../assets/abbybot-logo.png';
import { ChartLine, Globe, LogIn, ChevronDown, Globe2, Github, ExternalLink } from 'lucide-react';
import { DISCORD_BASE_URL } from '../env';
import { useState } from 'react';

export function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return <header className="bg-navbar header">
        <nav className='container navbar'>
            <div style={{ width: "100%", display: "flex" }}>
                <section className="brand">
                    <img draggable="false" src={abbyLogo} alt="" width={50} height={50} />
                    <button className='btn-link text-condensed'>
                        AbbyBot-Dashboard
                    </button>
                </section>
                <section>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <button className='btn-link text-condensed'>
                                <ChartLine color='white' size={16} />
                                Dashboard
                            </button>
                        </li>
                        <li className='nav-item text-condensed dropdown'>
                            <button className='btn-link text-condensed' onClick={toggleDropdown}>
                                <Globe color='white' size={16} />
                                AbbyBotProject
                                <ChevronDown color='white' size={16} />
                            </button>
                            {dropdownOpen && (
                                    <ul className="dropdown-menu">
                                    <li>
                                        <a href="https://abbybot.cl">
                                            <Globe2 size={16} /> AbbyBot (website)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/abbybot">
                                            <Github size={16} /> GitHub Organization
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://reyesandfriends.cl/">
                                            <ExternalLink size={16} /> reyesandfriends.cl
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
                            <LogIn color='white' size={16} />
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}
