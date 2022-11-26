import styles from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import logo from '../../public/LogoYoull.svg';
import youll from '../../public/Bitmap.svg';
import { TypingEffect } from '../typingEffect/typingEffect';

export const HomeBanner = () => {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={classNames('container', styles.textContainer)}>
          <div className={styles.logoBlock}>
            <div className={styles.bannerTitle}>
              <div>
                <Image className={styles.logo} src={logo} alt="logo" />
              </div>

              <TypingEffect
                className={styles.typingText}
                text={[
                  'express your world',
                  'empower & inspire',
                  'discover what inspires',
                  'spark magic in others',
                ]}
              ></TypingEffect>
            </div>
          </div>
          <div className={styles.textBlock}>
            <h1>From the people that engineered the Headspace App</h1>
            <p>
              A solution for anyone to rapidly build a{' '}
              <span className={styles.textWrap}>cost-effective</span> app to
              share their knowledge and passion
            </p>
            <h2>Want to see a demo of our no-code solution?</h2>
            <h3>
              Drop us a line at{' '}
              <a href="mailto:hello@youll.com">hello@youll.com</a>
            </h3>
          </div>
          <div>
            <Image className={styles.youllImage} src={youll} alt="youll" />
          </div>
        </div>
      </div>
    </>
  );
};
