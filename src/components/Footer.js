import React from "react";
import { ReactComponent as FacebookIcon } from "../assets/svgs/Facebook.svg";
import { ReactComponent as LinkedInIcon } from "../assets/svgs/LinkedIn.svg";
import { ReactComponent as GithubIcon } from "../assets/svgs/Github.svg";
import { ReactComponent as TwitterIcon } from "../assets/svgs/Twitter.svg";
function Footer() {
  return (
    <div className="bg-black bg-opacity-20 h-full text-white flex p-12 justify-around">
      <div className="text-3xl font-semibold text-green-400">𝔅𝔢𝔠𝔨𝔢𝔪</div>
      <p className="font-light ">© Copyright 2022. All right reserved</p>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/profile.php?id=100009745262096">
          <FacebookIcon className="social-icon fill-[#4267B2]" />
        </a>

        <a href="https://www.linkedin.com/in/quyhaphu01">
          <LinkedInIcon className="social-icon fill-[#0077B5]" />
        </a>

        <a href="https://github.com/Beckem">
          <GithubIcon className="social-icon fill-[#171515]" />
        </a>

        <a href="https://twitter.com/QuH78090657">
          <TwitterIcon className="social-icon fill-[#1DA1F2] " />
        </a>
      </div>
    </div>
  );
}

export default Footer;
