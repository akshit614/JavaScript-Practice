// wrapping components in other components or card Wrappig
  
import './App.css'

function App() {
  
  return (
    <>
      {/* One method to do it  */}
      {/* <CardWrapper innnerComponent={<TextComponent />} /> <br /> */}
      {/* <CardWrapper innnerComponent={<TextComponent2 />} /> */}

      {/* Better way to do it */}
      <CardWrapper>
        <TextComponent/>
      </CardWrapper>   

      <CardWrapper>
        <TextComponent2/>
      </CardWrapper>   
      
    </>
  )
}

// function CardWrapper({innnerComponent}){

//   return <div style={{border: "2px solid black", padding: 10}}>
//     {innnerComponent}
//   </div>

// }


function TextComponent(){
  return <div>
    hi There
  </div>
}

function TextComponent2(){
  return <div>
    hi There
  </div>
}



// Optimal way to do it
// using Children prop
function CardWrapper({children}){

  return <div style={{border: "2px solid black", padding: 10}}>
    {children}
  </div>

}

export default App
