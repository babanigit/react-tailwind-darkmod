
import React,{ useState} from 'react'

const Main = (props) => {
  const theme = props.theme
  // const setTheme = props.setTheme


  // one way
  const [currTheme, setCurrTheme]= useState(theme)
  function changeTheme() {
    console.log("clicked") 
    if (currTheme === "light") {
      props.setTheme("dark")
      setCurrTheme("dark")
    }
    else {
      props.setTheme("light")
      setCurrTheme("light")
    }    
  }

  // // another way
  // function changeTheme() {
  //   console.log("onclick clicked")


  //   if (theme === "light") {
  //     props.setTheme("dark")
  //   }

  //   else if (theme ==="dark"){
  //     props.setTheme("light")
  //   }
  // }

  return (
    <>
    <div className=' flex justify-center p-7'>
      <button className=' bg-gray-500 text-white rounded-md px-6 py-1' onClick={changeTheme}>
        click
      </button>
    </div>



      <div className=' grid '>

        <div className='flex justify-center' style={{ color: theme.text, background: theme.body }}> hello main </div>

        <p className='flex justify-center text-center px-56' style={{ color: theme.text, background: theme.body }}>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ratione aut ex at nesciunt saepe temporibus a! Ab, recusandae dicta sapiente corporis quisquam quae eius dolores quod aperiam autem. Dolorem.
        </p>

      </div>

    </>
  )
}

export default Main