import React, { useRef, useState } from 'react';
import '../assets/styles/Chat.css';
import { EmojiEmotions, AttachFile, Image, Send } from '@mui/icons-material';
import EmojiPicker from 'emoji-picker-react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Chat = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const [message, setMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const fileInputRef = useRef(null);
    const imageInputRef = useRef(null);

    const handleEmojiClick = (event, emojiObject) => {
        setMessage(prevMessage => prevMessage + emojiObject.emoji);
        setShowPicker(false);
    };
    const handleFileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleImageClick = () => {
        if (imageInputRef.current) {
            imageInputRef.current.click();
        }
    };
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            console.log(files);
        }
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file.name);
            setMessage('');
        }
    };
    const contacts = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Mike Johnson' },
    ];
    const messages = {
        1: [
            { from: 'me', text: 'Hello John!' },
            { from: 'John Doe', text: 'Hey there!' },
        ],
        2: [
            { from: 'me', text: 'Hello Jane!' },
            { from: 'Jane Smith', text: 'Hi! How are you?' },
        ],
        3: [
            { from: 'me', text: 'Hello Mike!' },
            { from: 'Mike Johnson', text: 'What’s up?' },
        ],
    };
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div className="chat-container position-relative">
                <div className="contact-list">
                    <div class="contact-topbar">
                        <h3>Contacts</h3>
                        <div className="search-container mb-3">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                            <IconButton className="search-icon">
                                <SearchIcon />
                            </IconButton>
                        </div>
                    </div>
                    {filteredContacts.length > 0 ? (
                        filteredContacts.map(contact => (
                            <div
                                key={contact.id}
                                className={`contact-item ${selectedContact === contact.id ? 'active' : ''}`}
                                onClick={() => {
                                    setSelectedContact(contact.id);
                                    setOpenChat(true);
                                }}
                            >
                                <div className="contact">
                                    <div className="contact-img">
                                        <img src="https://via.placeholder.com/50x50" alt="Contact" />
                                    </div>
                                    <div className="contact-name">
                                        <p>{contact.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center mt-5 pt-5'>No contacts found</p>
                    )}
                </div>
                <div className="chat-section">
                    {selectedContact ? (
                        <>
                            <div className="chat-topbar">
                                <div className="chat-user">
                                    <img src="https://via.placeholder.com/50x50" alt="Contact" />
                                </div>
                                <div className="chat-user-name">
                                    <p>{contacts?.find(contact => contact.id === selectedContact)?.name}</p>
                                </div>
                            </div>
                            <div className="message-area">
                                <div className="messages">
                                    {messages[selectedContact].map((message, index) => (
                                        <div
                                            key={index}
                                            className={`message ${message.from === 'me' ? 'from-me' : 'from-them'}`}
                                        >
                                            {message.text}
                                        </div>
                                    ))}
                                </div>
                                <div className="message-input">
                                    <div className="input-container">
                                        <input
                                            type="text"
                                            value={message || selectedImage}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Type a message"
                                        />
                                        <div className="input-icons">
                                            <EmojiEmotions
                                                className="icon"
                                                onClick={() => setShowPicker(prev => !prev)}
                                            />
                                            <AttachFile
                                                className="icon"
                                                onClick={handleFileClick}
                                            />
                                            <Image
                                                className="icon"
                                                onClick={handleImageClick}
                                            />
                                            <button className="send-button">
                                                <Send />
                                            </button>
                                        </div>
                                        {showPicker && (
                                            <div className="emoji-picker">
                                                <EmojiPicker onEmojiClick={handleEmojiClick} />
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                            multiple
                                        />
                                        <input
                                            type="file"
                                            ref={imageInputRef}
                                            style={{ display: 'none' }}
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="no-chat">
                            <h3>Select a contact to start chatting</h3>
                        </div>
                    )}
                </div>
            </div>

            {openChat && (
                <div className="chat-section-2">
                    <div className="chat-topbar">
                        <div className="back-btn">
                            <ArrowBackIcon onClick={() => setOpenChat(false)} />
                        </div>
                        <div className="chat-user">
                            <img src="https://via.placeholder.com/50x50" alt="Contact" />
                        </div>
                        <div className="chat-user-name">
                            <p>{contacts?.find(contact => contact.id === selectedContact)?.name}</p>
                        </div>
                    </div>
                    {selectedContact ? (
                        <div className="message-area">
                            <div className="messages">
                                {messages[selectedContact].map((message, index) => (
                                    <div
                                        key={index}
                                        className={`message ${message.from === 'me' ? 'from-me' : 'from-them'}`}
                                    >
                                        {message.text}
                                    </div>
                                ))}
                            </div>
                            <div className="message-input">
                                <div className="input-container">
                                    <input
                                        type="text"
                                        value={message || selectedImage}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type a message"
                                    />
                                    <div className="input-icons">
                                        <EmojiEmotions
                                            className="icon"
                                            onClick={() => setShowPicker(prev => !prev)}
                                        />
                                        <AttachFile
                                            className="icon"
                                            onClick={handleFileClick}
                                        />
                                        <Image
                                            className="icon"
                                            onClick={handleImageClick}
                                        />
                                        <button className="send-button">
                                            <Send />
                                        </button>
                                    </div>
                                    {showPicker && (
                                        <div className="emoji-picker">
                                            <EmojiPicker onEmojiClick={handleEmojiClick} />
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                        multiple
                                    />
                                    <input
                                        type="file"
                                        ref={imageInputRef}
                                        style={{ display: 'none' }}
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="no-chat">
                            <h3>Select a contact to start chatting</h3>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Chat;
