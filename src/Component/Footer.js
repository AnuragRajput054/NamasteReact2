import { LINKDIN_LINK } from "../utils/constaints";
import LINKDIN_LINK from "../utils/constaints";
 
 export const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i class="fa-solid fa-heart"></i>
        <a href= {LINKDIN_LINK} target="_blank">
          Anurag Rajput
        </a>
        <i class="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
      </div>
    );
  };

  export default Footer;