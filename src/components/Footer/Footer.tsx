import React, { memo } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as IconInstagram } from '../../images/socials/instagram.svg';
import { ReactComponent as IconTelegram } from '../../images/socials/telegram.svg';
import { ReactComponent as IconYoutube } from '../../images/socials/youtube.svg';
import { ReactComponent as IconTwitter } from '../../images/socials/twitter.svg';
import clsx from 'clsx';
import { useLocation } from 'react-router';

// Re-using header translations, allowing overwrite with footer specific ones
const navLinks = [
  {
    title: ['Footer-Proposals', 'Header-Proposals'],
    path: 'https://vote.beefy.finance',
  },
  {
    title: ['Footer-News', 'Header-News'],
    path: 'https://beefy.com/articles/',
  },
  {
    title: ['Footer-Docs', 'Header-Docs'],
    path: 'https://docs.beefy.finance',
  },
  {
    title: 'Footer-Audit',
    path: 'https://github.com/beefyfinance/beefy-audits',
  },
  {
    title: 'Footer-MediaKit',
    path: 'https://beefy.com/media-kit/',
  },
];

const socialLinks = [
  {
    title: 'Instagram',
    path: 'https://instagram.com',
    Icon: IconInstagram,
  },
  {
    title: 'Telegram',
    path: 'https://t.me/beefyfinance',
    Icon: IconTelegram,
  },

  {
    title: 'Twitter',
    path: 'https://twitter.com/beefyfinance',
    Icon: IconTwitter,
  },
  {
    title: 'Youtube',
    path: 'https://youtube.com/beefyfinance',
    Icon: IconYoutube,
  },
];

const useStyles = makeStyles(styles);

// Memo: Static footer, no need to re-render when parent does
export const Footer = memo(function () {
  const classes = useStyles();
  const { t } = useTranslation();

  const location = useLocation();
  const isOnDashboard =
    location.pathname.includes('dashboard') || location.pathname.includes('treasury');

  return (
    <div className={clsx(classes.footer, { [classes.userOnDashboard]: isOnDashboard })}>
      <div>
        <ul className={classes.nav}>
          {navLinks.map(({ title, path }) => (
            <li key={path} className={classes.navItem}>
              <a href={path} target="_blank" rel="noopener" className={classes.navLink}>
                {t(title)}
              </a>
            </li>
          ))}
        </ul>
        <ul className={classes.nav}>
          {socialLinks.map(({ title, path, Icon }) => (
            <li key={path} className={classes.navItem}>
              <a
                href={path}
                target="_blank"
                rel="noopener"
                className={classes.navLink}
                title={t(title)}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.footerlogo}>
        <Link to="/">
          <img alt="Cross FARM" src={require(`../../images/bifi-logos/footer-logo.png`).default} />
        </Link>
        <div>Copyright © 2022 - Cross.Farm</div>
      </div>
    </div>
  );
});

// This keeps the footer at the bottom of the page when the page is under 100vh
export const WrappedFooter = memo(function WrappedFooter({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperTop}>{children}</div>
      <div className={classes.footerDiv}>
        <Container maxWidth="lg">
          <Footer />
        </Container>
      </div>
    </div>
  );
});
