export class StudentForm {
  private form: HTMLFormElement;
  private firstName: HTMLInputElement;
  private lastName: HTMLInputElement;
  private email: HTMLInputElement;
  private phone: HTMLInputElement;
  private website: HTMLInputElement;
  private companyName: HTMLInputElement;

  constructor() {
    this.form = document.querySelector('#student-form')! as HTMLFormElement;
    this.firstName = this.form.querySelector('#firstName')! as HTMLInputElement;
    this.lastName = this.form.querySelector('#lastName')! as HTMLInputElement;
    this.email = this.form.querySelector('#email')! as HTMLInputElement;
    this.phone = this.form.querySelector('#phone')! as HTMLInputElement;
    this.website = this.form.querySelector('#website')! as HTMLInputElement;
    this.companyName = this.form.querySelector(
      '#companyName'
    )! as HTMLInputElement;
  }

  private validateForm() {
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const website = this.website.value;
    const companyName = this.companyName.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // any number of digits, spaces, +, (, ), -
    const phoneRegex = /^[\d\s+()-]+$/;

    const firstNameError = !firstName
      ? 'First name is required'
      : firstName.length < 2
      ? 'First name must be at least 2 characters!'
      : firstName.length > 20
      ? 'First name must be at most 20 characters!'
      : '';
    const lastNameError = !lastName
      ? 'Last name is required'
      : lastName.length < 2
      ? 'Last name must be at least 2 characters!'
      : lastName.length > 20
      ? 'Last name must be at most 20 characters!'
      : '';
    const emailError = !email
      ? 'Email is required'
      : !emailRegex.test(email)
      ? 'Invalid Format'
      : '';
    const phoneError = !phone
      ? 'Phone is required'
      : !phoneRegex.test(phone)
      ? 'Invalid Format'
      : '';
    const websiteError = !website
      ? 'Website is required'
      : website.length < 2
      ? 'Website must be at least 2 characters!'
      : website.length > 20
      ? 'Website must be at most 20 characters!'
      : '';
    const companyNameError = !companyName
      ? 'Company name is required'
      : companyName.length < 2
      ? 'Company name must be at least 2 characters!'
      : companyName.length > 20
      ? 'Company name must be at most 20 characters!'
      : '';

    const errors = {
      firstNameError,
      lastNameError,
      emailError,
      phoneError,
      websiteError,
      companyNameError,
    };

    return errors;
  }

  submitForm() {
    const {
      firstNameError,
      lastNameError,
      emailError,
      phoneError,
      websiteError,
      companyNameError,
    } = this.validateForm();
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const website = this.website.value;
    const companyName = this.companyName.value;

    if (
      firstNameError === '' &&
      lastNameError === '' &&
      emailError === '' &&
      phoneError === '' &&
      websiteError === '' &&
      companyNameError === ''
    ) {
      return {
        isValidated: true,
        values: {
          firstName,
          lastName,
          email,
          phone,
          website,
          companyName,
        },
      };
    }

    return {
      isValidated: false,
      values: {
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        phone: phoneError,
        website: websiteError,
        companyName: companyNameError,
      },
    };
  }

  changeForm() {
    const {
      firstNameError,
      lastNameError,
      emailError,
      phoneError,
      websiteError,
      companyNameError,
    } = this.validateForm();

    const formErrors = {
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      phone: phoneError,
      website: websiteError,
      companyName: companyNameError,
    };

    return formErrors;
  }
}
