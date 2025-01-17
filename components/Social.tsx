import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/huang997733" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/william-huang-29a37916a/",
  },
];

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
