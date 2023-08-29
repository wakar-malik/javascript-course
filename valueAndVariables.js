const obj = {
  userName: "steven",
  userLastName: "Smith",
  userAddress: "America",
  userEmail: "user@gmail.com",
  userDOB: "28, 04, 1998",
};

// alphabets = ABCDEFGHIJKL....
// smallest unit of alphabets a, b, c

const uName =
  obj.userName.slice(0, 1).toUpperCase() +
  obj.userName.slice(1, obj.userName.length - 1) +
  obj.userName.slice(-2).toUpperCase();

for (let i = 1; i <= 5; i++) {
  console.log(uName);
}
