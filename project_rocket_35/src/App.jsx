import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // state === 'trang thai'
  const [count, setCount] = useState(0);

  const xinchao = 'hello world';
  const ShowName = () => {
    setCount(count+1);
  }
  const getInfo = (param) => {
    console.log(param, '====== parent');
  }

  return (
    <>
      <h2
        className='title'
        onClick={ShowName}
      >
        xin chao {count}
      </h2>
      <p style={{ color: "red" }}>
        style inline
      </p>
      <NewComponent child={count} child2 ={'xyz'} callback={getInfo}/>
    </>
  )
}

const NewComponent = function({child, child2, callback}) {
  const getInfoChild = () => {
    callback('this is child')
  }
  return (
    <div>
      hello NewComponent {child} : {child2};
      <button onClick={getInfoChild}>getInfo</button>
    </div>
  )
}

export default App
