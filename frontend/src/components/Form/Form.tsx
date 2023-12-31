import MaskedInput from 'react-text-mask';
import { useForm } from 'react-hook-form';
import './Form.styles.scss';
import { useRef } from 'react';
import { FormData, FormProps } from './Form.types';
import { fetchUsers } from './Form.service';

function Form({ setUsers, setCount, setError }: FormProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      number: '',
    },
    mode: 'onChange',
  });

  const previousController = useRef<AbortController | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    setUsers(null);
    setCount(5);
    setError(null);

    try {
      await fetchUsers({ data, setUsers, reset, previousController, setError });
    } catch (error) {
      setError('A network error occurred. Please try again.');
      setUsers(null);
      reset();
    }
  });

  return (
    <form className="form" onSubmit={onSubmit}>
      <p className="form__title">Search Form</p>
      <label className="form__label" htmlFor="email">
        <span className="form__label-text">
          E-mail<span className="required">*</span>:
        </span>
        <div className="form__input-container">
          <input
            className="form__input"
            {...register('email', {
              required: 'Enter the e-mail',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
                message: 'Invalid e-mail',
              },
            })}
            id="email"
            name="email"
            type="text"
            placeholder="jim@gmail.com"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue('email', e.target.value)
            }
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
      </label>
      <label className="form__label" htmlFor="number">
        <span className="form__label-text">Number:</span>
        <div className="form__input-container">
          <MaskedInput
            className="form__input"
            {...register('number', {
              pattern: {
                value: /^\d{2}-\d{2}-\d{2}$/,
                message: 'Invalid number',
              },
            })}
            mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
            id="number"
            name="number"
            type="text"
            placeholder="22-11-22"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue('number', e.target.value)
            }
            aria-invalid={errors.number ? 'true' : 'false'}
          />
          {errors.number && (
            <span className="error-message">{errors.number.message}</span>
          )}
        </div>
      </label>
      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
}

export { Form };
