import OurServices from "../components/Contents/OurServices";
import TechWeUse from "../components/Contents/TechWeUse";
import WorkFlow from "../components/Contents/Workflow";
import Hero from "../components/Hero/Hero";
import classes from './HomePage.module.scss';

const HomePage = () => {
    return ( <main className={classes.container}>
        <Hero animate={true}/>
        <OurServices animate={true}/>
        <WorkFlow/>
        <TechWeUse/>
    </main> );
}
 
export default HomePage;