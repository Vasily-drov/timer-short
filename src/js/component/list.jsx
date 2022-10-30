import React, {useState} from "react";

//include images into your bundle

//create your first component
const List = () => {

	let [tasks, setTasks] = useState([])

	let pushValue = (e) => {
		e.preventDefault();
		let clearInput = e.target[0].value;
		setTasks((current) => {
		  return [...current, clearInput];
		});
		e.target[0].value = "";
	}

    function deleteTask(id) {
        setTasks((current)=>{
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
		  {tasks.map((task, index) => {
			return <div >
					<li id = {index} key={index} >{task} 
						<button onClick={()=>deleteTask(index)}>X</button>
					 </li>
				</div>;
		  })}
		</ul>
	  </div>
	);
};

export default List;
