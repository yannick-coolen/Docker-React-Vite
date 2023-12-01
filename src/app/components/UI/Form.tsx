import { ReactNode } from 'react';

import classes from '../style/Form.module.scss';

interface FormProps {
  headerText?: string;
  children?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit?: any;
}

interface HeaderProps {
  content?: ReactNode;
  textUnderline?: boolean;
}

interface InputProps {
  id: string;
  name?: string;
  placeholder?: string;
  value?: string;
  content?: string;
  width?: 'small' | 'large';
  whitespace?: boolean;
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'time'
    | 'url'
    | 'week';
}

interface TextAreaProps {
  id: string;
  name?: string;
  placeholder?: string;
  value?: string;
  content?: string;
  width?: 'small' | 'large';
  whitespace?: boolean;
  className?: string | CSSModuleClasses
}

export function Form({ children, onSubmit }: Readonly<FormProps>) {
  return (
    <section>
      <form className={`${classes['form-borderstyle-default']}`} onSubmit={onSubmit}>{children}</form>
    </section>
  );
}

export function Header({ content, textUnderline = false }: Readonly<HeaderProps>) {
  return (
    <h2 className={classes['form-header']}>
      {content}
      <div
        className={`${textUnderline ? classes['form-header-underline'] : ''}`}
      ></div>
    </h2>
  );
}

export function Input({
  id,
  content,
  type,
  name,
  placeholder,
  value,
  width, // Set the default value here
  whitespace = false,
}: Readonly<InputProps>) {
  const widthClass = width
    ? `form-input-width-${width}`
    : 'form-input-width-default';

  const section = whitespace ? `${classes['form-section']}` : '';

  return (
    <div className={`${section} ${classes['form-input-container']}`}>
      <div className={classes['form-input-content']}>
        <label htmlFor={id}>{content}</label>
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          className={classes[widthClass]}
        />
      </div>
    </div>
  );
}

export function TextArea({
  id,
  name,
  placeholder,
  value,
  content,
  className,
}: Readonly<TextAreaProps>) {
  return (
    <div>
      <label htmlFor={id}>{content}</label>
      <br />
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        style={{ background: 'white', color: 'black', borderRadius: '5px', padding: '.3rem' }}
        className={`${className}`}
      />
    </div>
  );
}

Form.Header = Header;
Form.Input = Input;
Form.TextArea = TextArea;
