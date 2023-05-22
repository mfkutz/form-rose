import { useState } from "react"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Oval } from 'react-loader-spinner'

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
    const [formSubmited, setFormSubmited] = useState(false)
    const [inputDisabled, setInputDisabled] = useState(false)
    const [id, setId] = useState('')
    const [isLoading, setIsLoading] = useState(false)

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

            setIsLoading(true)
            const dbFirestore = getFirestore()
            const orderCollections = collection(dbFirestore, 'orders')

            addDoc(orderCollections, dataForm)
                .then(resp => {
                    setId(resp.id)
                    setFormSubmited(true)
                    setInputDisabled(true)
                })
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false))
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
                
                {isLoading ?
                        <div className="flex justify-center text-center mt-6">
                            <Oval height={40}
                                width={40}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#4fa94d"
                                strokeWidth={2}
                                strokeWidthSecondary={2} />
                        </div>
                        :
                        id.length !== 0 && <h4 className="text-[14px] text-white text-center mt-6 bg-red-600">ID Order: {id}</h4>
                    }

                <form onSubmit={generateOrder} className="flex flex-col bg-white mt-6 rounded-lg p-6 gap-4 shadowM lg:p-10 lg:gap-5">
                    <div>
                        <input
                            onChange={handleOnChange}
                            value={formSubmited ? '' : dataForm.name}
                            name="name"
                            type="text"
                            placeholder={formSubmited ? '' : "First Name"}
                            disabled={inputDisabled}
                            className={`min-w-full placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray ${formSubmited ? 'disabledInput' : ''}`}
                        />
                        {nameError && <p className=" pt-1 text-red-400 text-[10px] text-right italic">{nameError}</p>}

                    </div>
                    <div>
                        <input
                            onChange={handleOnChange}
                            value={formSubmited ? '' : dataForm.lastName}
                            name="lastName"
                            type="text"
                            placeholder={formSubmited ? '' : "Last Name "}
                            disabled={inputDisabled}
                            className={`min-w-full placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray ${formSubmited ? 'disabledInput' : ''}`}
                        />
                        {lastNameError && <p className="pt-1 text-red-400 text-[10px] text-right italic">{lastNameError}</p>}
                    </div>
                    <div>
                        <input
                            onChange={handleOnChange}
                            value={formSubmited ? '' : dataForm.email}
                            name="email"
                            type="email"
                            placeholder={formSubmited ? '' : "Email Address"}
                            disabled={inputDisabled}
                            className={`min-w-full placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray ${formSubmited ? 'disabledInput' : ''}`}
                        />
                        {emailError && <p className="pt-1 text-red-400 text-[10px] text-right italic">{emailError}</p>}
                    </div>
                    <div>
                        <input
                            onChange={handleOnChange}
                            value={formSubmited ? '' : dataForm.pass}
                            name="pass"
                            type="password"
                            placeholder={formSubmited ? '' : "Password"}
                            disabled={inputDisabled}
                            className={`min-w-full placeholder-varGray poppins-m text-[14px] p-4 border rounded-[4px] focus:border-varGray ${formSubmited ? 'disabledInput' : ''}`}
                        />

                        {passError && <p className="pt-1 text-red-400 text-[10px] text-right italic">{passError}</p>}
                    </div>
                    <button disabled={inputDisabled} className={`bg-varGreen text-varWhite uppercase p-4 poppins-m rounded-[4px] shadowM ${formSubmited ? 'disabledButton ' : ''}`}> Claim your free trial </button>
                    <p className="text-[11px] text-gray-400 text-center leading-5 -m-1 px-5">By clicking the button, you are agreeing to our <span className="poppins-b text-varRed"> Terms and Services</span> </p>
                    
                </form>
            </div>

        </div>
    )
}

export default CustomForm