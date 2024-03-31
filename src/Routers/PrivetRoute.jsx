import  { useContext } from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, lodear} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
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
    if(user?.email){
        return children
    }
    return (<Navigate to='/login' state={location.pathname} replace></Navigate>);
};

export default PrivetRoute;