import * as React from 'react';
import { AppMode } from './App';
import './Footer.css';

interface FooterProps {
  onClick(mode: AppMode): void;
  currentMode: AppMode;
}

const Footer: React.SFC<FooterProps> = ({ onClick, currentMode }) => {
  return (
    <div className="footer">
      <div className="mode-button" onClick={() => onClick(AppMode.all)}>
        <span
          className={
            strcmp(AppMode.all, currentMode)
              ? 'mode-button-text-active'
              : 'mode-button-text'
          }
        >
          {AppMode.all}
        </span>
      </div>
      <div className="mode-button" onClick={() => onClick(AppMode.finished)}>
        <span
          className={
            strcmp(AppMode.finished, currentMode)
              ? 'mode-button-text-active'
              : 'mode-button-text'
          }
        >
          {AppMode.finished}
        </span>
      </div>
      <div className="mode-button" onClick={() => onClick(AppMode.unfinished)}>
        <span
          className={
            strcmp(AppMode.unfinished, currentMode)
              ? 'mode-button-text-active'
              : 'mode-button-text'
          }
        >
          {AppMode.unfinished}
        </span>
      </div>
    </div>
  );
};

const strcmp = (str1: string, str2: string) => str1 === str2;

export default Footer;
