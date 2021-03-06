import * as React from 'react';
import { useState } from 'react';
import { Topic } from "../interfaces";
import { OneTopic } from './topic';

type TopicsProps = {
  topicInfo: Topic[] | [];
  deleteTopic: (index: number) => void;
  showEdit: (id: number) => void;
};

export const Topics: React.FC<TopicsProps>= ({topicInfo, deleteTopic, showEdit}) => {
  function showDetails(id: string) {
    const target = document.getElementById(id) as HTMLDivElement;
    target.style.display === 'none' || target.style.display === '' ?
      target.style.display = 'block' :
      target.style.display = 'none';
  }

  let topicList;

  if (topicInfo.length > 0) {
    topicList = topicInfo.map((oneTopic, index)=><div key={oneTopic.title}><OneTopic details={oneTopic} index={index} showDetails={showDetails} deleteTopic={deleteTopic} showEdit={showEdit}/></div>)
  } else  {
    topicList = null;
  }

  return <>{topicList}</>
};
