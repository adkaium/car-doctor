import  { useContext } from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, lodear} = useContext(AuthContext);
    
    if(lodear){
        return (
          <>
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          </>
        );
     }
    if(user.email){
        return children
    }
    return (<Navigate to='/login' replace></Navigate>);
};

export default PrivetRoute;