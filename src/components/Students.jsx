import React, { useEffect, useState } from "react";

export default function Students(){
    const fields = ['ID', 'First Name', 'Last Name', 'Age', 'Update', 'Delete']
    const [records, setRecords] = useState([{}])

    useEffect(()=>{
        getStudentData()
    }, [])

    async function getStudentData(){
        try{
            const response = await fetch('http://localhost:3000/api/v1/get')
            const data = await response.json()

            if(!response.ok){
                console.log(data.message);
            }

            setRecords(data.records)
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

                {
                    records.map((record, index) => (
                        <React.Fragment key={index}>
                            <div className="border border-gray-300 p-2 font-semibold">{record.id}</div>
                            <div className="border border-gray-300 p-2 font-semibold">{record.first_name}</div>
                            <div className="border border-gray-300 p-2 font-semibold">{record.last_name}</div>
                            <div className="border border-gray-300 p-2 font-semibold">{record.age}</div>
                            <div className="border border-gray-300 p-2 font-semibold"><button className="bg-[rgb(37,166,68)] px-3 py-1 text-white rounded-[3px] leading-6 hover:bg-[rgb(31,136,55)] transition-colors duration-200 ease-in-out">Update</button></div>
                            <div className="border border-gray-300 p-2 font-semibold"><button className="bg-[rgb(218,53,64)] px-3 py-1 text-white rounded-[3px] leading-6 hover:bg-[rgb(184,43,53)] transition-colors duration-200 ease-in-out">Delete</button></div>
                        </React.Fragment>
                    ))
                }
            </div>
            
        </main>
    )
}