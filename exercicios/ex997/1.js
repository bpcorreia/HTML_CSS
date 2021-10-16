

function isPassword(password) {
    //const regex = /^(([a-zA-Z\-0-9])+[a-zA-Z])+[&%$#£€£@€]/
    const regex = /[A-Za-z0-9_]+[^A-Za-z0-9_]|[^A-Za-z0-9_]+[A-Za-z0-9_]/
    //const regex = /[^A-Za-z0-9_]/
    return  regex.test(password);
}

console.log(isPassword('b$'));
