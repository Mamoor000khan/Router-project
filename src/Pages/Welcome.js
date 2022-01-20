import { Route } from 'react-router-dom';
 
const Welcome = ()  => {
    return <section style={{ display: 'grid', justifyContent: 'center'}}>
        <h1 style={{color:'#044599'}}>The Welcome Page</h1>
        <p style={{color:'#044599'}}>welcome, new user!</p>
        <Route path="/welcome/new-user"/>
    </section>;
} 

export default Welcome;