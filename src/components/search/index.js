import React, { useState } from 'react';
import '../../assets/css/search.css';
import SearchIcon from '../../assets/images/search.svg';
import EnterIcon from '../../assets/images/enter.svg';
import AvatarRaj from '../../assets/images/avatar-raj.svg';
import AvatarGowri from '../../assets/images/avatar-gowri.svg';

function Search() {
    const [focused, setFocused] = useState(false)
    const [results, setResults] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    const handleChange = (e) => {
        if(e.target.value.length > 0) {
            setResults(true)
        }
        else {
            setResults(false)
        }
    }

    return (
        <div className={`main ${focused && 'focus'}`}>
            <div className="input">
                <img src={SearchIcon} className="search" alt="search icon" />
                <input type="text" name="search" onFocus={onFocus} onBlur={onBlur} onChange={ (e)=> handleChange(e)} placeholder="Search for anything" />
            </div>
            <div className="results">
                <div className={focused && 'default'}>
                    <div className="section">
                        <p className={`sub-head ${(focused && !results) && 'active'}`}>Recent searches</p>
                        <div className={`item i1 selected ${(focused && !results) && 'active'}`}>
                            <div className="left">
                                <p className="name">Shoes</p>
                            </div>
                            <div className="right">
                                <p className="action">Select <img src={EnterIcon} alt="enter icon" /></p>
                            </div>
                        </div>
                        <div className={`item i2 ${(focused && !results) && 'active'}`}>
                            <div className="left">
                                <p className="name">Sneakers</p>
                            </div>
                            <div className="right">
                                <p className="action">Select <img src={EnterIcon} alt="enter icon" /></p>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <p className={`sub-head ${(focused && results) && 'active'}`}>Users</p>
                        <div className={`item i1 selected ${(focused && results) && 'active'}`}>
                            <div className="left">
                                <p className="name avt">
                                    <img src={AvatarRaj} alt="avatar" />
                                    Kanagaraj Subramaniam
                                </p>
                            </div>
                            <div className="right">
                                <p className="action">Select <img src={EnterIcon} alt="enter icon" /></p>
                            </div>
                        </div>
                        <div className={`item i2 ${(focused && results) && 'active'}`}>
                            <div className="left">
                                <p className="name avt">
                                    <img src={AvatarGowri} alt="avatar" />
                                    Gowri Shankar
                                </p>
                            </div>
                            <div className="right">
                                <p className="action">Select <img src={EnterIcon} alt="enter icon" /></p>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <p className={`sub-head ${(focused && results) && 'active'}`}>Questions</p>
                        <div className={`item i1 selected ${(focused && results) && 'active'}`}>
                            <div className="left">
                                <p className="name">
                                    <span className="tag tag-black">WINTER</span>
                                    Why is winter so cold?
                                </p>
                            </div>
                            <div className="right">
                                <p className="action">Select <img src={EnterIcon} alt="enter icon" /></p>
                            </div>
                        </div>
                        <div className={`item i2 ${(focused && results) && 'active'}`}>
                            <div className="left">
                                <p className="name">
                                    <span className="tag tag-blue">JACKET</span>
                                    What Jacket should I wear during winter?
                                </p>
                            </div>
                            <div className="right">
                                <p className="action">Select <img src={EnterIcon} alt="enter icon" /></p>
                            </div>
                        </div>
                    </div>
                    <div className={`more ${(focused && results) && 'active'}`}>
                        <p>Show more (200 results)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
