import styles from './style.module.scss';

export const NewsletterSection = () => {
  return (
    <>
      <div className="container">
        <div className={styles.newsletterContainer}>
          <h2 className={styles.title}>Once a month newsletter updates</h2>
          <div className={styles.content}>
            <input
              className={styles.emailInput}
              type="email"
              placeholder="Email Address"
            />
            <button className={styles.submitBtn} type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
