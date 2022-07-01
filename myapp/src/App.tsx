
import * as React from 'react';
import { useState } from 'react';
import { hot } from "react-hot-loader/root";
import { Topic } from "./interfaces";
import { Topics } from "./components/topics";
import { OneTopic } from "./components/topic";
import { CreateNewTopic } from "./components/createNewTopic"

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
  const [createModal, setCreateModal] = useState(false)

  function createNewTopic() {
    !createModal ? setCreateModal(true) : setCreateModal(false)
  }

  function addTopic(newTopic: Topic) {
    let pastTopics = topicInfo;
    setTopicInfo([...pastTopics, newTopic])
  }

  return (
    <>
      <div>
        <h1>Current Topics</h1>
        <div className='topic-container'>
          <Topics topicInfo={topicInfo}/>
        </div>
      </div>
      <button onClick={createNewTopic}>Add New Topic</button>
      {createModal ? <CreateNewTopic addTopic={addTopic}/> : null}
    </>

        );
};

export default hot(App);
