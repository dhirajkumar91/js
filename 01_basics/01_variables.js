const accountId = 148339
let accountEmail = "dhiraj@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2 // not allowed because it is declared as const above so it can't be changed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "dk@google.com"
accountPassword = "2843342"
accountCity = "Bangaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);