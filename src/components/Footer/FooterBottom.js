import React, { useEffect, useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FooterS } from './FooterStyle';
import { Link, useLocation } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';

const FooterBottom = () => {
  return (
    <>
      <FooterS>
        {/* <Link to='/test'> */}
        <span>© 2023 BlankHouse, Inc.</span>
        {/* </Link> */}
        <span>Privacy</span>
        <span>Terms</span>
        <span>Sitemap</span>
      </FooterS>
      <FooterS>
        {/* <span>
          <LanguageIcon />
          <p>English(CA)</p>
        </span>
        <span>
          <p>$</p>
          <p>CAD</p>
        </span>
        <span>
          <FacebookIcon />
        </span>
        <span>
          <TwitterIcon />
        </span> */}
        <span>
          <HelpIcon />
        </span>
        <span className='last'>
          <Link
            to='https://instagram.com/dev_blk?igshid=OGQ5ZDc2ODk2ZA=='
            target='_blank'
          >
            <InstagramIcon />
          </Link>
        </span>
      </FooterS>
    </>
  );
};

export default FooterBottom;
