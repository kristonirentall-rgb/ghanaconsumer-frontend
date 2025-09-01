import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-green-600">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* Brand / Logo */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 via-red-500 to-green-500 rounded-lg text-white">
                Ghana
              </span>{" "}
              Consumer
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            {/* About */}
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Link to="/our-story">
                  <Footer.Link>Our Story</Footer.Link>
                </Link>
                <Link to="/affiliates">
                  <Footer.Link>Affiliates</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>

            {/* Follow Us */}
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Legal */}
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ghana Consumer"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://facebook.com" icon={BsFacebook} />
            <Footer.Icon href="https://instagram.com" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com" icon={BsTwitter} />
            <Footer.Icon href="https://github.com" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
