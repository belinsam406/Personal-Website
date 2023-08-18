function generateRandomPassword() { //, includeLower, includeUpper, includeNums, includeSpec
  length = parseInt(document.getElementById("length").value, 10);
  const includeSpecial = document.getElementById("includeSpecial").checked;

  let charset = "";
  let testset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
  const charsetLower = "abcdefghijklmnopqrstuvwxyz";
  const charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charsetNums = "0123456789";
  const charsetSpec = "!@#$%^&*()_+";

  // if(includeLower) charset += charsetLower;
  // if(includeUpper) charset += charsetUpper;
  // if(includeNums) charset += charsetNums
  // if(includeSpec) charset += charsetSpec;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * testset.length);
    password += testset.charAt(randomIndex);
  }
  console.log(password);
  document.getElementById("password").textContent = "Generated Password: " + password;
}

  // Generate a random password with a length of 12 characters
  // const randomPassword = generateRandomPassword(inputlength, includeLower, includeUpper, includeNums, includeSpec);
  // console.log(randomPassword);
