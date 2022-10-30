import React, {useState} from "react";
import Task from "./task.jsx";

//include images into your bundle

//create your first component
const List = () => {
	let [inputValue, setInputValue] = useState([])

	let pushValue = (e) => {
		e.preventDefault();
		let clearInput = e.target[0].value;
		console.log(e.target[0].value);
		setInputValue((current) => {
		  return [...current, clearInput];
		});
		e.target[0].value = "";
	}

    function deleteTask(id) {
        console.log('clicked')
        let a = 'sdfsf'
        setInputValue((current)=>{
            console.log(current)
            return current.filter((item, index)=>{
              return index != id
            })
          })
      }
	
	

	return (
		<div>
		<form onSubmit={pushValue}>
		  <input />
		  <button >+</button>
		</form>
		<ul>
		  {inputValue.map((task, index) => {
			return <Task id = {index} key={index} task={task} onDelete={deleteTask}/>;
		  })}
		</ul>
	  </div>
	);
};

export default List;
