import { useState } from 'react';
import './App.css';

const info = [
  { id: 1, images: 'srcimagesimg-1.jpg', title: 'Ibrahim', age: '19 years' },
  {
    id: 2,
    images: 'srcimagesimg-2.jpg',
    title: 'Hester Hogan',
    age: '32 years',
  },
  {
    id: 3,
    images: 'srcimagesimg-3.jpg',
    title: 'Larry Little',
    age: '36 years',
  },
  { id: 4, images: 'srcimagesimg-4.jpg', title: 'Sean Walsh', age: '34 years' },
  {
    id: 5,
    images: 'srcimagesimg-5.jpg',
    title: 'Lola Gardner',
    age: '29 years',
  },
];

function App() {
  const [index, setIndex] = useState(5);

  const change = () => {
    setIndex(0);
  };

  info.map((item) => {
    const { id, images, title, age } = item;
  });

  return (
    <>
      <div className="main">
        <div className="container">
          <h1 className="title">5 Birthday today</h1>
          <div className="content-container">
            <li key={item.id}>
              <div class="person">
                <img src={images} alt="Ibrahim" />
                <div class="name">
                  <h4 className="name">{title}</h4>
                  <p className="name">{age}</p>
                </div>
              </div>
            </li>
          </div>
          {/* <div class="person">
              <img src={'/src/images/img-2.jpg'} alt="Ibrahim" />
              <div class="name">
                <h4 className="name">Hester Hogan</h4>
                <p className="name">32 years</p>
              </div>
            </div>
            <div class="person">
              <img src={'/src/images/img-3.jpg'} alt="Ibrahim" />
              <div class="name">
                <h4 className="name">Larry Little</h4>
                <p className="name">36 years</p>
              </div>
            </div>

            <div class="person">
              <img
                src={'/src/images/img-4.jpg'}
                alt="Ibrahim"
                className="name4"
              />
              <div class="name">
                <h4 className="name">Sean Walsh</h4>
                <p className="name">34 years</p>
              </div>
            </div>

            <div class="person">
              <img
                src={'/src/images/img-5.jpg'}
                alt="Ibrahim"
                className="name5"
              />
              <div class="name">
                <h4 className="name">Lola Gardner</h4>
                <p className="name">29 years</p>
              </div>
            </div> */}
        </div>

        <button onClick={change} className="btn-clear" id="btn-clear">
          Clear All
        </button>
      </div>
    </>
  );
}

export default App;
