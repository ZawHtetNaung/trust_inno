import { Col, Image, Row, Typography } from "antd";
import { useNavHeight } from "../../hooks/use-height";
import classes from './Footer.module.scss';
import logo from '@/assets/imgs/logo.png';
import { RightCircleFilled,FacebookFilled, HomeFilled, LinkedinFilled, MailFilled, PhoneFilled } from "@ant-design/icons";

const Footer = () => {
    const navHeight = useNavHeight();
    return ( <section style={{height:`calc(100vh - ${navHeight}px)`,display:'flex',flexDirection:'column'}}>
        <h1 className={classes.title} style={{marginTop:'2rem',textAlign:'center'}}>Contact Us</h1>
        <Row id="about" style={{flexGrow:1}}>
            <Col sm={24} md={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <h1 className={classes.title} style={{marginTop:'2rem',textAlign:'center',textDecoration:'underline'}}>Direct</h1>
                <div className={classes.contact_card} style={{margin:'1rem auto'}}>
                    <div className={classes.info}>
                        <p><PhoneFilled/> </p>
                        <p>+959772650033</p>
                    </div>
                    <div className={classes.info}>
                        <p><MailFilled/> </p>
                        <p>example.gmail.com</p>
                    </div>
                    <div className={classes.info}>
                        <p><HomeFilled/> </p>
                        <p>No(131) Street 34</p>
                    </div>
                    <div className={classes.info}>
                        <p><RightCircleFilled/> </p>
                        <p>middle block</p>
                    </div>
                    <div className={classes.info}>
                        <p><RightCircleFilled/> </p>
                        <p>Kyoutada Township</p>
                    </div>
                </div>
            </Col>
         
            <Col sm={24} md={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <h1 className={classes.title} style={{marginTop:'2rem',textAlign:'center',textDecoration:'underline'}}>Social</h1>
                <div className={classes.social_media} style={{margin:'1rem auto'}}>
                    <div className={classes.card}>
                        <div className={classes.logo}>
                            <a href="https://www.facebook.com/trustonnovationzchk/">
                            <FacebookFilled/>
                            </a>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.logo}>
                            <a href="https://www.linkedin.com/company/96648034/admin/feed/posts/">
                            <LinkedinFilled/>
                            </a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row justify={'center'} align={'middle'} style={{padding:'20px'}}>
            <Col>
                <Row justify={'center'} align={'middle'}>
                    <p style={{marginRight:'1rem'}}>Copyright © </p>
                    <Image
                    src={logo}
                    width={50}
                    />
                    <h1 className={classes.title}>Trust Innovation</h1>
                    <p className={classes.copyright}> All rights reserved.</p>
                </Row>
            </Col>
        </Row>
    </section> );
}
 
export default Footer;