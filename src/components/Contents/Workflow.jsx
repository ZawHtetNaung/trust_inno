import { Col, Image, Row, Steps } from 'antd';
import { useNavHeight } from '../../hooks/use-height';
import classes from './Content.module.scss';
import code from '@/assets/imgs/code.png';
const WorkFlow = () => {
    const navHeight = useNavHeight();
    return ( <section style={{height:`calc(120vh - ${navHeight}px`}} className={classes.workflow_section}>
        <h1 className={classes.work_flow_title}>Our Wokflow</h1>
        <Row id='process'>
        <Col sm={24} md={12}>
            <Row style={{height:'100%'}} justify={'center'} align={'middle'}>
                <Col md={12} sm={24}>
                    <Steps
                    current={0}
                    direction="vertical"
                    items={[
                        {
                        title: 'Requirement Gathering',
                        description: 'We follow the first and foremost priority of gathering requirements, resources and information to start our project.',
                        },
                        {
                        title: 'UI/UX and Design',
                        description: 'We create catchy charming designs for UI/UX and digital contents.',
                        },
                        {
                        title: 'Development',
                        description: 'Development of websites and web application with latest technologies and full transparency with the client.',
                        },
                        {
                        title: 'Deployment',
                        description: 'After reviews and fulfilling all the requirements, we deploy our websites with your prefered domain.',
                        },
                        {
                        title: 'Support and Maintainance',
                        description: "Our company offers support and maintainance and always ready to answer for our client's needs.",
                        },
                    ]}
                    />
                </Col>
            </Row>
        </Col>
        <Col sm={24} md={12} className={classes.workflow_images}>
    
                <Image
                src={code}
                width={100}
                preview={false}
                style={{
                    margin:'0 auto'
                }}
                />
              <Image
                src={code}
                width={100}
                preview={false}
                style={{
                    margin:'0 auto'
                }}
                />
        </Col>
        </Row>
    </section> );
}
 
export default WorkFlow;