enum EmailErrorMessages {
  EMAIL_IS_MANDATORY = 'Email is mandatory field',
  INVALID_FORM_OF_EMAIL = 'Email is malformed'
}

const EMAIL_RE =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (email: string | undefined = '') => {
    if (email.length === 0) {
        return EmailErrorMessages.EMAIL_IS_MANDATORY;
    }
    if (!EMAIL_RE.test(email)) {
        return EmailErrorMessages.INVALID_FORM_OF_EMAIL;
    }

    return null;
};
