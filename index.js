const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
 //   tutorials.map( line => {
  //   const Letterintials = line.split(' ');
  //   const capitalizeLetterIntials = Letterintials.map( 
  //     Letterintials => Letterintials.charAt(0).toUpperCase() + Letterintials.slice(1))
  // });

  // const feedback = capitalizeLetterIntials.join(' ');
  // return feedback;


// const titleCased = () => {
//   return tutorials.map( CasedArray => {
//     CasedArray.split(' ').map(CasedArray => CasedArray.charAt(0).toUpperCase() + CasedArray.slice(1)).join('')
//   })
// };


const titleCased = () => {
  // tutorials.map((newArray)=>{
  //   newArray.split(' ').
  // })
  return tutorials.map(newArray => (newArray.split(' ').map(newArray => newArray.charAt(0).toUpperCase() + newArray.slice(1))).join(" "))
}

