import "./socialInfo.css"
import Facebook from "./assets/Facebook.svg"
import LinkedIn from "./assets/LinkedIn.svg"
import website from "./assets/website.svg"
import YouTube from "./assets/YouTube.svg"
import Instagram from "./assets/Instagram.svg"


const socialLinks = [
    {
        image: Instagram , 
         placeholder:"Enter instagram profile url"
    },
    {
        image: Facebook , 
         placeholder:"Enter facebook profile url"
    },
    {
        image: LinkedIn , 
         placeholder:"Enter LinkedIn profile url"
    },
    {
        image: YouTube , 
         placeholder:"Enter Youtube profile url"
    },
    {
        image: website , 
         placeholder:"Enter Website profile url"
    },
]

function  SocialMediaInfo(){
    return (
        <section className="partner_social_media" >
        <p className="basic_info_text">Social Links</p>

          <div className="partner_all_social_links">
             {
                socialLinks.map((link , index)=>(
                    <div key={index} className="single_social_link" >
                        <img src={link.image} alt="" className="socialLink_img" />
                        <input type="text" placeholder={link.placeholder} className="socialLinkInput" />
                    </div>
                ))
             }
          </div>

        </section>
    )
}

export default SocialMediaInfo;