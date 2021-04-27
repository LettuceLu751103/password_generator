function generate_password(userPasswordFormat) {

  // 所有的密碼產生元素

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'

  const upperCaseLetters = lowerCaseLetters.toUpperCase()

  const numberLetters = '1234567890'

  const symbolLetters = '!@#$%^&*()_+|}{:"?><~`\|'


  // 將密碼元素由字串轉換為陣列
  const lowerCaseLettersArray = lowerCaseLetters.split('')
  const upperCaseLettersArray = upperCaseLetters.split('')
  const numberLettersArray = numberLetters.split('')
  const symbolLettersArray = symbolLetters.split('')



  // 將使用者需要的密碼格式放入 userNeedLetters 陣列中
  let userNeedLetters = []

  if (userPasswordFormat.inLowerCase === 'on') {
    userNeedLetters = userNeedLetters.concat(lowerCaseLettersArray)
  }

  if (userPasswordFormat.inUpperCase === 'on') {
    userNeedLetters = userNeedLetters.concat(upperCaseLettersArray)
  }

  if (userPasswordFormat.inNumberCase === 'on') {
    userNeedLetters = userNeedLetters.concat(numberLettersArray)
  }

  if (userPasswordFormat.isSymbols === 'on') {
    userNeedLetters = userNeedLetters.concat(symbolLettersArray)
  }

  if (userPasswordFormat.exCharacters) {
    userNeedLetters = userNeedLetters.filter((letter) => {
      return !userPasswordFormat.exCharacters.includes(letter)
    })
  }
  // console.log(Math.floor(Math.random() * userNeedLetters.length))
  let pwd = ''
  for (let i = 0; i < userPasswordFormat.passwordLength; i++) {
    pwd += userNeedLetters[Math.floor(Math.random() * userNeedLetters.length)]
  }

  return pwd
}

module.exports = generate_password