import React, {useState} from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    notes?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Apaar',
      age: 25,
      url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC560BAQHMnA03XDdf3w%2Fcompany-logo_200_200%2F0%2F1519855918965%3Fe%3D2147483647%26v%3Dbeta%26t%3DJ3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs&imgrefurl=https%3A%2F%2Fae.linkedin.com%2Fcompany%2Fimg%3Ftrk%3Dpublic_profile_experience-item_profile-section-card_image-click&tbnid=5ZLpMjDl9bjI_M&vet=12ahUKEwjnwYD508_4AhXIgmMGHXbaA2MQMygCegUIARDdAQ..i&docid=OozExqoeJ4py3M&w=200&h=200&q=img&ved=2ahUKEwjnwYD508_4AhXIgmMGHXbaA2MQMygCegUIARDdAQ',
      notes: 'Coder'
    }
  ])

  return (
    <div className="App">
      <h1>People that are invited to the party</h1>
      <List people = {people}/>
      <AddToList people = {people} setPeople = {setPeople}/>
    </div>
  );
}

export default App;
