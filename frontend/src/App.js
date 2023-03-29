import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './Redux/Actions/actions';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchData('http://localhost:8080/api/product/fetch-products', 'GET'));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {console.log(data.products)}
      successfully fetched
    </div>
  );
}

export default App;
