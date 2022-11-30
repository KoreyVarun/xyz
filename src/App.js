import React , {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'


class App extends Component{
    constructor(){
        super()
        this.state={
            fullName:'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changeUsername=this.changeUsername.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.onSubmit= this.onSubmit.bind(this)

    }


    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered={
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/app/signup',registered)
            .then(response=>console.log(response.data))
        
        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })    
    }


    render(){
        return(
            <div className='d-flex'>
               <div className='container'>
    
                <h1 className='justify-content-center pb-3 pt-5'>Login</h1>
                <h3 >Enter your credentials to access your account. </h3>
            
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <label for="Full name">Full name</label>
                            <input type='text'
                            placeholder="Full Name"
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group m-3'
                            />
                            <label for="User Name">User Name</label> 
                            <input type='text'
                            placeholder="User Name"
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group m-3'
                            /> 
                            <label for="Email Address">Email Address</label>
                            <input type='text'
                            placeholder="xyz@gmail.com"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group m-3'
                            /> 
                            <label for="Password">Password</label>
                            <input type='text'
                            placeholder="**********"
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group m-3'
                            /> 

                            <input type='Login' className='btn btn-danger btn-block m-3' value='Login'/>
                            
                        </form>
                    </div>
                </div>
                </div>
                <div className='container pt-5' >
                <lottie-player
  src="https://assets7.lottiefiles.com/packages/lf20_YrdJ2K8cQY.json"
  background="transparent"
  speed={1}
  style={{ width: 500, height: 500 }}
  loop=""
  
  autoPlay=""
/>

                </div>

            </div>
        );
    }
}

export default App;