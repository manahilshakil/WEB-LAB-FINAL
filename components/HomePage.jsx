import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../slices/emojiSlice';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const status = useSelector((state) => state.categories.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Categories</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error loading categories</p>}
      <ul>
        {categories.map((category) => (     
            <Link to={`/details/${category.name}`}></Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
