import React, { useState, useEffect } from 'react';
import classes from './Nav.module.scss';
import logo_white from '@/assets/imgs/logo_white.png';
import { Button, Col, Image, Row } from 'antd';
import { useNavHeight } from '../../hooks/use-height';
import { Link } from 'react-scroll';

const Nav = () => {
  const navHeight = useNavHeight();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleHireUs = () => {
    window.location.href = 'mailto:mail@example.org';
  };

  const text = 'Trust Innovation';
  const [displayedText, setDisplayedText] = useState('');
  const speed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
        setTimeout(typeText, speed);
      }
    };

    typeText();
  }, []);

  return (
    <>
      <nav className={`${classes.main_nav} ${isMobileMenuOpen ? classes.mobile_menu_open : ''}`} id="navbar">
        <Row justify={'space-between'}>
          <Col md={12}>
            <Row gutter={[16, 16]} justify={'start'} align={'middle'}>
              <Image src={logo_white} preview={false} width={50} />
              <h1 className={classes.title}>{displayedText}</h1>
            </Row>
          </Col>
          <Col md={12}>
            <div className={`${classes.hamburger_menu} ${isMobileMenuOpen ? classes.open : ''}`} onClick={toggleMobileMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={`${classes.mobile_menu} ${isMobileMenuOpen ? classes.active : ''}`}>
              <ul className={classes.navigation_links}>
                <li>
                  <Link to="main" smooth={true} duration={500}>
                    Main
                  </Link>
                </li>
                <li>
                  <Link to="services" smooth={true} duration={500}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="process" smooth={true} duration={500}>
                    Process
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Button
                    shape={'round'}
                    size="large"
                    className={classes.hire_us_btn}
                    type="primary"
                    onClick={handleHireUs}
                  >
                    Hire Us
                  </Button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </nav>
      <div style={{ height: `${navHeight}px` }} />
    </>
  );
};

export default Nav;
