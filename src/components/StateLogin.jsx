import Input from './Input';
import { useInput } from '../hooks/useInput';

function isEmail(value) {
  return value.includes('@');
}

function isNotEmpty(value) {
  return value.trim() !== '';
}

function minLength(value, min) {
  return value.trim().length > min;
}

export default function Login() {
  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => {
    return isEmail(value) && isNotEmpty(value);
  });
  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => minLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return 'error';
    }
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailHasError && 'Please enter a valid email'}
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordHasError && 'Please enter valid password'}
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
