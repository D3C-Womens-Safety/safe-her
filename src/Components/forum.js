import React from 'react';
import '../App.css';
import '../Styles/forum.css';

export const Forum = () => {
    return (
        <div>
            <div className="forum-intro">
                <h1>Create a New Post</h1>
            </div>

            <div className='parent'>

                <div className='left-child'>
                    <input class="input" type="text" value="Title"/>
                    <input class="input" className="user-input" type="text" value="What's on your mind?"/>
                    
                    {/* two pink buttons */}
                    <div className='pink-parent'>
                        <div className='emoji-child'>
                            Emoji
                        </div>

                        <div className='pink-child'>
                            Post
                        </div>
                    </div>

                    <div className="emoji-container">
                        <p>
                            😀😃😄😁😆🤣😂🙂🤗🥰😍🤩😚😊😏😛
                        </p>
                        <p>
                            😅☹️🙁😞😟😣😖😨😧😦😱😫😩🫣🤥😮‍💨
                        </p>
                        <p>
                            😬🥴😵😵‍💫🤓🫡🤮🤕🤒😭😰💝💖💘💗💌
                        </p>
                    </div>
                </div>

                <div className='right-child'>
                    <div className='tile'>
                        <img/>
                        <h2> Photogenic Phrases </h2>
                        <p>
                            I’m reading a book on anti gravity it’s impossible to put down!
                        </p>
                        <hr class="solid"></hr>

                    </div>
                    
                    <div class='tile'>
                        <img/>
                        <h2> Photogenic Phrases </h2>
                        <p>
                            I’m reading a book on anti gravity it’s impossible to put down!
                        </p>
                        <hr class="solid"></hr>

                    </div>

                    <div class='tile'>
                        <img/>
                        <h2> Photogenic Phrases </h2>
                        <p>
                            I’m reading a book on anti gravity it’s impossible to put down!
                        </p>
                        <hr class="solid"></hr>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum;
