import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Avatar from "./Avatar.js";
import Message from "./Message.js";
import NameWithHandle from "./NameWithHandle.js";
import Time from "./Time.js";
import ReplyButton from "./ReplyButton.js";
import RetweetButton from "./RetweetButton.js";
import LikeButton from "./LikeButton.js";
import MoreOptionsButton from "./MoreOptionsButton.js";

function Tweet() {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <NameWithHandle />  <Time />
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
        );
    }
   
ReactDOM.render(
    <Tweet/>,
    document.querySelector('#root')
);

registerServiceWorker();
