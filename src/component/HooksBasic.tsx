import { useEffect, useMemo, useReducer, useState } from 'react';
import './App.css';

// mounting
// updating
// unmounting

// useState, useReducer, useEffect, useMemo, useCallBack

function reducer(state, action) {
  switch (action.type) {
    case "add_age": {
      return {
        name: state.name,
        age: state.age + 1,
      }
    }
    case "change_name": {
      return {
        name: action.nextName,
        age: state.age,
      }
    }
  }

  throw new Error("unknow Error" + action.type)
}

const fetchData = async (limit) => {
  const response = fetch(`https://api.com/data/limit?=${limit}`);
  return response.json();
}

function HooksBasic() {
  const [user, dispatch] = useReducer(reducer, { name: "arbaz", age: 20 });
  const [data, setData] = useState([
    {
      name: "arbaz",
      age: 20,
    },
    {
      name: "aman",
      age: 18,
    },
    {
      name: "aditya",
      age: 24,
    }
  ])
  const [apiData, setApiData] = useState([]);

  const handleAgeIncrement = () => {
    dispatch({
      type: "add_age",
    })
  }

  const handleNameChange = (e) => {
    dispatch({
      type: "change_name",
      nextName: e.target.value
    })
  }

  const limit = 20;

  // useMemo 
  const sortedData = useMemo(() => {
    return data.sort((a, b) => a.age - b.age)
  }, [data])
  
  const menoziedApiData  = useMemo(() => {
    return fetchData(limit)
  }, [limit]);

  useEffect(() => {
    menoziedApiData.then((res) => setApiData(res))
  }, [menoziedApiData])


  const [count, setCount] = useState(0);

  const sum = (a, b = count) => a+b

  const handleCount = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <>
      <form>
        <input name="name" value={user.name} type="text" onChange={handleNameChange} />
        <button onClick={handleAgeIncrement}>add age value</button>
        <p>name {user.name} age {user.age}</p>
        <button onClick={handleCount}>add age value</button>
      </form>
    </>
  )
}

export default HooksBasic
