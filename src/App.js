import React, { useState } from 'react'
import './App.css'

const App = () => {




  // const onSubmit = () => {
  //   let userAdjective = prompt("Please provide an Adjective");
  //   setItem((oldItem) =>{
  //     return [...oldItem, userAdjective]
  //   });
  //   console.log(item)
  // }

  const [item, setItem] = useState([])
  const onSubmit = (e) => {
    let user = prompt("Add Checkbox");
    e.preventDefault();
    setItem((oldItem) => {
      return [...oldItem, user]
    });
    // console.log(item);
  }

  const [getItem, setGetItem] = useState([])
  const getonSubmit = (e) => {
    let user = prompt("Add Checkbox");
    e.preventDefault();
    setGetItem((oldItem) => {
      return [...oldItem, user]
    });
    // console.log(item);
  }

  const [items, setItems] = useState([])
  const onSubmits = (e) => {
    let user = prompt("Please provide an Adjective");
    e.preventDefault();
    setItems((oldItem) => {
      return [...oldItem, user]
    });
    // console.log(item);
  }

  const [focus, setFocus] = useState([])

  const onSubmitFocus = (e) => {
    let userFocus = prompt("Please add Focus");
    e.preventDefault();
    setFocus((oldItem) => {
      return [...oldItem, userFocus]
    });
  }

  return (
    <>
      <div className="parent">
        <div className="firstChild">
          <h1>Sector</h1>

          <div className="childone">
            <h1>Primary Focus</h1>
            <div className="indent">
              <div>
                <input type="checkbox" name="vehicle1" value="Bike" />
                <label for="vehicle1"> I have a bike</label>
              </div>

              {
                item.map((val, ind) => {
                  return <div key={ind}><input type="checkbox" name="vehicle1" value="Bike" />
                    <label for="vehicle1">{val}</label></div>

                  // <li>{val}</li>
                })
              }
              <div className="button">
                <button onClick={onSubmit} className="add">+ Add Another</button>
              </div>
            </div>
          </div>
          <div className="childone">
            <h1>Secondry Focus</h1>
            <div className="indent">
              <div>
                <input type="checkbox" name="vehicle1" value="Bike" />
                <label for="vehicle1"> I have a bike</label>
              </div>

              {
                getItem.map((val, ind) => {
                  return <div key={ind}><input type="checkbox" name="vehicle1" value="Bike" />
                    <label for="vehicle1">{val}</label></div>

                  // <li>{val}</li>
                })
              }
              <div className="button">
                <button onClick={getonSubmit} className="add">+ Add Another</button>
              </div>
            </div>
          </div>

          {/* <div className="childone">
            <h2>Second Sector</h2>
            <div>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <label for="vehicle1"> I have a bike</label>
            </div>
            <div className="button">
              <button onClick={onSubmit} className="add">+ Add Another</button>
            </div>
          </div> */}

          {
            focus.map((val, ind) => {
              return <div className="childone" key={ind}>
                <h2>{val}</h2>
            <div className="indent">
                <div>
                  <input type="checkbox" name="vehicle1" value="Bike" />
                  <label for="vehicle1"> xyz</label>
                </div>
                {
                  items.map((val, ind) => {
                    return <div key={ind}><input type="checkbox" name="vehicle1" value="Bike" />
                      <label for="vehicle1">{val}</label></div>

                    // <li>{val}</li>
                  })
                }
                <div className="button">
                  <button onClick={onSubmits} className="add">+ Add Another</button>
                </div>
                </div>
              </div>
            })
          }


          <div className="button">
            <button onClick={onSubmitFocus} className="add">+ Add Another Focus</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
