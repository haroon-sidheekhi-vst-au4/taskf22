import React, { Component } from "react";
import './Components/Styles/about.css';
import './Components/Styles/main.css'
import "./App.css";
import './Components/Styles/route.css'

import coverpic from './Components/Media/coverpic.jpg';
import snap from './Components/Media/snap.jpg';




export default class Jobs extends Component {
  render() {
    return (
      <>
      <div style={{backgroundColor: "rgb(119,237, 229)"}}>
      <div style={{
                marginLeft: 245 ,
                marginRight: 245,
                backgroundColor: "white"}}>
        <div style={{
                marginLeft: 5 ,
                marginRight: 5,}}>

                <img style={{
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,}} 
                    src={coverpic} />

            <div className="image-container"
                style={{
                marginLeft: 0 ,
                marginTop: -150
              }}>
                <img src={snap} />
              </div>

            <b style={{
                fontFamily: "arch",
                marginLeft: 45 ,
                fontSize: 35,
              }}>
              Snapchat
            </b>
            
            <p  style={{
                marginLeft: 45 ,
                fontFamily: "arch",
                width: window.innerWidth > 800 ? "50%" : window.innerWidth
              }}>
              SP Infocity Street Chennai .{" "}
            </p> 
              <center>



              <button type="button" class="btn btn-info btn-lg">Frontend Developer</button><span> </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-info btn-lg">Midweight</button> {''} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-info btn-lg">Fulltime Emloyee</button>
            </center>
            {/* ************************** */}
            <b style={{
                marginLeft: 45 ,
                fontFamily: "arch",
                fontSize: 30
              }}>
              Over view
            </b> <br/>
            <b style={{
                marginLeft: 45 ,
                fontFamily: "arch",
                fontSize: 15 }}> Snapchat is an American multimedia messaging app developed by Snap Inc., originally Snapchat Inc. 
                One of the principal features of Snapchat is that pictures and messages are usually only available for a short 
                time before they become inaccessible to their recipients.            </b> <br/><br/><br/>
                <b style={{
                    marginLeft: 45 ,
                fontFamily: "arch",
                fontSize: 30
              }}>
              Job Description
            </b> <br/>
            <ul style={{listStyleType: "disc", color: "red", marginLeft: 45 ,}}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</li>
                <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                <li>Lobortis feugiat vivamus at augue eget arcu. Massa tempor nec feugiat nisl pretiuma</li>
            </ul> <br/><br/>
            <b style={{
                marginLeft: 45 ,
                fontFamily: "arch",
                fontSize: 30
              }}>
              Programming Language
            </b> <br/>
            <br />
            <div style={{
                marginLeft: 45 ,
                marginRight: -25,}}>
                  <button type="submit" class="btn btn-info">HTML</button><b/> <b/>
                  <button type="submit" class="btn btn-info">CSS</button><b/> <b/>
                  <button type="submit" class="btn btn-info">Javascript</button> <b/> <b/>
                  <button type="submit" class="btn btn-info">JQuery</button> <b/> <b/>
                  <button type="submit" class="btn btn-info">Python</button> <b/> <b/>
                  <button type="submit" class="btn btn-info">Go</button> <b/> <b/>
                  <button type="submit" class="btn btn-info">Ruby</button> <b/> <b/><br/><br/>
                  </div>

                  <div style={{
                marginLeft: 45 ,
                marginRight: -25,}}>
               <b style={{
                fontFamily: "arch",
                fontSize: 30}}>Tools   </b> <br/><br />
            
                  <button type="submit" class="btn btn-info">React</button><b/> <b/>
                  <button type="submit" class="btn btn-info">Vue Js</button><b/> <b/>
                  <button type="submit" class="btn btn-info">Bootstrap</button> <b/> <b/>
                  <button type="submit" class="btn btn-info">Codepen</button> <b/> <b/>
                  <button type="submit" class="btn btn-info">TailwindCSS</button> <b/> <b/>
                  <button type="submit" class="btn btn-info">VS Code</button> <b/> <b/>
                  <button type="submit" class="btn btn-info">Version Control</button> <b/> <b/> </div>
                  <center> <br/><br/> 
                  <button type="button" class="btn btn-primary btn-lg btn-block">APPLY NOW</button>            
                </center>
              <br/> <br/><br/>
        </div>
        </div>
        </div>
      </>
    );
  }
}
