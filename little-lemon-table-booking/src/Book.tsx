import { useToast } from "@chakra-ui/react";
import React from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const Book = () => {

    const toast = useToast();

    const [focus, setFocus] = React.useState<boolean>(false);

    const [firstname, setFirstname] = React.useState<string>('');
    const [isFirstnameInvalid , setIsFirstnameInvalid] = React.useState<boolean>(false);

    const [lastname, setLastname] = React.useState<string>('');
    const [isLastnameInvalid , setIsLastnameInvalid] = React.useState<boolean>(false);

    const [guests, setGuests] = React.useState<number>(1);
    const [isGuestsInvalid , setIsGuestsInvalid] = React.useState<boolean>(false);

    const [date, setDate] = React.useState<DateValueType>({
        startDate: null,
        endDate: null
    });
    const [isDateInvalid , setIsDateInvalid] = React.useState<boolean>(false);

    const handleValueChange = (newValue: DateValueType) => {
        setDate(newValue);
    }

    const resetValues = () => {
        setFirstname('');
        setLastname('');
        setGuests(1);
        setDate({
            startDate: null,
            endDate: null
        });
    }
    const resetErrors = () => {
        setIsFirstnameInvalid(false);
        setIsLastnameInvalid(false);
        setIsGuestsInvalid(false);
        setIsDateInvalid(false);
    }

    const handleCancel = () => {
        resetValues();
        resetErrors();
        toast({
            title: "Reservation reset",
            status: "info",
            duration: 9000,
            isClosable: true,
        });
    }
    const handleBook = () => {
        resetErrors();
        let isValid = true;
        if(firstname === ""){
            toast({
                title: "First name is required",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
            setIsFirstnameInvalid(true);
            isValid = false;
        }
        if(lastname === ""){
            toast({
                title: "Last name is required",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
            setIsLastnameInvalid(true);
            isValid = false;
        }
        if(guests === 0){
            toast({
                title: "Number of guests is required",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
            setIsGuestsInvalid(true);
            isValid = false;
        }
        if(date?.startDate === null){
            toast({
                title: "Date is required",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
            isValid = false;
        }
        if(new Date(date?.startDate as Date) < new Date()){
            toast({
                title: "Date must be in the future",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
            setIsDateInvalid(true);
            isValid = false;
        }
        if(isValid){
            toast({
                title: "Reservation confirmed for " + firstname + " " + lastname + " on " + date?.startDate?.toLocaleString() + " for " + guests + " guests",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
            setIsDateInvalid(true);
            resetValues();
        }

    }

    return (
        <div id='book' className='flex flex-col items-center justify-center space-y-6 min-h-[100vh]'>
            <h1 className='text-4xl font-bold'>Book a table</h1>
            <form id="booking-form" name="booking-form" className='flex flex-col w-[50vw] space-y-4'>
                <div className='flex flex-row w-full gap-4'>
                    <div className="w-full">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium">First name</label>
                        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" id="first_name" className={`bg-gray-50 border ${isFirstnameInvalid ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400`} placeholder="John" required />
                    </div>

                    <div className="w-full">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium">Last name</label>
                        <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" id="last_name" className={`bg-gray-50 border ${isFirstnameInvalid ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400`} placeholder="Doe" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="number_of_guests" className="block mb-2 text-sm font-medium text-gray-900">Number of guests</label>
                    <input type="number" id="number_of_guests" onChange={(e) => setGuests(parseInt(e.target.value))} value={guests} aria-describedby="helper-text-explanation" className={`bg-gray-50 border ${isFirstnameInvalid ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} placeholder="1" required></input>
                </div>


                <div>
                    <label htmlFor="booking_date" className="block mb-2 text-sm font-medium">Date</label>
                    <Datepicker
                        primaryColor={"blue"}
                        // containerClassName={"border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                        inputClassName={`bg-transparent border ${isFirstnameInvalid ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5`}
                        inputId="booking_date"
                        value={date}
                        asSingle={true}
                        onChange={handleValueChange}
                    />
                </div>
                <div className="flex self-end gap-4">
                    <button id="btnCancel" name="cancel" className="btn text-white bg-red-600 hover:bg-red-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={() => { handleCancel() }}>Cancel</button>
                    <button id="btnSubmit" name="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={() => { handleBook() }}>Confirm reservation</button>
                </div>
            </form>


        </div>
    )
}

export default Book;