import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon /> <TwitterIcon /> <WhatsAppIcon /> <LinkedInIcon />
            </div>
            <p> &copy; 2021 sparevictuals.com</p>
        </div>
    );
}

export default Footer;