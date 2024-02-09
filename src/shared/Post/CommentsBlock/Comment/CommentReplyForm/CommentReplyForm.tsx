import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentreplyform.css';
import { replyContext } from '../../../../Context/replyContext';
import { CommentControls } from '../../../../CommentForm/CommentControls';

interface ICommentReplyForm {
  username: string;
}

export function CommentReplyForm({username}: ICommentReplyForm) {
  const { value, onChange } = React.useContext(replyContext);
  const [initialValueSet, setInitialValueSet] = React.useState(false);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (!initialValueSet){
      onChange(event.target.value);
      setInitialValueSet(true);
    } else {
      onChange(event.target.value);
    }
  }

  const inputRef = React.useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function validateValue() { 
    if (value.length <= 3) return 'Введите больше 3-х символов';
    return '';
  }

  const isFormVaild = !validateValue()

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea value={initialValueSet ? value : `${username}, `} ref={inputRef} className={styles.input} onChange={handleChange}/>
      <CommentControls />
    </form>
  );
}
