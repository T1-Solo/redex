let result = document.querySelector(".result");

const Errors = () => {
  let h1 = document.createElement("h1");
  h1.textContent = "topilmadi";
  result.appendChild(h1);
};
// const Error = () => {
//     let h2 = document.createElement("h1");
//     h2.textContent = "topilmadi";
//     num.appendChild(h2);
//   };
let error = new Error();
error.message = "topilmadi";

let name1 = document.querySelector(".name");
let number = document.querySelector(".number");
let num = document.querySelector(".num")
let template = document.querySelector("template").content;




function handleKey(event) {
  let filter = [];
  let rejax = new RegExp(event.target.value, "gi");
  filter = object.filter((user) => user.name.match(rejax));
  renders(filter);
}
name1.addEventListener("keyup", handleKey);


const renders = (arr) => {
    if (arr.length !== 0) {
      result.innerHTML = null;
      for (let i = 0; i < arr.length; i++) {
        let clone = template.cloneNode(true);
        let h1 = clone.querySelector("h1");
        h1.textContent = arr[i].name;
        console.log(h1);
        result.appendChild(h1);
      }
    } else {
      result.innerHTML = null;
      Errors();
      throw error;
    }
  };
  renders(object);


  
const render = (arr) => {
    if (arr.length !== 0) {
      num.innerHTML = null;
      for (let i = 0; i < arr.length; i++) {
        let clone = template.cloneNode(true);
        let h2 = clone.querySelector("h2");
        h2.textContent = arr[i].number;
        console.log(h1);
        num.appendChild(h1);
      }
    } else {
      num.innerHTML = null;
      Errors();
      throw error;
    }
  };





