import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return <div className='text-center mt-3'>
            <Spinner animation="border" variant='success'/>;
        </div>
}

export default Loader;