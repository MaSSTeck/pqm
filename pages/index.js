import withData from '../src/config/apollo';
// import withData from '../lib/apollo'

// fetch("https://questions.aloc.ng/api/q?subject=chemistry")
//   .then(data => data.json())
//   .then(res =>console.log(res))

export default withData(props => (
  <div>Hello People</div>
  
))
