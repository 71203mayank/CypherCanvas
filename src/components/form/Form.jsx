import React, {useState} from 'react'
import './Form.css'
import Encrypt from '../encryptionText/Encrypt'
import NavBar from '../NavBar/NavBar'
import { useHistory } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

export default function Form() {

    
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [userInput, setUserInput] = useState('');
    // const history = useHistory();

    const onClickEncrypt = () =>{
        console.log(keyword);
        console.log(userInput);
        // history.push('/encrypt', { keyword, userInput });
        navigate('/encrypt', {
            state: {
                   keyword: keyword,
                   str: userInput 
    
            } // Pass your props as state
        });
    }

    const onClickDecrypt = () => {
        console.log(keyword);
        console.log(userInput);
        // history.push('/decrypt', { keyword, userInput });
        navigate('/decrypt', {
            state: {
                   keyword: keyword,
                   str: userInput 
    
            } // Pass your props as state
        });
    }

    return (
    <div style={{backgroundColor:'#1F1F1F', position: 'relative'}}>
    <NavBar/>
    <div className='form'>
        <div className='form-container'>
            <div className='input-field'>
                <div className='form-text'>
                    <Encrypt target = 'ENTER YOUR TEXT'/>
                </div>
                <input type='text' className='user-input user-input-text' value={userInput} onChange={(e) => setUserInput(e.target.value)} ></input>
            </div>
            <div className='keyword'>
                <div className='form-text'>
                    <Encrypt target='KEYWORD'/>   
                </div>
                <input type='text' className='user-input user-keyword' value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
            </div>
            
        </div>
    </div>

    <div className='form-button-container'>
        <div className='button-button button-encrypt' onClick={onClickEncrypt}>ENCRYPT</div>
        <div className='button-button button-decrypt' onClick={onClickDecrypt}>DECRYPT</div>
    </div>
    </div>
    )
}
