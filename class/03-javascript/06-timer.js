// const getToken = () => {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("code").innerText = token
//     let count = 10
//     setInterval(() => {
//         if (count >= 0) {
//             console.log(count)
//             count = count - 1
//             document.getElementById("num").innerText = count
//         }
//     }, 1000)
// }

// const getToken = () => {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("code").innerText = token
//     let count = 180
//     setInterval(() => {
//         if (count >= 0) {
//             const minutes = Math.floor(count / 60)
//             const seconds = count % 60
//             console.log(minutes + ":" + seconds)
//             count = count - 1
//             document.getElementById("num").innerText = count
//         }
    
//     }, 1000)
// }

const getToken = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("code").innerText = token
    let count = 180
    setInterval(() => {
        if (count >= 0) {
            const minutes = String(Math.floor(count / 60)).padStart(2, "0")
            const seconds = String(Math.floor(count % 60)).padStart(2, "0")
            document.getElementById("num").innerText = minutes + ":" + seconds
        }
        
        if(count < 59){
            document.getElementById("num").style="color:red"
        }
        if(count === 0 ) {
            document.getElementById("www").setAttribute("disabled", "true")
        }
        count = count - 1
    }, 1000)
}