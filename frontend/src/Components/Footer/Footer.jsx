import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsSnapchat, BsTwitter } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'

const SocialMedia = [
    {name: 'Twitter', icon: <BsTwitter size={'1.5vw'} color='white'/>, url: 'https://www.twitter.com/'},
    {name: 'Facebook', icon: <FaFacebookF size={'1.5vw'} color='white'/>, url: 'https://www.facebook.com/'},
    {name: 'Linkedin', icon: <ImLinkedin2 size={'1.5vw'} color='white'/>, url: 'https://www.linkedin.com/'},
    {name: 'Youtube', icon: <AiFillYoutube size={'1.5vw'} color='white'/>, url: 'https://www.youtube.com/'},
    {name: 'Instagram', icon: <AiFillInstagram size={'1.5vw'} color='white'/>, url: 'https://www.instagram.com/'},
    {name: 'Snapchat', icon: <BsSnapchat size={'1.5vw'} color='white'/>, url: 'https://www.snapchat.com/'},
]

function Footer() {
    const renderSocialMedia = () => SocialMedia.map((item, index) => {
        return (
            <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.name}>
              {item.icon}
            </a>
        )
    })


  return (
    <div className="Footer">
        <div className="MediaSection">
            <p>© 2020</p>
            <div className="SocialMedia">{renderSocialMedia()}</div>
        </div>
        <div className="Line"></div>
    </div>
  );
}

export default Footer;