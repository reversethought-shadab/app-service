import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [budget, setBudget] = useState(5000);
  const [fileName, setFileName] = useState('No file chosen');
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (data: any) => {
    // Display toast and log data if there are no errors
    if (Object.keys(errors).length === 0) {
      console.log(data);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(event.target.value));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('No file chosen');
    }
  };

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
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Contact Form
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
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
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register('firstName', { required: 'First name is required' })}
                        type="text"
                        placeholder="First Name*"
                        className={`border p-2 rounded w-full ${errors.firstName ? 'border-red-500' : 'border-green-500'}`}
                      />
                      {errors.firstName && (
                        <span className="text-red-500">{errors.firstName.message}</span>
                      )}
                    </div>
                    <div>
                      <input
                        {...register('lastName', { required: 'Last name is required' })}
                        type="text"
                        placeholder="Last Name*"
                        className={`border p-2 rounded w-full ${errors.lastName ? 'border-red-500' : 'border-green-500'}`}
                      />
                      {errors.lastName && (
                        <span className="text-red-500">{errors.lastName.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email address',
                          },
                        })}
                        type="email"
                        placeholder="E-mail*"
                        className={`border p-2 rounded w-full ${errors.email ? 'border-red-500' : 'border-green-500'}`}
                      />
                      {errors.email && (
                        <span className="text-red-500">{errors.email.message}</span>
                      )}
                    </div>
                    <div>
                      <input
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Invalid phone number',
                          },
                        })}
                        type="text"
                        placeholder="Phone*"
                        className={`border p-2 rounded w-full ${errors.phone ? 'border-red-500' : 'border-green-500'}`}
                      />
                      {errors.phone && (
                        <span className="text-red-500">{errors.phone.message}</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <select
                      {...register('project', { required: 'Please select a project' })}
                      className={`border p-2 rounded w-full ${errors.project ? 'border-red-500' : 'border-green-500'}`}
                    >
                      <option value="">I want to talk about a project</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.project && (
                      <span className="text-red-500">{errors.project.message}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="budget" className="block mb-2">
                      What is your budget? <span className="text-gray-700 dark:text-gray-300">(${budget})</span>
                    </label>
                    <div className="relative">
                      <input
                        {...register('budget', { required: 'Please select a budget' })}
                        type="range"
                        id="budget"
                        name="budget"
                        min="5000"
                        max="100000"
                        value={budget}
                        onChange={handleBudgetChange}
                        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 ${errors.budget ? 'border-red-500' : 'border-green-500'}`}
                      />
                      <div className="absolute top-0 left-0 w-full h-2 flex items-center justify-between">
                        <span className="text-sm text-gray-700 dark:text-gray-300">$5000</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">$100,000</span>
                      </div>
                    </div>
                    {errors.budget && (
                      <span className="text-red-500">{errors.budget.message}</span>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register('idea', { required: 'Please tell us about your idea' })}
                      placeholder="Tell us about your idea"
                      className={`border p-2 rounded w-full ${errors.idea ? 'border-red-500' : 'border-green-500'}`}
                      rows={4}
                    ></textarea>
                    {errors.idea && (
                      <span className="text-red-500">{errors.idea.message}</span>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2">Choose File</label>
                    <div className="relative">
                      <input
                        {...register('file', { required: 'Please upload a file' })}
                        type="file"
                        id="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="file"
                        className={`border p-2 rounded w-full flex items-center cursor-pointer ${errors.file ? 'border-red-500' : 'border-green-500'}`}
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        {fileName}
                      </label>
                      {errors.file && (
                        <span className="text-red-500">{errors.file.message}</span>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-900 text-white px-8 py-3 rounded-full"
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
        <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">Form submitted successfully.</div>
          <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
