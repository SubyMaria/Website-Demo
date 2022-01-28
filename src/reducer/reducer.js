let initialObject={
  content:{}
}


let reducer=(state=initialObject,action)=>{
  console.log(action.payload)
  switch (action.type) {
      case "Login":
          return{...state, content:action.payload}
          
          break;
  
      default:
          return state;
          break;
  }

}
 export default reducer;
 export {initialObject};