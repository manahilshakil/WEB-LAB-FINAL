import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmojiDetails } from '../slices/detailSlice';
import HomePage from './HomePage';

const DetailPage = () => {
  const emojiDetails = {
    "name": "person raising both hands in celebration ≊ person raising hands",
    "category": "smileys and people",
    "group": "body",
    "htmlCode": ["\u0026#128588;"],
    "unicode": ["U+1F64C"]
  };

  const dispatch = useDispatch();
  const status = useSelector((state) => state.details.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmojiDetails(emojiDetails));
    }
  }, [dispatch, emojiDetails, status]);

  return (
    <div>
      <h1>Emoji Details</h1>
      {status === 'loading' && <p>Loading details...</p>}
      {status === 'failed' && <p>Error loading details</p>}
      {status === 'succeeded' && (
        <div>
          <p>Name: {emojiDetails.name}</p>
          <p>Category: {emojiDetails.category}</p>
        </div>
      )}
      <button onClick={HomePage}>Back</button>
    </div>
  );
};

export default DetailPage;
