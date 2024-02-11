import React, { useState } from "react";

const Main = (props) => {
  const theme = props.theme;
  // const setTheme = props.setTheme

  // one way
  const [currTheme, setCurrTheme] = useState(theme.name);
  const [keep, setKeep] = useState(true);
  function changeTheme() {
    console.log("clicked");
    if (currTheme === "light") {
      props.setTheme("dark");
      setCurrTheme("dark");
      setKeep(true);
    } else {
      props.setTheme("light");
      setCurrTheme("light");
      setKeep(false);
    }
  }

  return (
    <>
      {/* main div */}
      <div
        className=" grid grid-rows-4 grid-flow-col h-screen w-screen justify-center items-center"
        style={{ background: theme.body, color: theme.text }}
      >
        {/* div 1 */}
        <div
          className={
            "flex row-span-3 w-screen h-full flex justify-evenly items-center"
          }
        >
          <p>hello</p>
          <p>hello2</p>
          <p>hello3</p>
        </div>

        {/* div 2 */}
        <div className=" w-screen h-full flex justify-center items-center">
          <button
            style={{ color: theme.text }}
            className=" h-fit w-fit bg-gray-500 rounded-md px-6 py-1"
            onClick={changeTheme}
          >
            {keep ? "light" : "dark"}
          </button>
        </div>
      </div>

      {/* <div className=' grid '>

        <div className='flex justify-center' style={{ color: theme.text, background: theme.body }}> hello main </div>

        <p className='flex justify-center text-center px-56' style={{ color: theme.text, background: theme.body }}>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ratione aut ex at nesciunt saepe temporibus a! Ab, recusandae dicta sapiente corporis quisquam quae eius dolores quod aperiam autem. Dolorem.
        </p>

      </div> */}
    </>
  );
};

export default Main;
