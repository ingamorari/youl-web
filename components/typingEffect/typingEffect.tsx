import { FC, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Cursor } from './cursor';

enum ActionsEnum {
  ERASE = 'erase',
  TYPE = 'type',
}

interface ITypingEffectProps {
  className?: string;
  speed?: number;
  eraseSpeed?: number;
  typingDelay?: number;
  eraseDelay?: number;
  staticText?: string;
  text: string[];
  cursor?: string;
  cursorClassName?: string;
  displayTextRenderer?: Function;
}

export const TypingEffect: FC<ITypingEffectProps> = ({
  className,
  text,
  cursorClassName,
  cursor,
  speed,
  eraseSpeed,
  eraseDelay,
  typingDelay,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>('');
  const [action, setAction] = useState<ActionsEnum>(ActionsEnum.TYPE);

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    startTyping();
  }, [currentIndex]);

  useEffect(() => {
    const currentText = text[currentIndex];

    if (action === ActionsEnum.TYPE) {
      if (displayText) {
        if (currentText.length > displayText.length) {
          timeoutRef.current = setTimeout(type, speed);
        } else {
          setAction(ActionsEnum.ERASE);
          timeoutRef.current = setTimeout(erase, eraseDelay);
        }
      }
    } else {
      if (displayText.length === 0) {
        if (text.length === currentIndex + 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        timeoutRef.current = setTimeout(erase, eraseSpeed);
      }
    }
  }, [displayText]);

  const startTyping = () => {
    setAction(ActionsEnum.TYPE);
    timeoutRef.current = setTimeout(type, typingDelay);
  };

  const type = () => {
    setDisplayText(text[currentIndex].substring(0, displayText.length + 1));
  };

  const erase = () => {
    setDisplayText(
      text[currentIndex].substring(-displayText.length, displayText.length - 1)
    );
  };

  return (
    <span className={className}>
      <div>
        {displayText} <Cursor cursor={cursor} className={cursorClassName} />
      </div>
    </span>
  );
};

TypingEffect.defaultProps = {
  speed: 250,
  eraseSpeed: 100,
  eraseDelay: 2000,
  typingDelay: 2000,
};

TypingEffect.propTypes = {
  speed: PropTypes.number.isRequired,
  className: PropTypes.string,
  eraseSpeed: PropTypes.number.isRequired,
  typingDelay: PropTypes.number.isRequired,
  eraseDelay: PropTypes.number.isRequired,
  staticText: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  cursor: PropTypes.string,
  cursorClassName: PropTypes.string,
  displayTextRenderer: PropTypes.func,
};
