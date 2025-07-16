import crossIcon from '../assets/cross.png'

export default function AddRecord({ showAddStudent, setShowAddStudent, getStudentData }){

    async function addRecord(e){
        e.preventDefault();

        const formData = new FormData(e.target)
        const f_name = formData.get('f_name')
        const l_name = formData.get('l_name')
        const age = formData.get('age')
        
        try{
            const response = await fetch('http://localhost:3000/api/v1/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({f_name, l_name, age})
            })

            if(!response.ok) throw new Error('something went wrong');
            setShowAddStudent(false);
            getStudentData()
            e.target.reset()
        }catch(err){
            console.log(err);
        }

    }


    return(
        <section className={`fixed inset-0 bg-[rgba(0,0,0,0.43)] ${showAddStudent ? 'flex' : 'hidden'} items-start justify-center pt-20`}>
            
            <div className='bg-white w-[500px] rounded-sm'>

                <div className='flex justify-between border-b pb-3 p-4 bg-gray-50'>
                    <h1 className='text-[20px] font-semibold'>ADD STUDENTS</h1>
                    <button onClick={()=>{setShowAddStudent(false)}}><img src={crossIcon} alt="close button" className='w-6'/></button>
                </div>
                
                <form onSubmit={addRecord}>
                    <div className='flex flex-col gap-1 px-4'>
                        <label htmlFor="f_name" className='mt-2'>First Name</label>
                        <input type="text" name='f_name' className='outline-cyan-500 border border-gray-300 rounded-md px-3 py-[5px]'/>

                        <label htmlFor="l_name" className='mt-2'>Last Name</label>
                        <input type="text" name='l_name' className='outline-cyan-500 border border-gray-300 rounded-md px-3 py-[5px]'/>

                        <label htmlFor="age" className='mt-2'>Age</label>
                        <input type="text" name='age' className='outline-cyan-500 border border-gray-300 rounded-md px-3 py-[5px]'/>
                    </div>


                    <div className='flex justify-end border-t mt-5 px-4 py-5 gap-2 bg-gray-50'>
                        <button type='button' onClick={()=>{setShowAddStudent(false)}} className='bg-[rgb(95,102,109)] text-gray-50 py-2 px-4 rounded-md transition-colors duration-200 ease-in-out hover:bg-[rgb(73,79,85)]'>Close</button>
                        <button className='bg-[rgb(32,145,58)] text-gray-50 py-2 px-4 rounded-md transition-colors duration-200 ease-in-out hover:bg-[rgb(26,121,48)]'>ADD</button>
                    </div>

                </form>
            </div>
        </section>
    )
}