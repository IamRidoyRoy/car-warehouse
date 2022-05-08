import { Toast, ToastContainer } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init'
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, error] = useSendEmailVerification(auth);

    if (error) {
        return (
            <div>
                <p className='text-center text-danger'>Error: {error.message}</p>
            </div>
        );
    }

    if (loading) {
        return "Loading..."
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div className='d-flex justify-content-center align-items-center'>
            <div>
                <h3 className='text-danger'>Your Email is not Verified</h3>
                <h2 className='text-success'>Please Verify your email address</h2>
                <button className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        Toast('Sent email');
                    }}
                >
                    Send again
                </button>
                <ToastContainer></ToastContainer>
            </div>

        </div >
    }
    return children;

};

export default RequireAuth;