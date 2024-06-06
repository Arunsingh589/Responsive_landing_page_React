import { resourcesLinks, platformLinks, communityLinks, paragraph, locations } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="hidden md:block">
         
          <ul className="mt-4 ">
            {paragraph.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" xl:ml-20">
          <h3 className="text-md font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div  className=" xl:ml-20">
          <h3 className="text-md font-semibold mb-4">Learn</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div  className="xl:ml-20">
          <h3 className="text-md font-semibold mb-4">Contact Crest</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
       
      </div>
      <div>
          <p className="mb-4 flex gap-6 text-[12px] mt-16 xl:mt-0 md:text-xl">Copyright 2024 Crest   <span>Term of service</span> <span>Privacy Policy</span></p>
          <ul>
            {locations.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </footer>
  );
};

export default Footer;