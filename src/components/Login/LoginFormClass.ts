export class LoginForm {
  private form: HTMLFormElement;
  private email: HTMLInputElement;
  private password: HTMLInputElement;

  constructor() {
    this.form = document.querySelector('#login-form')! as HTMLFormElement;
    this.email = this.form.querySelector('#email')! as HTMLInputElement;
    this.password = this.form.querySelector('#password')! as HTMLInputElement;
  }

  private validateForm() {
    const email = this.email.value;
    const password = this.password.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const emailError = !email
      ? 'Email is required'
      : !emailRegex.test(email)
      ? 'Invalid Format'
      : '';

    const passwordError = !password
      ? 'Password is required'
      : password.length < 6
      ? 'Password must be at least 6 characters!'
      : password.length > 12
      ? 'Password must be at most 12 characters!'
      : '';

    const errors = {
      emailError,
      passwordError,
    };

    return errors;
  }

  submitForm() {
    const { emailError, passwordError } = this.validateForm();
    const email = this.email.value;
    const password = this.password.value;

    if (emailError === '' && passwordError === '') {
      return {
        isValidated: true,
        values: {
          email,
          password,
        },
      };
    }

    return {
      isValidated: false,
      values: {
        email: emailError,
        password: passwordError,
      },
    };
  }

  changeForm() {
    const { emailError, passwordError } = this.validateForm();

    const formErrors = {
      email: emailError,
      password: passwordError,
    };

    return formErrors;
  }
}
