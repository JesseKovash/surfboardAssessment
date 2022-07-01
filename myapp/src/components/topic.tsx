import * as React from 'react';
import { useState } from 'react';
import { Topic } from "../interfaces";

type OneTopicProps =  {
  details: Topic;
  index: number;
  showDetails: (id: string) => void;
};

export const OneTopic: React.FC<OneTopicProps> = ({details, index, showDetails}) => {

  return (
  <div className='oneTopic' onClick={()=>showDetails(`${index}`)}>
    <div className='topic'>TOPIC: {details.name}</div>
    <div className='details' id={`${index}`}>
      <p>Title: {details.title}</p>
      <p>Length(mins): {details.timeEst}</p>
      <p>Description: {details.description}</p>
    </div>
  </div>)
};
