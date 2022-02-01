import React from 'react';
import logo from './logo.svg';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, decremented, amountAdded} from './features/counter/counterSlice';
import './App.css';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import { useState } from 'react';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  
  const [numDogs , setNumDogs] = useState(10);
// using a query hook automatically fetches data and returns query values
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  function handleClick() {
    dispatch(incremented());
    // dispatch(decremented());
    // dispatch(amountAdded(3));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>
          count is: {count}
        </button>
        <div>
          <p>Dogs to fetch</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <p>Number of Dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </header>
    </div>
  );
}

export default App;
