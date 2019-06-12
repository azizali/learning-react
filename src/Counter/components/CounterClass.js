import React from 'react'

export default class Counter extends React.Component{
  // Class Properties
  constructor(props){
    super(props)

    this.state = {
      counter: this.props.initialVal
    }
    
    // Pre binding to this
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    console.log('i was clicked')
    const newCounter = this.state.counter + 1

    this.setState({
      counter: newCounter
    })
  }

  render(){
    return(
      <div>
        CounterClass:
        <button onClick={this.handleClick}>{this.state.counter}</button>
        <button onClick={this.handleClick}>{this.state.counter}</button>
      </div>
    )
  }
}
// export default ({initialVal}) =>{
//   const [counterOne, setCounterOne] = useState(0)
//   const [name, setName] = useState()
//   const [user, setUser] = useState({
//     fullName: 'Sales Force',
//     age: 50,
//     address: [{
//       street: 'one',
//       phone: [123, 456]
//     },{
//       street: 'two'
//     }]
//   })

//   const handleAgeChange = (event) =>{
//     // MUTATING THE STATE
//     // user.age = event.target.value
    
//     setUser({
//       ...user,
//       age: event.target.value
//     })
//   }

//   const handlePhoneChange = (event)=>{
//     const newUser = produce(user, (draftUser)=>{
      
//       draftUser.address[0].phone[0] = Number(event.target.value)
//       draftUser.address[1].phone = [Number(event.target.value)]
//     })
    
//     setUser(newUser)

//     // const newNumber = event.target.value
//     // setUser({
//     //   ...user,
//     //   address: [...user.address, {
//     //     street: user.address[0].street,
//     //     phone: [newNumber, user.address[0].phone[1]]
//     //   }, user.address[1]]
//     // })
//   }
  
//   const handleClickOne = ()=>{
//     setCounterOne(counterOne + 1)
//   }
  
//   const handleNameChange = (event)=>{
//     // BAD
//     // name = event.target.value
//     // RIGHT WAY
//     setName(event.target.value)
//   }

//   return (
//     <div>
//       Value of name: {name}
//       {JSON.stringify(user, null, 4)}
//       <label htmlFor="name">
//         Name
//         <input
//           id="name"
//           type="text"
//           value={name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <hr/>
//       <label htmlFor="phone">
//         Phone
//         <input
//           id="phone"
//           type="number"
//           value={user.address[0].phone[0]}
//           onChange={handlePhoneChange}
//         />
//       </label>
//       <hr/>
//       <label htmlFor="age">
//         Age: {user.age}
//         <input
//           id="age"
//           type="number"
//           value={user.age}
//           onChange={handleAgeChange}
//         />
//       </label>
//       <button onClick={handleClickOne}>{counterOne}</button>
//     </div>
//   )
// }