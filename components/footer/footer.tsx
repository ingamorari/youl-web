import classNames from 'classnames';
import styles from './style.module.scss';

export const Footer = () => {
  return (
    <div className={classNames('container', styles.footerContainer)}>
      <div className={styles.copyright}>2022 © wearewip.com</div>
    </div>
  );
};
