let str = `
010-123-1234
will1234@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
I will be happy fox Will.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

console.log(
  str.match(/(?<=@).{1,}/g) //@는 별다른 의미가 없다.
)
