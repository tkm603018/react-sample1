import { useState } from "react";
import { createContainer } from 'unstated-next';

export const Tweet = () => {

  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [inputImages, setInputImages] = useState([]);
  const [images, setImages] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [index, setIndex] = useState(null);
  const [check, setCheck] = useState(false);
  const createdAt = new Date();

  const handleTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setInputDesc(e.target.value);
  };

  const handleImages = (e) => {
    let fileList = Array.from(e.target.files);
    console.log("fileList", fileList);
    fileList.forEach((files, i) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        setImages(prevImages => [...prevImages, reader.result]);
      };

      reader.readAsDataURL(files);
    });
  };

  const Add = (e) => {
    e.preventDefault();

    if (inputTitle === '' || inputDesc === '') {
      window.alert('Please enter a title or description. ');
      return
    }

    const preList = Pull()? Pull():[];
    const newTweet = {
      title: inputTitle,
      desc: inputDesc,
      images: images,
      createdAt: {
        year: createdAt.getFullYear(),
        month: createdAt.getMonth() + 1,
        date: createdAt.getDate(),
        hours: createdAt.getHours(),
        minutes: createdAt.getMinutes(),
        seconds: createdAt.getSeconds()
      },
      check:check,
    };
    
    const tweetList = [...preList, newTweet];

    console.log('newTweet', newTweet);

    Store(tweetList);

    setTweets(tweetList);
    setTitle('');
    setInputTitle('');
    setDesc('');
    setInputDesc('');
    setImages([]);
    setInputImages([]);
    setCheck(false);
  };
  
  const Store = (tweetList) => {
    localStorage.setItem("key", JSON.stringify(tweetList));
    console.log('Store tweetList', tweetList);
  };

  const Pull = () => {
    var data = localStorage.getItem("key");
    let List = JSON.parse(data);
    return (List)
  };

  const Select = (e, i) => {
    const index = i;
    const selectedTitle = Pull()[index].title;
    const selectedDesc = Pull()[index].desc;

    setCheck(e.target.checked);

    if (!e.target.checked) {
      setIndex(null);
      setInputTitle('');
      setInputDesc('');
      return
    } else {
      setIndex(index);
    }
    
    console.log('selected index:', index);

    setInputTitle(selectedTitle);
    setInputDesc(selectedDesc);
    
  };

  const Edit = (e) => {
    if (index !== null && check) {

      const updateTweet = {
        title: inputTitle,
        desc: inputDesc,
        images: images,
        createdAt: {
          year: createdAt.getFullYear(),
          month: createdAt.getMonth() + 1,
          date: createdAt.getDate(),
          hours: createdAt.getHours(),
          minutes: createdAt.getMinutes(),
          seconds: createdAt.getSeconds()
        },
        check:check,
      };

      const target = Pull();

      target.splice(index, 1, updateTweet);
      console.log('update index:', index);

      Store(target);
      setTweets(target);
    } else {
      setIndex(null);
    }
    window.location.reload(true);
  }
  const Delete = () => {
    if (index !== null && check) {
      const target = Pull();

      target.splice(index, 1);

      Store(target);
      setTweets(target);

      console.log('delete index:', index);
    } else {
      setIndex(null);
    }
    window.location.reload(true);
  };

  return {
    inputTitle, inputDesc, inputImages, tweets, title, desc, images, index, check, createdAt, 
    handleTitle, handleDesc, handleImages, Add, Store, Pull, Select, Edit, Delete, 
  }

}
export const TweetContainer = createContainer(Tweet);
