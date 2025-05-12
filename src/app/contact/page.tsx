'use client';
import { ContactForm } from '@/types';
import {
  showError,
  showSuccess,
} from '@/utils/toast';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] =
    useState<ContactForm>({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

  const [errors, setErrors] = useState<
    Partial<ContactForm>
  >({});

  const validateForm = (data: ContactForm) => {
    const newErrors: Partial<ContactForm> = {};

    if (data.name.trim().length < 3) {
      newErrors.name =
        'Name must be at least 3 characters';
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        data.email
      )
    ) {
      newErrors.email = 'Invalid email address';
    }

    if (data.subject.trim().length < 3) {
      newErrors.subject =
        'Subject must be at least 3 characters';
    }

    if (data.message.trim().length < 40) {
      newErrors.message =
        'Message must be at least 40 characters';
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors =
      validateForm(formData);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      showError(
        'Please fill the inputs correctly.'
      );
    } else {
      setErrors({});
      showSuccess(
        'Message submitted successfully!'
      );

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-center items-center w-full my-12 h-auto px-4 md:px-0'
    >
      <h1 className='text-3xl font-bold'>
        Contact us
      </h1>

      <div className='flex flex-col gap-4 w-full max-w-[500px] mt-12'>
        <div className='flex flex-col '>
          <label className='font-bold'>
            Name
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Kari Nordmann'
            className='border-1 border-gray-200 p-2 rounded-md'
          />
          {errors.name && (
            <p className='text-red-500 text-sm'>
              {errors.name}
            </p>
          )}
        </div>
        <div className='flex flex-col '>
          <label className='font-bold'>
            E-mail
          </label>
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='name@example.com'
            className='border-1 border-gray-200 p-2 rounded-md'
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>
              {errors.email}
            </p>
          )}
        </div>
        <div className='flex flex-col '>
          <label className='font-bold'>
            Subject
          </label>
          <input
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Subject'
            className='border-1 border-gray-200 p-2 rounded-md'
          />
          {errors.subject && (
            <p className='text-red-500 text-sm'>
              {errors.subject}
            </p>
          )}
        </div>
        <div className='flex flex-col '>
          <label className='font-bold'>
            Message
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Your message...'
            className='border-1 border-gray-200 p-2 rounded-md'
          />
          {errors.message && (
            <p className='text-red-500 text-sm'>
              {errors.message}
            </p>
          )}
        </div>
        <button
          type='submit'
          className='bg-blue-800 text-white py-3 rounded-md font-bold cursor-pointer'
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactPage;
