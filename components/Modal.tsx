import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Function to generate a new CAPTCHA
  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 8);
    setCaptcha(randomCaptcha);
  };

  // Function to validate the form and CAPTCHA
  const onSubmit = (data: any) => {
    if (userCaptcha === captcha) {
      console.log(data);
      setShowToast(true);
      reset();
      setUserCaptcha(''); // Clear CAPTCHA input after successful submission
      generateCaptcha(); // Generate new CAPTCHA on successful submission
    } else {
      setError('captcha', { type: 'manual', message: 'Invalid CAPTCHA. Please try again.' });
    }
  };

  // Generate CAPTCHA on initial render
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  // Automatically hide the toast message after 3 seconds
  React.useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer); // Clear timeout if the component unmounts
    }
  }, [showToast]);

  return (
    <>
      {isOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="flex items-center justify-center fixed inset-0 z-50 overflow-y-auto overflow-x-hidden outline-none focus:outline-none bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-2xl max-h-full mx-4 my-8">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Contact Form
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={onClose}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        placeholder="Your Name*"
                        className={`border p-2 rounded w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.name && (
                        <span className="text-red-500">{errors.name.message}</span>
                      )}
                    </div>
                    <div>
                      <input
                        {...register('email', {
                          required: 'Email ID is required',
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email address',
                          },
                        })}
                        type="email"
                        placeholder="Email ID*"
                        className={`border p-2 rounded w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.email && (
                        <span className="text-red-500">{errors.email.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register('companyName')}
                        type="text"
                        placeholder="Company Name"
                        className="border p-2 rounded w-full border-gray-300"
                      />
                    </div>
                    <div>
                      <input
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Phone number must be 10 digits',
                          },
                          maxLength: {
                            value: 10,
                            message: 'Phone number cannot exceed 10 digits',
                          },
                          minLength: {
                            value: 10,
                            message: 'Phone number must be exactly 10 digits',
                          },
                        })}
                        type="text"
                        placeholder="Phone Number*"
                        className={`border p-2 rounded w-full ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        maxLength={10}
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                      {errors.phone && (
                        <span className="text-red-500">{errors.phone.message}</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <textarea
                      {...register('message')}
                      placeholder="Message"
                      className="border p-2 rounded w-full border-gray-300"
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="border p-2 rounded w-24 text-center font-bold">
                      {captcha}
                    </div>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700"
                      onClick={generateCaptcha}
                    >
                      &#x21bb;
                    </button>
                    <input
                      type="text"
                      value={userCaptcha}
                      onChange={(e) => setUserCaptcha(e.target.value)}
                      placeholder="Enter Captcha"
                      className={`border p-2 rounded w-full ${errors.captcha ? 'border-red-500' : 'border-gray-300'}`}
                    />
                  </div>
                  {errors.captcha && (
                    <span className="text-red-500">{errors.captcha.message}</span>
                  )}
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-8 py-3 rounded-full w-full"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showToast && (
        <div
          id="toast-success"
          className="fixed top-4 z-20 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </div>
          <div className="ms-3 text-sm font-normal">Form submitted successfully.</div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-gray-500 dark:hover:text-white"
            aria-label="Close"
            onClick={() => setShowToast(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
