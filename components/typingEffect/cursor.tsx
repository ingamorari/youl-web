import { FC } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';
import PropTypes from 'prop-types';

interface ICursorProps {
  className?: string;
  cursor?: string;
}

export const Cursor: FC<ICursorProps> = ({ className, cursor = '|' }) => {
  return (
    <span className={classNames(className, styles.typedCursor)}>{cursor}</span>
  );
};

Cursor.propTypes = {
  cursor: PropTypes.string,
  className: PropTypes.string,
};
