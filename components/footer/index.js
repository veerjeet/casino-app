import classes from './footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';



const Footer = () => {
    return (
        <>
            <div className={classes.footerDiv}>
                <div className={classes.iconDiv}>
                    <FacebookIcon className={classes.icon} />
                    <TwitterIcon className={classes.icon} />
                    <InstagramIcon className={classes.icon} />
                </div>
                <div className={classes.copyRight}>
                    <CopyrightIcon />
                    <span> Copyright</span>
                </div>
            </div>
        </>
    )    
}

export default Footer;