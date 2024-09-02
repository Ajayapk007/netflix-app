
export const checkValidData = (email, password) => {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmail) return "Please enter a valid email address"
    if(!isPassword) return "Your password must contain between 4 and 60 characters"

    return null;
};

export const checkValidEmail = (email) => {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    if(!isEmail) return "Please enter a valid email address"

    return null;
};