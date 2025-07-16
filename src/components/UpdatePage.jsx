import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function UpdatePage(){
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const ageRef = useRef()
    

    async function updateSingleRecord(e){      
        e.preventDefault()
        const f_name = firstNameRef.current.value
        const l_name = lastNameRef.current.value
        const age = ageRef.current.value

        try{
            const response = await fetch(`http://localhost:3000/api/v1/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, f_name, l_name, age })
            })

            if(!response.ok) {
                console.log(response.message)
                return
            };
            
            window.location.href = '/'

        }catch(err){
            console.log(err);
        }
    }

    async function getSingleRecord(){
        try{
            const response = await fetch(`http://localhost:3000/api/v1/get/${id}`)
            const data = await response.json()

            if(!response.ok){
                console.log(data.message);
            }
        
            firstNameRef.current.value = data.records[0].first_name
            lastNameRef.current.value = data.records[0].last_name
            ageRef.current.value = data.records[0].age

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getSingleRecord()
    }, [])



    return(
        <main className="flex items-center p-10">
            <form onSubmit={updateSingleRecord} className="flex flex-col flex-1 gap-[3px]">
                <label htmlFor="f_name" className="mt-2">First Name</label>
                <input ref={firstNameRef} type="text" name="f_name" className="bg-gray-100 px-4 py-2 rounded-md border outline-cyan-400"/>

                <label htmlFor="l_name" className="mt-2">Last Name</label>
                <input ref={lastNameRef} type="text" name="l_name" className="bg-gray-100 px-4 py-2 rounded-md border outline-cyan-400"/>

                <label htmlFor="age" className="mt-2">Age</label>
                <input ref={ageRef} type="text" name="age" className="bg-gray-100 px-4 py-2 rounded-md border outline-cyan-400"/>


                <button className="bg-[rgb(28,135,55)] max-w-[90px] text-gray-50 py-2 rounded-[3px] mt-2 transition-colors duration-200 ease-in-out hover:bg-[rgb(23,103,43)]">UPDATE</button>
            </form>
        </main>
    )
}