// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const outres = res.data;
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${outres.userId}`);
    const outuser = user.data.name;
    const complete:boolean = outres.completed;
    return{
      owner:`${outuser}`,
      title:`${outres.title}`,
      completed: complete
    };
  }
  catch{
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
