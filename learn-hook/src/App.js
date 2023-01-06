import { useState } from "react";
import Content from "./Content";
// function App() {
//   const [cars, setCars] = useState(["Bugatti", "Roll-Royce", "Maybach"]);

//   const handleUpdate = () => {
//     setCars((prev) => {
//       return [...prev, "Lamborghini"];
//     });
//   };

//   console.log(cars);

//   return (
//     <div>
//       <h1>ReactJS</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }

// two-way binding

// lay phan thuong
// const gifts = [
//   'CPU I9',
//   'RAM 32GB RGB',
//   'Keyboard'
// ]
//  const [gift, setGift] = useState();

//  const randomGift = () => {
//    const index = Math.floor(Math.random() * gifts.length);
//    setGift(gifts[index]);
//  };

// submit form
//  const [name, setName] = useState("");
//  const [email, setEmail] = useState("");

//  const handleSubmit = () => {
//    // Call API
//    console.log({
//      name,
//      email,
//    });
//  };

//Response API handle radio button and checkbox
// const courses = [
//   {
//     id: 1,
//     name: "HTML,CSS",
//   },
//   {
//     id: 2,
//     name: "Javascript",
//   },
//   {
//     id: 3,
//     name: "Java",
//   },
// ];
// function App() {
//   const [checked, setChecked] = useState([]);
//   const handleCheck = (id) => {
//     setChecked((prevCheck) => {
//       const isChecked = checked.includes(id);
//       if (isChecked) {
//         return checked.filter(item => item !== id)
//       }
//       return [...prevCheck,id]
//     });
//   };

//   // const handleSubmit = () => {
//   //    console.log({id:checked});
//   // };

//   return (
//     <div style={{ padding: 32 }}>
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input type="checkbox"
//           checked={checked.includes(course.id)}
//           // onChange={() => setChecked(course.id)}
//           onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button>Thay Doi</button>
//     </div>
//   );
// }

// Todo List
// function App(){

//   return (
//     <div style={{padding:32}}>
//       <input />
//       <button>Add</button>
//     </div>
//   )
// }

//////////////////////// useEffect ///////////////////
// dung khi update dom , call API , dom event
// 1. useEffect(callback) (it dung)
// - Goi callback moi khi re-render
// - Goi callback sau khi component them vao render
// 2. useEffect(callback,[])
// - chi goi callback 1 lan sau khi component mount
// 3. useEffect(callback,[deps])
// Diem chung callback se goi lai sau khi mount
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      {show && <Content />}
    </div>
  );
}

export default App;
