import { useState } from "react";
import { createContainer } from 'unstated-next';

export const User = () => {

  const [inputName, setInputName] = useState('');
  const [inputMail, setInputMail] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [inputWebsite, setInputWebsite] = useState('');
  const [inputThumbnail, setInputThumbnail] = useState([]);
  const [inputBackground, setInputBackground] = useState([]);

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [thumbnail, setThumbnail] = useState([]);
  const [background, setBackground] = useState([]);
  
  const [index, setIndex] = useState(null);
  const [check, setCheck] = useState(false);
  const createdAt = new Date();

  const [users, setUsers] = useState([]);

  const handleName = (e) => {
    setInputName(e.target.value);
  };

  const handleDesc = (e) => {
    setInputDesc(e.target.value);
  };

  const handleMail = (e) => {
    setInputMail(e.target.value);
  };

  const handlePassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleLocation = (e) => {
    setInputLocation(e.target.value);
  };

  const handleWebsite = (e) => {
  setInputWebsite(e.target.value);
  };
  
  const handleThumbnail = (e) => {
    let fileList = Array.from(e.target.files);
    console.log("fileList", fileList);
    fileList.forEach((files, i) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        setThumbnail(prevImages => [...prevImages, reader.result]);
      };

      reader.readAsDataURL(files);
    });
  };

  const handleBackground = (e) => {
    let fileList = Array.from(e.target.files);
    console.log("fileList", fileList);
    fileList.forEach((files, i) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        setBackground(prevImages => [...prevImages, reader.result]);
      };

      reader.readAsDataURL(files);
    });
  };

  const Add = (e) => {
    e.preventDefault();

    if (inputName === '' || inputMail === '' || inputPassword === '') {
      window.alert('Please enter a name , mail or password. ');
      return
    }

    const preList = Pull()? Pull():[];
    const newUser = {
      name: inputName,
      desc: inputDesc,
      mail: inputMail,
      password: inputPassword,
      location: inputLocation,
      website: inputWebsite,
      thumbnail: thumbnail,
      background: background,
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
    
    const userList = [...preList, newUser];

    console.log('newUser', newUser);

    Store(userList);

    setUsers(userList);
    setName('');
    setInputName('');
    setDesc('');
    setInputDesc('');
    setMail('');
    setInputMail('');
    setPassword('');
    setLocation('');
    setInputLocation('');
    setWebsite('');
    setInputWebsite('');
    setThumbnail([]);
    setInputThumbnail([]);
    setBackground([]);
    setInputBackground([]);
    setCheck(false);
  };
  
  const Store = (userList) => {
    localStorage.setItem("user", JSON.stringify(userList));
    console.log('Store tweetList', userList);
  };

  const Pull = () => {
    var data = localStorage.getItem("user");
    let List = JSON.parse(data);
    return (List)
  };

  const Select = (e, i) => {
    const index = i;
    const selectedName = Pull()[index].name;
    const selectedDesc = Pull()[index].desc;
    const selectedMail = Pull()[index].mail;
    const selectedPassword = Pull()[index].password;
    const selectedLocation = Pull()[index].location;
    const selectedWebsite = Pull()[index].website;

    setCheck(e.target.checked);

    if (!e.target.checked) {
      setIndex(null);
      setInputName('');
      setInputDesc('');
      setMail('');
      setPassword('');
      setLocation('');
      setWebsite('');
      return
    } else {
      setIndex(index);
    }
    
    console.log('selected index:', index);

    setInputName(selectedName);
    setInputDesc(selectedDesc);
    setInputMail(selectedMail);
    setInputPassword(selectedPassword);
    setInputLocation(selectedLocation);
    setInputWebsite(selectedWebsite);
    
  };

  const Edit = (e) => {
    e.preventDefault();
    if (index !== null && check) {

    const updateUser = {
      name: inputName,
      desc: inputDesc,
      mail: inputMail,
      password: inputPassword,
      location: inputLocation,
      website: inputWebsite,
      thumbnail: thumbnail,
      background: background,
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

      target.splice(index, 1, updateUser);
      console.log('update index:', index);

      Store(target);
      setUsers(target);
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
      setUsers(target);

      console.log('delete index:', index);
    } else {
      setIndex(null);
    }
    window.location.reload(true);
  };

  return {
    inputName, inputDesc, inputMail, inputPassword, inputLocation, inputWebsite, inputThumbnail, inputBackground,
    name, desc, mail, password, location, website, thumbnail, background, index, check, createdAt, users, 
    handleName, handleDesc, handleMail, handlePassword, handleLocation, handleWebsite, handleThumbnail, handleBackground, Add, Store, Pull, Select, Edit, Delete, 
  }

}
export const UserContainer = createContainer(User);
