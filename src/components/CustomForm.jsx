
const CustomForm = () => {
    return (
        <div className=" flex justify-center items-center flex-col lg:flex-row">

            <div className="text-varWhite text-center ">
                <h1 className="poppins-b text-[28px] p-2 pt-16 leading-9">Learn to code by watching others</h1>
                <p className="p-1 pt-4 poppins-m leading-[27px]">See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable. </p>
            </div>

            <div>
                <button className="bg-varBlue mt-14 py-5 px-16 rounded-lg text-varWhite shadowM"><span className="poppins-sb">Try it free 7 days</span> then $20/mo. thereafter</button>
                <form className="flex flex-col bg-white mt-6 rounded-lg p-6 gap-4 shadowM">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray"
                        />
                    <input
                        type="text"
                        placeholder="Last Name "
                        className="placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray"
                        />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray"
                        />
                    <input
                        type="password"
                        placeholder="Password"
                        className="placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray"
                    />
                    <button className="bg-varGreen text-varWhite uppercase p-4 poppins-m rounded-[4px] shadowM"> Claim your free trial </button>
                    <p className="text-[11px] text-gray-400 text-center leading-5 -m-1 px-5">By clicking the button, you are agreeing to our <span className="poppins-b text-varRed"> Terms and Services</span> </p>
                </form>
            </div>

        </div>
    )
}

export default CustomForm