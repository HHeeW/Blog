export const validateEmail = email => {
    const regex = /^[0-9a-zA-Z/]([-_\]?[0-9a-zA-Z])*@[0-9a-zA-Z/]([-_\]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
}
export const validatePassword = password =>{ 
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    return regex.test(password)
}
export const removeWhitespace = text => {
    const regex = /\s/g;
    return text.replace(regex, '');
}