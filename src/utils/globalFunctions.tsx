export default function validatePassword (input: string) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(input);
    const hasLowerCase = /[a-z]/.test(input);
    const hasNumber = /\d/.test(input);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(input);

    return (
        input.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar
    );
};