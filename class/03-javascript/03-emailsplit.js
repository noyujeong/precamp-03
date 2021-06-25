// app:1 The page delivered both an 'X-Frame-Options' header and a 'Content-Security-Policy' header with a 'frame-ancestors' directive. Although the 'X-Frame-Options' header alone would have blocked embedding, it has been ignored.
const classmates = ["철수", "영희" "훈이"]
// VM326:1 Uncaught SyntaxError: Unexpected string
const classmates = ["철수", "영희", "훈이"]
undefined
classmates[0]
// "철수"
classmates[1]
// "영희"
const email = "codecamp@gmail.com"
// undefined
email.length
// 18
email[0]
// "c"
email[1]
// "o"
email[3]
// "e"
email.includes('@')
// true
email.includes("@")
// true
email.split("@")
// (2) ["codecamp", "gmail.com"]
email.split("@")[0]
"codecamp"
email.split("@")[1]
// "gmail.com"
const front = email.split("@")[0]
// undefined
const back = email.split("@")[1]
// undefined
// front
// "codecamp"
// back
// "gmail.com"
const newFront = []
// undefined
newFront.push(front[0])
// 1
// newFront
// ["c"]
newFront.push(front[1])
// 2
newFront.push(front[2])
// 3
newFront.push(front[3])
// 4
newFront
// (4) ["c", "o", "d", "e"]
newFront.push("*")
// 5
newFront.push("*")
// 6
newFront.push("*")
// 7
newFront.push("*")
// 8
newFront
// (8) ["c", "o", "d", "e", "*", "*", "*", "*"]0: "c"1: "o"2: "d"3: "e"4: "*"5: "*"6: "*"7: "*"length: 8__proto__: Array(0)
newFront.join
// ƒ join() { [native code] }
newFront.join()
// "c,o,d,e,*,*,*,*"
concat(newFront.join(""), "@", back)
// VM3136:1 Uncaught ReferenceError: concat is not defined
    // at <anonymous>:1:1
// (anonymous) @ VM3136:1
newFront.join("") + "@" + back
// "code****@gmail.com"
const result = newFront.join("") + "@" + back
// undefined
// result
"code****@gmail.com"