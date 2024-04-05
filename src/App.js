import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


function App() {
    const [backgroundColor, setBackgroundColor] = useState(null); // Initial background color

    // Function to handle color change
    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setBackgroundColor(newColor);
        // Select all anchor tags
        const anchorTags = document.querySelectorAll('a,h1, h2, h3, h4, h5, h6,p,textarea');
        const buttonTags = document.querySelectorAll('button');
        buttonTags.forEach(buttonTags => {
            buttonTags.style.setProperty('background-Color', newColor, 'important');
            buttonTags.style.setProperty('border', `1px solid ${newColor}`, 'important');
        });
        // Iterate through each anchor tag and set the color style
        anchorTags.forEach(anchor => {
            anchor.style.setProperty('color', newColor, 'important');

        });
        document.body.style.setProperty('color', newColor, 'important');
    };

    const [mode,setMode] = useState('light');
    const [alert,setAlert] =useState(null);
    const showAlert =(message,type) =>{
        setAlert({
                msg:message,
                type:type
        })
        setTimeout(() => {
            setAlert(null);
        },1500);
    }

    const toggleMode =() =>{
        if(mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert('Dark mode has been enabled','success');
            // document.body.style.color = 'black';

        }else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('White mode has been enabled','success');
            // document.body.h1.style.color = 'white';
        }
    }
    return (
        <>
            <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} onChange={handleColorChange} backgroundColor={backgroundColor}></Navbar>
            <Alert alert ={alert} />
            <div className="container my-3">
                <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} backgroundColor={backgroundColor}/>
                {/* <About /> */}
            </div>
        </>
    );
}

export default App;
