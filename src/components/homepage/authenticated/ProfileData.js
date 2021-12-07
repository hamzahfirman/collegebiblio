import { useState, useEffect, React} from "react";
import axios from 'axios';

import BookDisplay from "../../books/book-display";
import { useMsal } from "@azure/msal-react";
import { useHistory } from "react-router-dom";



const API = "http://localhost:3001";

// class ProfileData extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         fetchedData: []
//       };
//     }

//     componentDidMount() {
        
//         axios.post( 
//             API + '/api/users/login', 
//             {email: this.props.email}
//         ).then((response) => this.setState({fetchedData: response.data}));
//         // this.setState({firstName: response.data})});
//         // console.log( FindAUser({email: this.props.email})
//         // .then(response => this.setState({firstName: response})).catch(e => console.log));
//     }

//     render() {
//         const { fetchedData } = this.state;
      
//         if (fetchedData.includes("Please finish")) {
//             return    <BookDisplay />
//             // return <SignUp email={this.props.email} />
//         }
//         else if (fetchedData.length != 0) {
//             const firstName = fetchedData[0].first_name[0].toUpperCase() + fetchedData[0].first_name.slice(1, fetchedData[0].first_name.length);
//             return (
//                 <div>
//                     <h3>Welcome {firstName}!</h3>
//                     <BookDisplay />
//                 </div>
//             )
//         }
//         return (
//             <div>
//                 <center><h1>Loading ... </h1></center>
//             </div>
//         );
//     }
// }

// export default ProfileData;
// // const ProfileData = (email) => {
// //     FindAUser(email).then(response => 
// //     return "hi";
// // }





const ProfileData = (props) => {
    
    const [fetchedData, setFetchedData] = useState([]);
    let history = useHistory()
 

    useEffect(() => {
        axios.post( 
            API + '/api/users/login', 
            {email: props.email}
        ).then((response) => setFetchedData(response.data));
    }, [])
        

   
    
    if (fetchedData.includes("Please finish")) {
         history.push("/signup")
        // return <SignUp email={this.props.email} />
    }
    else if (fetchedData.length != 0) {
        const firstName = fetchedData[0].first_name[0].toUpperCase() + fetchedData[0].first_name.slice(1, fetchedData[0].first_name.length);
       history.push({pathname: "/bookdisplay", state: {firstName: firstName}})
    }
    return (
        <div>
            <center><h1>Loading ... </h1></center>
            {history.push("/bookdisplay")}
        </div>
    );
}


export default ProfileData;


