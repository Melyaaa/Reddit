import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.css';
import { CommentControls } from './CommentControls';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';

interface Values {
  value: string
}

type Props = {
  onSubmit: (values: Values) => void;
}

export function CommentForm() {
  const [value, setValue] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const [valueError, setValueError] = React.useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setTouched(true)

    setValueError(validateValue());

    const isFormVaild = !validateValue();
    if (!isFormVaild) return;

    alert('The form has sent!');
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function validateValue() {
    if (value.length <= 3) return 'Введите больше 3-х символов';
    return '';
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
        aria-invalid={valueError ? 'true' : undefined}
      />
      <CommentControls />
      {touched && valueError && (<div>{valueError}</div>)}
    </form>
  );
}

export function CommentFormFormik() {
  return (
    <Formik
      initialValues={{ value: '' }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (values.value.length <= 3) {
          errors.value = 'Введите больше 3-х символов';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <Form className={styles.form}>
        <Field
          as="textarea"
          name="value"
          className={styles.input}
          aria-invalid={false} 
        />
        <CommentControls />
        <ErrorMessage name="value" component="div" />
      </Form>
    </Formik>
  );
}
