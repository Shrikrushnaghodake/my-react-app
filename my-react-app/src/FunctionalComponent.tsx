// Functional Component

// function buttonClick() { 
//  const handleClick = () => {
//     alert("Button Clicked");
//     return <button onClick={handleClick}>Click Me</button>; // event handler
//  }
//     return handleClick();   
// }

// export default buttonClick;



// conditional Rendering
// function UserStatus({isLoggedIn}: {isLoggedIn: boolean}) {

//     if (isLoggedIn) {
//         return <div>Welcome back!</div>;
//     } else {
//         return <div>Please log in.</div>;
//     }
// }

// export default UserStatus;


// List and key

// function ItemList() {
//  const item = ["c","c++","java","python","javascript"]; /// list defined
//  return (
//     <>
//        <ul>
//         {item.map((itm, index) => (   // map is user to render list
//             <li key={index}>{itm}</li> // key is used to give unique identity to each list item and keys help indenitify which items have changed, are added, or are removed which item need to changed , add or removed
//         ))}
//     </ul>
//     </>
 
//  );

// }

// export default ItemList;


// Fragments

// function FragmentsDemo() {
//     return (
//         <>
//             <h1>This is a heading</h1>
//             <p>This is a paragraph.</p>
//         </>
//     );
// }
// export default FragmentsDemo;



