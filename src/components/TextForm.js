import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpperClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Uppercase has been Enabled','success')
    }
    const handleOnChange =(event) =>{
        setText(event.target.value);
    }
    const handleCaseClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Lowercase has been Enabled','success')
    }
    const handleClearClick =() =>{
        let newText = '';
        setText(newText);
        props.showAlert('Clear Text has been Enabled','success')
    }
    const handleCamelClick =() =>{
        let newText = text.split(' ')
        .map((word) =>  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
        setText(newText);
        props.showAlert('Camelcase has been Enabled','success')
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('ExtraSpace has been Removed','success')
    }
    const handleCopy = () => {
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard','success')
    }
    const handleDuplicateWords = () => {
        const words = text.split(/\s+/);

        // Use filter to keep only the first occurrence of each word
        const uniqueWords = words.filter((word, index) => words.indexOf(word) === index);

        // Join the unique words back into a string
        setText(uniqueWords.join(' '));
        props.showAlert('Duplicate words has been removed','success')
    }
    
    return (

        <>
        <div className='container' style ={{color : props.mode === 'light' ? 'black' : 'white'}}>
            <h1 className="text-area-heading">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style ={{backgroundColor : props.mode === 'light' ? 'white' : 'grey' , color : props.mode === 'light' ? 'black' : 'white'}} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCaseClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCamelClick}>Convert to Camelcase</button>
            <button className="btn btn-primary mx-1" onClick={handleDuplicateWords}>Remove Duplicate Words</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3" style ={{color : props.mode === 'light' ? 'black' : 'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} Words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview it here.'}</p>
        </div>
        </>
    )
}
