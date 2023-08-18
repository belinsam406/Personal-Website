let inputlength = 20;
let includeLower = true;
let includeUpper = false;
let includeNums = false;
let includeSpec = false;
function generateRandomPassword(length, includeLower, includeUpper, includeNums, includeSpec) {
    let charset = "";
    const charsetLower = "abcdefghijklmnopqrstuvwxyz";
    const charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charsetNums = "0123456789";
    const charsetSpec = "!@#$%^&*()_+";

    if(includeLower) charset += charsetLower;
    if(includeUpper) charset += charsetUpper;
    if(includeNums) charset += charsetNums
    if(includeSpec) charset += charsetSpec;

    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Generate a random password with a length of 12 characters
  const randomPassword = generateRandomPassword(inputlength, includeLower, includeUpper, includeNums, includeSpec);
  console.log(randomPassword);