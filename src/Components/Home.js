import React, { useState } from 'react';
import './Home.css';

export default function Home() {

    const [categoryVal, setCategory] = useState();
    const [subjectVal, setSubject] = useState("Sinn");

    const handleCategoryValChange = (e) => {
        setCategory(e.target.value);
        console.log(categoryVal);
    }

    function printVal() {
        console.log(categoryVal);
    }

    return (
        <>
            <div className='myJumbotron'>
                <div className="text-center  mt-5">
                    <h2>Add Books</h2>
                </div>
            </div>

            <section className='mainBody'>
                <div className='container'>
                    <div className='text-center'>
                        <h2>Add Book Details</h2>
                    </div>
                    <div className='row'>
                        <div className='col col-md-6'>
                            <input placeholder='Enter Book Name' />
                        </div>
                        <div className='col col-md-6'>
                            <input type='text' placeholder='Enter Book URL' />
                        </div>
                        <div className='col col-md-6'>
                            <span className='dropdown'>
                                <span className=''>Select Category </span>
                                <select value={categoryVal} onChange={handleCategoryValChange}>
                                    <option value="Educational">Educational</option>
                                    <option value="Fictional">Fictional</option>
                                    <option value="Story">Story</option>
                                </select>
                            </span>
                        </div>
                        <div className='col col-md-6'>
                            <span className='dropdown'>
                                <span>Select Subject </span>
                                <select value={subjectVal} onChange={e=>{setSubject(e.target.value); console.log(e.target.value)} }>
                                    <option value="Maths">Maths</option>
                                    <option value="C++">C++</option>
                                    <option value="Python">Python</option>
                                </select>
                            </span>
                            {subjectVal}
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-primary' onClick={printVal}>Add Book</button>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}




function OldHome() {

    let server = "https://studybuddy-2acc8-default-rtdb.firebaseio.com/allbooks.json";

    async function sendData() {
        let res = await fetch(server, {
            method: 'POST',
            body: JSON.stringify({
                "books": [
                    {
                        "name": "A Beginners Guide to Discrete Mathematics by W. D. Wallis",
                        "url": "https://drive.google.com/file/d/123D9Q3KW9Ho00tLXjMQrcrhDCvX97ZNX/view?usp=sharing"
                    },
                    {
                        "name": "Discrete mathematics and its applications by Rosen, Kenneth H",
                        "url": "https://drive.google.com/file/d/15PVhJKV7MJyU3iJVUQmX-sc6jUVHDsq8/view?usp=sharing"
                    }
                ],
                "subject": "Discrete Structures and Graph Theory"
            })
        });

        console.log(res.status);
    }


    return (
        <div>
            <div className='container text-center mt-5'>
                <button className='btn btn-primary' onClick={sendData}>Click Me!</button>
            </div>
        </div>
    );

}

