import * as React from 'react';
import { useState } from 'react';
import { Topic } from "../interfaces";

type EditTopicProps = {
  editTopic: (edited: Topic) => void;
  targetChange: Topic;
};

export const EditTopic: React.FC<EditTopicProps>= ({editTopic, targetChange}) => {
  console.log(targetChange)
  const [name, setName] = useState(targetChange.name);
  const [title, setTitle] = useState(targetChange.title);
  const [time, setTime] = useState(targetChange.timeEst);
  const [desc, setDesc] = useState(targetChange.description);

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
    const alteredTopicFinal = {
        name: name,
        title: title,
        timeEst: time,
        description: desc
    };
    setName('');
    setTitle('');
    setTime(0);
    setDesc('')
    editTopic(alteredTopicFinal)
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