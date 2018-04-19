import * as React from 'react';
import './Header.css';

interface HeaderProps {
  input: string;
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  onEnter(e: React.KeyboardEvent<HTMLInputElement>): void;
}

const Header: React.SFC<HeaderProps> = ({ input, onChange, onEnter }) => {
  return (
    <div className="header">
      <input
        type="text"
        onChange={onChange}
        value={input}
        className="header-text"
        placeholder="type something..."
        onKeyUp={onEnter}
      />
    </div>
  );
};

export default Header;
