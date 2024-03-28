import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-scroll";

const SocialLink = () => {
  return (
    <div className="flex flex-col mt-[30px] gap-y-4">
      <p className="font-Gotham-Bold text-[18px] leading-normal">
        Follow us on
      </p>
      <div className="flex gap-x-[16px]">
        <Link to="https:localhost:3000" target="_blank">
          <RiInstagramFill className="cursor-pointer" size={32} />
        </Link>
        <Link to="https:localhost:3000" target="_blank">
          <FaFacebook className="cursor-pointer" size={32} />
        </Link>
        <Link to="https:localhost:3000" target="_blank">
          <FaTwitter className="cursor-pointer" size={32} />
        </Link>
        <Link to="https:localhost:3000" target="_blank">
          <RiWhatsappFill className="cursor-pointer" size={32} />
        </Link>
        <Link to="https:localhost:3000" target="_blank">
          <FaYoutube className="cursor-pointer" size={32} />
        </Link>
      </div>
    </div>
  );
};

export default SocialLink;
