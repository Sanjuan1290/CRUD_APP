
export default function Students(){

    async function getStudentData(){

        
    }

    return(
        <main className="flex flex-col p-12 md:p-16">

            <div className="flex justify-between items-center">
                <h1 className="text-[25px] md:text-[45px]">ALL STUDENT</h1>
                <button className="text-[16px] md:text-[24px] whitespace-nowrap bg-[rgb(1,123,253)] px-5 py-2 rounded-md text-white transition-colors duration-300 ease-in-out hover:bg-[rgb(13,86,164)]">ADD STUDENTS</button>
            </div>

            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[100px_1fr_1fr_100px_1fr_1fr] border border-gray-300 mt-5">

                <div className="border border-gray-300 p-2 font-semibold">ID</div>
                <div className="border border-gray-300 p-2 font-semibold">First Name</div>
                <div className="border border-gray-300 p-2 font-semibold">Last Name</div>
                <div className="border border-gray-300 p-2 font-semibold">Age</div>
                <div className="border border-gray-300 p-2 font-semibold">Update</div>
                <div className="border border-gray-300 p-2 font-semibold">Delete</div>

            </div>
            
        </main>
    )
}