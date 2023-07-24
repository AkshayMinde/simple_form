import React, {useState} from "react";

const App = () => {

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // above is like brute-force method it will take more space and time

    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName:'',
        email: ''
    });

    // spread operator denoted by (...) can be used to fill the form automatically in console not in actual
    // const updateFirstName = (event) => {
    //     // setFirstName(event.target.value);
    //     setUserDetails({
    //         firstName: event.target.value,
    //         lastName: userDetails.lastName,
    //         email: userDetails.email
    //     });
    // }

    // const updateLastName = (event) => {
    //     // setLastName(event.target.value);
    //     setUserDetails({
    //         firstName: userDetails.firstName ,
    //         lastName: event.target.value,
    //         email: userDetails.email
    //     });
    // }

    // const updateEmail = (event) => {
    //     // setEmail(event.target.value);
    //     setUserDetails({
    //         firstName: userDetails.firstName ,
    //         lastName: userDetails.lastName ,
    //         email: event.target.value
    //     });
    // }

    const updateUserDetails = (event) => {

        if (event.target.className === 'firstName') {
            setUserDetails({
                lastName: userDetails.lastName,
                firstName: event.target.value,
                email: userDetails.email
            });
        }
        else if (event.target.className === 'lastName'){
            setUserDetails({
                lastName: event.target.value,
                firstName: userDetails.firstName,
                email: userDetails.email
            })
        }
        else if( event.target.className === 'email'){
            setUserDetails({
                email: event.target.value,
                lastName: userDetails.lastName,
                firstName: userDetails.firstName
            })
        }
    }

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(userDetails.firstName, userDetails.lastName, userDetails.email);
    }

    // controlled inputs are used to keep the values of useState and inputs same by adding value attributes to inputs
    return(
        <>
            <div className="container">
                <h1>Hello {userDetails.firstName} {userDetails.lastName }</h1>
                <div>{userDetails.email}</div>
                <form onClick={formSubmit}>
                    <input className="firstName" value={userDetails.firstName} onChange={updateUserDetails} placeholder="firstName"></input>
                    <input className="lastName" value={userDetails.lastName} onChange={updateUserDetails} placeholder="lastName"></input>
                    <input className="email" value={userDetails.email} onChange={updateUserDetails} placeholder="email"></input>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default App;