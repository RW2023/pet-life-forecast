// src/Components/Ui/Footer.tsx

import { FC } from 'react';
import Link from 'next/link';

interface Props {}

const Footer: FC<Props> = (props): JSX.Element => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-4">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/about" className="link link-hover">
          About PLF
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact Us
        </Link>
        <a
          href="https://nextport-alpha.vercel.app/"
          className="link link-hover"
        >
          About Dev
        </a>
        <Link href="/feedback" className="link link-hover">
          Feedback
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Social Media Links */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            {/* Twitter SVG */}
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            {/* YouTube SVG */}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            {/* Facebook SVG */}
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Ryan Wilson</p>
      </aside>
    </footer>
  );
};

export default Footer;
