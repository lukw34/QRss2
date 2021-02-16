enum EmailErrorMessages {
  PASSWORD_IS_MANDATORY = 'Password is mandatory field',
  INVALID_RE_PASSWORD = 'Password and RePassword must be the same',
  PASSWORD_LENGTH = 'Password should be at least 6 characters'
}
export default (value : {
  password: string | undefined,
  rePassword: string  | undefined
} | undefined): string | null => {
    const {password = '', rePassword = ''} = value || {};
    if (password.length === 0) {
        return EmailErrorMessages.PASSWORD_IS_MANDATORY;
    }
    if (password.length < 6) {
        return EmailErrorMessages.PASSWORD_LENGTH;
    }
    if (password !== rePassword) {
        return EmailErrorMessages.INVALID_RE_PASSWORD;
    }

    return null;
};
