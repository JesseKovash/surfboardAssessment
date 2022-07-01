import * as React from 'react';
import { useState } from 'react';
import { Topic } from "../interfaces";

type CreateNewTopicProps = {
  addTopic: (newTopic: Topic) => void;
};

export const CreateNewTopic: React.FC<CreateNewTopicProps>= ({addTopic}) => {

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(0);
  const [desc, setDesc] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let id = e.currentTarget.id;
    let val = e.currentTarget.value;
    if (id === 'name') setName(val);
    if (id === 'title') setTitle(val);
    if (id === 'time') setTime(+val);
    if (id === 'desc') setDesc(val)
  }

  function processData(e: React.SyntheticEvent) {
    e.preventDefault()
    const newTopicFinal = {
        name: name,
        title: title,
        timeEst: time,
        description: desc
    };
    addTopic(newTopicFinal)
  }

  return (
    <>
    <form onSubmit={(e)=>processData(e)}>
      <label>Topic Name</label>
      <input id="name" type="text" value={name} onChange={(e)=>handleInputChange(e)}></input>
      <label>Title</label>
      <input id="title" type="text" value={title} onChange={(e)=>handleInputChange(e)}></input>
      <label>Time(minutes)</label>
      <input id="time" type="number" value={time} min="0" max="120" onChange={(e)=>handleInputChange(e)}></input>
      <label>Description</label>
      <input id="desc" type="text" value={desc} onChange={(e)=>handleInputChange(e)}></input>
      <button type='submit'>Submit</button>
    </form>
    </>
  )
};