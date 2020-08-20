import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import Fdata from "./Fdata";
import "./index.css";

const name1= Fdata.map((val)=>{
  return(
    <Card
        imgsrcc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
/>

  );
})

ReactDOM.render(
  <>
  <h1 className="heading_style">List of FUN TIME MOVIES</h1>
    {name1}
 
 
 {/* <Card
    imgsrcc={Fdata[1].imgsrc}
   title={Fdata[1].title}
   sname={Fdata[1].sname}
   link={Fdata[1].link}
 />
 <Card
    imgsrcc={Fdata[2].imgsrc}
   title={Fdata[2].title}
   sname={Fdata[2].sname}
   link={Fdata[2].link}
 />
  <Card
    imgsrcc={Fdata[2].imgsrc}
   title={Fdata[2].title}
   sname={Fdata[2].sname}
   link={Fdata[2].link}
 />
  <Card
    imgsrcc={Fdata[2].imgsrc}
   title={Fdata[2].title}
   sname={Fdata[2].sname}
   link={Fdata[2].link}
 /> */}
 </>

 ,document.getElementById('root')
);