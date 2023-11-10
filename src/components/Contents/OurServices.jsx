import React, { useState, useEffect } from 'react';
import { Card, Col, Image, Row } from 'antd';
import development from '@/assets/imgs/development.png';
import { useNavHeight } from '../../hooks/use-height';
import { useSpring, animated } from 'react-spring'; // Import useSpring and animated

import classes from './Content.module.scss';

const OurServices = () => {
  const navHeight = useNavHeight();
  const services = [
    {
        key:1,
        title: 'Single Page Static Websites',
        desc:'We specialize in creating elegant single-page static websites. Showcase your business or portfolio with simplicity and style. Our user-focused approach ensures a memorable online presence.'
    },
    {
        key:2,
        title: 'E-commerce Solutions',
        desc:'Boost your online store with our comprehensive e-commerce solutions. From product listings to secure payments, we provide a seamless shopping experience for your customers.'
    },
    {
        key:3,
        title: 'Web Application Development (CMS)',
        desc:'Turn your ideas into dynamic web applications with our CMS development. Manage content effortlessly, whether it is a blog or data system.'
    },
    {
        key:4,
        title: 'Graphic Design',
        desc:'Make your brand stand out with our creative graphic design. From logos to marketing materials, we communicate your message effectively through compelling visuals.'
    }
  ];

  // State to control the fadeIn animation
  const [fadeIn, setFadeIn] = useState(false);

  // State to track whether to show full or truncated descriptions
  const [showFullDescriptions, setShowFullDescriptions] = useState(false);

  // Function to toggle between full and truncated descriptions
  const toggleDescriptions = () => {
    setShowFullDescriptions(!showFullDescriptions);
  };

  useEffect(() => {
    // Set fadeIn to true to trigger the animation
    setFadeIn(true);
  }, []); // This effect runs once when the component mounts

  // Animation config for cards
  const cardAnimations = useSpring({
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? 'translateX(0)' : 'translateX(100px)',
    config: { duration: 1000 }, // Customize animation duration
  });

  // Animation config for title and description
  const titleAnimation = useSpring({
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? 'translateX(0)' : 'translateX(-100px)',
    config: { duration: 1000 }, // Customize animation duration
  });

  const descriptionAnimation = useSpring({
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? 'translateX(0)' : 'translateX(-100px)',
    config: { duration: 1000 }, // Customize animation duration
  });

  return (
    <Row
      id="services"
      className={classes.section}
      style={{
        height: `calc(100vh - ${navHeight}px)`,
      }}
    >
      <Col md={12} sm={24}>
        <Row className={classes.service_cards} justify={'center'} align={'middle'}>
          {services.map((service) => (
            <Col md={12} sm={12} key={service.key} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <animated.div className={`${classes.service_card} ${classes.card_animation}`} style={cardAnimations}>
                <Image width={50} height={50} preview={false} src={development} />
                <h1>{service.title}</h1>
                <p>
                  {/* Conditionally render full or truncated descriptions */}
                  {showFullDescriptions ? service.desc : `${service.desc.slice(0, 100)}...`}
                  {/* Render "Read More" button if the description is truncated */}
                  {service.desc.length > 100 && (
                    <span className={classes.read_more} onClick={toggleDescriptions}>
                      {showFullDescriptions ? 'Read Less' : 'Read More'}
                    </span>
                  )}
                </p>
              </animated.div>
            </Col>
          ))}
        </Row>
      </Col>
      <Col md={12} sm={24} className={classes.service_title}>
        <div className={classes.title}>
          <animated.div style={titleAnimation}>Our Services</animated.div>
        </div>
        <div className={classes.description}>
          <animated.div style={descriptionAnimation}>
            At Trust Innovation, we're on a mission to revolutionize the digital landscape through creative and cutting-edge solutions. We believe that innovation is built on trust, and that's exactly what we offer.
          </animated.div>
        </div>
      </Col>
    </Row>
  );
};

export default OurServices;
