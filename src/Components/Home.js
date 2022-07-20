import React from 'react';

export default function Home() {

    let server="https://studybuddy-2acc8-default-rtdb.firebaseio.com/allbooks.json";
    
    async function sendData(){
        // console.log("hiii send data to:",server );
       let res=await fetch(server,{
            method:'POST',
            body:JSON.stringify({ 
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