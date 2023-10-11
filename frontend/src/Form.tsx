import MaskedInput from 'react-text-mask';
import { useForm } from 'react-hook-form';
import './Form.css';

type FormData = {
  email: string;
  number: string;
};

function Form() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <p className="form__title">Search Form</p>
      <label htmlFor="email">
        <span>
          E-mail<span className="required">*</span>:
        </span>
        <div className="input-container">
          <input
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
      <label htmlFor="number">
        <span>Number:</span>
        <div className="input-container">
          <MaskedInput
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
