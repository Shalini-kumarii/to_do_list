import react, { useState } from 'react';
const Form = (props) => {

    const [newList,setNewList]=useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
         e.preventDefault();
        if(newList.length === 0){
            return;
        }
        const toNewList={
            text:newList,
            complete:false
        }
        setList([...list,toNewList]);
        setNewList("");
        
     
    };
    const handleDelete=(deleteidx) =>{
        const filteredList=list.filter((l,i) =>{
            return i != deleteidx;
        });
        setList(filteredList);
    };

    const handlechecked =(idx) =>
    {
        const UpdatedLists = list.map((l,i) =>{
            if(idx == i){
                // const updatedList={...l,complete: !l.complete};
                // return updatedList;
                l.complete = !l.complete;
            }
            return l;
        });

        setList(UpdatedLists);
    };


    const Addlist= (e) =>{
        setNewList(e.target.value);
    }

    return (
 
        <div>
        <form onSubmit={handleSubmit}>
            <h1>List</h1>
            <div className='justify-content-around'>
                <label>List: </label> 
                <input type="text" onChange={(e) =>{
                    setNewList(e.target.value);
                } } value={newList}/>
            

            <button>Add</button>
            </div>
        </form>
        { list.map((l,index) =>{
            return(
                <div key={index}>
                <input onChange={(e) =>{
                    handlechecked(index);
                }} checked = {l.complete} type ="checkbox" />
                <span>{l.text}</span>
                <button onClick={(e) =>{handleDelete(index)}}>Delete</button>
                </div>
            );
             } )}
             </div>
        
    );
}


export default Form;
