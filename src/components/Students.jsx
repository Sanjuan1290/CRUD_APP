import { useEffect } from "react";
import { useState } from "react";

export default function Students(){
    const fields = ['ID', 'First Name', 'Last Name', 'Age', 'Update', 'Delete']
    const [list, setList] = useState([{}])

    useEffect(()=>{
        getStudentData()
    }, [])

    async function getStudentData(){
        try{
            const response = await fetch('http://localhost:3000/api/v1/get')
            const record = await response.json()

            console.log(record);

            if(!response.ok){
                console.log(record.message);
            }

            setList(record)
        }catch(err){
            console.log(err);
        }
    }

    return(
        <main className="flex flex-col p-12 md:p-16">

            <div className="flex justify-between items-center">
                <h1 className="text-[25px] md:text-[45px]">ALL STUDENT</h1>
                <button className="text-[16px] md:text-[24px] whitespace-nowrap bg-[rgb(1,123,253)] px-5 py-2 rounded-md text-white transition-colors duration-300 ease-in-out hover:bg-[rgb(13,86,164)]">ADD STUDENTS</button>
            </div>

            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_1fr_1fr_100px_1fr_1fr] border border-gray-300 mt-5">
                {
                    fields.map((field, index) => (
                        <div key={index} className="border border-gray-300 p-2 font-semibold">{field}</div>
                    ))
                }
            </div>
            
        </main>
    )
}