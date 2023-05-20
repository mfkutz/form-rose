import { useState } from "react"

const CustomForm = () => {

    const [dataForm, setDataForm] = useState({
        name: '',
        lastName: '',
        email: '',
        pass: ''
    })

    const [nameError, setNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')

    const validateForm = () => {
        let isValid = true;

        if (!dataForm.name) {
            setNameError('First Name cannot be empty');
            isValid = false
        } else {
            setNameError('')
        }
        if (!dataForm.lastName) {
            setLastNameError('Second Name cannot be empty')
            isValid = false
        } else {
            setLastNameError('')
        }
        if (!dataForm.email) {
            setEmailError('Email cannot be empty')
            isValid = false
        } else {
            setEmailError('')
        }
        if (!dataForm.pass) {
            setPassError('Password cannot be empty')
            isValid = false
        } else {
            setPassError('')
        }

        return isValid
    }


    const handleOnChange = (e) => {
        setDataForm({
            //the spread makes the data persistent, so as not to lose it and not to step on it
            ...dataForm,
            //dynamic field
            [e.target.name]: e.target.value
        })
    }

    const generateOrder = (e) => {
        e.preventDefault()
        if (validateForm()) {

            console.log('orden generada', dataForm);
        }
    }


    return (
        <div className="flex justify-center items-center flex-col lg:flex-row min-w-full lg:justify-center">
            <div className="text-varWhite text-center flex flex-col justify-center max-w-md lg:max-w-[600px] lg:p-4">
                <h1 className="poppins-b text-[28px] p-2 pt-16 leading-9 lg:text-[50px] lg:text-left lg:leading-[55px] lg:pt-5">Learn to code by watching others</h1>
                <p className="p-1 pt-4 poppins-m leading-[27px] lg:max-w-md lg:min-w-full lg:text-left">See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable. </p>
            </div>
            <div className="lg:min-w-[530px]">
                <button className="bg-varBlue mt-14 py-5 px-16 rounded-lg text-varWhite shadowM lg:min-w-[530px]"><span className="poppins-sb">Try it free 7 days</span> then $20/mo. thereafter</button>
                <form onSubmit={generateOrder} className="flex flex-col bg-white mt-6 rounded-lg p-6 gap-4 shadowM lg:p-10 lg:gap-5">
                    <div>
                        <input
                            onChange={handleOnChange}
                            value={dataForm.name}
                            name="name"
                            type="text"
                            placeholder="First Name"
                            className="min-w-full placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray"
                        />
                        {nameError && <p className=" pt-1 text-red-400 text-[10px] text-right italic">{nameError}</p>}

                    </div>
                    <div>
                        <input
                            onChange={handleOnChange}
                            value={dataForm.lastName}
                            name="lastName"
                            type="text"
                            placeholder="Last Name "
                            className="min-w-full placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray"
                        />
                        {lastNameError && <p className="pt-1 text-red-400 text-[10px] text-right italic">{lastNameError}</p>}
                    </div>
                    <div>
                        <input
                            onChange={handleOnChange}
                            value={dataForm.email}
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className="min-w-full placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray"
                        />
                        {emailError && <p className="pt-1 text-red-400 text-[10px] text-right italic">{emailError}</p>}
                    </div>
                    <div>
                        <input
                            onChange={handleOnChange}
                            value={dataForm.pass}
                            name="pass"
                            type="password"
                            placeholder="Password"
                            className=" min-w-full placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray"
                        />

                        {passError && <p className="pt-1 text-red-400 text-[10px] text-right italic">{passError}</p>}
                    </div>
                    <button className="bg-varGreen text-varWhite uppercase p-4 poppins-m rounded-[4px] shadowM"> Claim your free trial </button>
                    <p className="text-[11px] text-gray-400 text-center leading-5 -m-1 px-5">By clicking the button, you are agreeing to our <span className="poppins-b text-varRed"> Terms and Services</span> </p>
                </form>
            </div>

        </div>
    )
}

export default CustomForm