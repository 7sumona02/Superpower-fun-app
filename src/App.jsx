import { useState } from 'react';
import kawaiiImage from './assets/kawaii.jpg';


function App() {
  const [showInput, setShowInput] = useState(false);
  const [superpower, setSuperpower] = useState('');
  const [reason, setReason] = useState('');
  const [savedResponse, setSavedResponse] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
    setSubmitted(false); // Reset submitted state when toggling input
  };

  const handleSuperpowerChange = (e) => {
    setSuperpower(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = () => {
    setSavedResponse({ superpower, reason });
    setSuperpower('');
    setReason('');
    setSubmitted(true);
    setShowInput(false);
  };

  return (
    <div className="bg-cover bg-center min-h-screen p-8" style={{backgroundImage: `url(${kawaiiImage})`}}>
      <h2 onClick={toggleInput} class="text-3xl text-center font-semibold mt-[20%] text-gray-800 cursor-pointer animate-bounce">what superpower would you like to have?</h2>
      {showInput && (
        <div class="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Superpower?"
            value={superpower}
            onChange={handleSuperpowerChange}
            className="mt-20 px-10 py-4 border rounded-full bg-[#f8edeb] shadow-md text-[#cdb4db]"
          />
          <textarea
            type="text"
            placeholder="Why would you choose it?"
            value={reason}
            onChange={handleReasonChange}
            className="px-10 py-4 border rounded-full bg-[#f8edeb] shadow-md  text-[#cdb4db]"
          />
          <div class='flex justify-center'>
            <button onClick={handleSubmit} className=" mt-4 bg-[#cdb4db] text-white font-semibold p-2 w-28 rounded-full focus:ring focus:ring-white focus:outline-none">Submit</button>
          </div>
        </div>
      )}
      {savedResponse && (
        <p className="mt-16 font-semibold text-xl text-center text-gray-800">
          Superpower: {savedResponse.superpower},<br /> Reason: {savedResponse.reason}
        </p>
      )}
      {submitted && <p className="mt-8 text-[#cdb4db] text-xl font-semibold text-center bg-[#f8edeb] py-2 px-4 w-[45%] mx-auto rounded-full">Thanks for your response!</p>}
    </div>
  );
}

export default App;
