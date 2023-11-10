import { Col, Image, Row } from 'antd';
import classes from './Hero.module.scss';
import heroImg from '@/assets/imgs/hero_image.png';
import { useNavHeight } from '../../hooks/use-height';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

const Hero = ({ animate }) => {
    const navHeight = useNavHeight();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        if (animate) {
            setFadeIn(true);
        }
    }, [animate]);

    // Define a react-spring animation for the paragraph (text) and image
    const textAnimation = useSpring({
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? 'translateX(0)' : 'translateX(100px)', // Move the text to the right
        config: { duration: 1000 }, // Customize animation duration
    });

    const imageAnimation = useSpring({
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? 'translateX(0)' : 'translateX(-100px)', // Move the image to the left
        config: { duration: 1000 }, // Customize animation duration
    });

    return (
        <animated.div
            id="main"
            className={`${classes.section}`}
            style={{
                height: `calc(100vh - ${navHeight}px)`,
            }}
        >
            <Row style={{ height: '100%' }}>
                <Col md={12} sm={24}>
                    <animated.div
                        className={classes.hero_content}
                        style={{
                            ...textAnimation, // Apply react-spring animation to text
                        }}
                    >
                        <h1 className={classes.title}>Hi We are Trust Innovation</h1>
                        <h2 className={classes.subtitle}>
                            “Your Partner in Software, Web, and Graphic Design Excellence”
                        </h2>
                    </animated.div>
                </Col>
                <Col md={12} sm={24}>
                    <animated.div
                        className={classes.hero_content}
                        style={{
                            ...imageAnimation, // Apply react-spring animation to image
                        }}
                    >
                        <Image
                            src={heroImg}
                            width={250}
                            preview={false}
                            style={{
                                margin: '0 auto',
                            }}
                        />
                    </animated.div>
                </Col>
            </Row>
        </animated.div>
    );
};

Hero.propTypes = {
    animate: PropTypes.bool.isRequired,
};
export default Hero;
