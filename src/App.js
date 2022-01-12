/*eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
  
  let [blogTitle, blogTitleState] =  useState([ '남자 코트 추천a',  '남자 코트 추천b', '남자 코트 추천c'] ); //es6 destruting
  let [blogDate, blogDateState] =  useState(['2월 18일', '2월 18일' , '2월 18일']);

  let [count, countState] = useState(0);

  let posts = "블로그 글"
  let postStyle = {color : 'blue', fontSize:'30px'};

  function changeTitle() {
    var newArray = [...blogTitle]; //deep copy
    //newArray[0] = '여자코트 추천'
    var tmp = newArray[0];
    newArray.push(tmp);
    newArray.shift();
    console.log(newArray);
    blogTitleState(newArray);

  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ changeTitle }>버튼</button>
      <div className='list'>
        <h3>{blogTitle[0]} <span onClick={()=>{ countState(count + 1)}}>👍</span> {count} </h3>
        <p> {blogDate[0]} </p>
        <hr></hr>
      </div>
      <div className='list'>
        <h3>{blogTitle[1]}</h3>
        <p> {blogDate[1]} </p>
        <hr></hr>
      </div>
      <div className='list'>
        <h3>{blogTitle[2]}</h3>
        <p> {blogDate[2]} </p>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
