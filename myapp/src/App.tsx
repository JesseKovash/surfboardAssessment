
import * as React from 'react';
import { useState } from 'react';
import { hot } from "react-hot-loader/root";
import { Topic } from "./interfaces";
import { Topics } from "./components/topics";
import { OneTopic } from "./components/topic";
import { CreateNewTopic } from "./components/createNewTopic";
import { EditTopic } from './components/editTopic';

const App: React.FC = () => {
  const test = [
    {
    name: 'Test',
    title: 'Test Topic 1',
    timeEst: 60,
    description: 'A Meeting To Test'
    },
    {
    name: 'Test2',
    title: 'Test Topic 2',
    timeEst: 90,
    description: 'A Second Meeting To Test'
  }
]
  const [topicInfo, setTopicInfo] = useState<Topic[]>(test);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [changeIndex, setChangeIndex] = useState<number>(Infinity);
  const [targetChange, setTargetChange] = useState<Topic>(topicInfo[0]);

  function createNewTopic() {
    !createModal ? setCreateModal(true) : setCreateModal(false);
  }

  function showEdit(id: number) {
    if (!editModal) setEditModal(true);
    let target = topicInfo.slice(id, id + 1)[0];
    setTargetChange(target);
    setChangeIndex(id);
  }

  function addTopic(newTopic: Topic) {
    let pastTopics = topicInfo;
    setCreateModal(false)
    setTopicInfo([...pastTopics, newTopic])
  }

  function deleteTopic(index: number) {
    let alteredList = [...topicInfo];
    alteredList.splice(index, 1);
    setTopicInfo(alteredList);
  }

  function editTopic(edited: Topic) {
    let pastTopics = [...topicInfo];
    pastTopics.splice(changeIndex, 1, edited)
    setEditModal(false);
    setChangeIndex(Infinity);
    setTopicInfo([...pastTopics])
  }

  return (
    <>
      <div>
        <h1>Current Topics</h1>
        <div className='topic-container'>
          <Topics topicInfo={topicInfo} deleteTopic={deleteTopic} showEdit={showEdit}/>
        </div>
      </div>
      <button onClick={createNewTopic}>Add New Topic</button>
      {createModal ? <CreateNewTopic addTopic={addTopic} /> : null}
      {editModal ? <EditTopic editTopic={editTopic} targetChange={targetChange}/> : null}
    </>

        );
};

export default hot(App);
