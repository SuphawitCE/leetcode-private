const solve = (emails) => {
  const trimmedEmails = new Map();

  for (let i = 0; i < emails.length; i++) {
    const [local, domain] = emails[i].split("@");
    let trimmedLocal = "";

    for (let j = 0; j < local.length; j++) {
      if (local[j] === ".") {
        continue;
      } else if (local[j] === "+") {
        break;
      } else {
        trimmedLocal += local[j];
      }
    }
    const trimmedEmail = `${trimmedLocal}@${domain}`;

    if (!trimmedEmails.has(trimmedEmail)) {
      trimmedEmails.set(trimmedEmail, true);
    }
  }

  return trimmedEmails.size;

  // return new Set(emails.map((email) => (
  //     trim(email)
  // ))).size;

  // emails.forEach((x, i, a) => {
  //     a[i] = x.replace(/\+.+(?=@)|\.(?=.+@)/gi, '')
  // });
  // return new Set(emails).size;
};

console.log(
  solve([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
console.log(solve(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]));
console.log(
  solve(["test.email+alex@leetcode.com", "test.email.leet+alex@code.com"])
);
