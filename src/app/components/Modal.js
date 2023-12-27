import { useState } from 'react'

const Modal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //google sheet api
    try {
      setIsLoading(true);
      const response = await fetch('https://script.google.com/macros/s/AKfycbwIGC9JJ-YHSq1Vf4SpgJJUdBtC5vDaEA4rk6vkcFFQ0Scxto6hFMDoWZzsyxap_6Up/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      });

      if (response.ok) {
        setIsLoading(false);
        alert('You are subscribed!');
        setEmail('');
        onClose();
      } else {
        alert('Error submitting form. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting form. Please try again later.');
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <div onClick={onClose} className={
      `fixed inset-0 flex justify-center items-center transition-colors
    ${open ? "visible bg-black/20" : "invisible"}
    `}>

      {/* modal */}
      <div onClick={(e) => e.stopPropagation()} className={`
bg-white rounded-xl shadow py-6 px-8 transition-all w-11/12 md:w-1/2
${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
`}>
        <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
          X
        </button>
        <form onSubmit={handleSubmit} className="text-center mx-auto mt-6">
          <div className="flex gap-6">
            <input onChange={(e) => setEmail(e.target.value)} className="text-gray-900 border border-gray-500 rounded-lg p-2 w-9/12" type="email" placeholder="Enter your email..." />
            <button className="bg-yellow-600 px-4 py-2 rounded-lg">Submit</button>
          </div>
          {isLoading ? <p className='text-yellow-600 mt-2'>Submitting...</p> : ''}
          <button onClick={onClose} className="text-gray-900 px-4 py-2 rounded-lg border border-yellow-600 mt-5">Close</button>
        </form>
      </div>
    </div>
  )
}

export default Modal