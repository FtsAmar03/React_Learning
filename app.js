const element=React.createElement("h1",{id:"first",className:"rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello Coder Army");
//CDN->Content Delivery Network
const element2=React.createElement("h1",{id:"first",className:"rahul",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"Maza Aaya Mujhe");
// ReactDOM.render(Element,document.getElementById('root'));

const div1=React.createElement('div',{},[element,element2]);


//create root
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
//render krne ka tarika
// Reactroot.render(element);
// Reactroot.render(element2);
Reactroot.render(div1);

// <div>
//     <div>
//         <h1>
//             <p>Aur bhai kaise hai</p>
//         </h1>
//     </div>

// </div>

// //JSX