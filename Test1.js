
let passwordCrypd = function encryption(password) {
    warning.innerText = null
    ok.innerText = null
    password = password.replace(/\s+/g, '')
    if(password === null || password.length < 6) {
       warning.innerText = "Ошибка, короткий пароль"
    }
    else{
        let pasArray = password.split('')
        let cryptedLevel1 = []            
        for (let i = 0; i < pasArray.length; i++) {
            if(pasArray[i] >= 0) {
               cryptedLevel1 += pasArray[i]*2
            }
            else{
               cryptedLevel1 += pasArray[i] + pasArray[i]
            }
        }
        let cryptedLevel2 = cryptedLevel1.split("").reverse().join("")
        // console.log("Введенный пароль: "+ pas)
        // console.log("Пароль, где цифры умножены на 2, а буквы удвоены: " + cryptedLevel1)
        // console.log("Зашифрованный пароль: " + cryptedLevel2)
        ok.innerText = "Зашифрованный пароль: " + cryptedLevel2
    }   
}

