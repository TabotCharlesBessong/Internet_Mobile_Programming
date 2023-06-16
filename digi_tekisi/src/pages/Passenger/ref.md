import React from 'react';
import { useForm } from 'react-hook-form';

const PaymentForm = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-4">
        <label htmlFor="payment-method" className="mb-2 font-bold text-lg text-gray-900">
          Method of Payment
        </label>
        <select
          name="paymentMethod"
          id="payment-method"
          {...register("paymentMethod", { required: true })}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select a payment method</option>
          <option value="mtn-money">MTN Money</option>
          <option value="orange-money">Orange Money</option>
          <option value="bank">Bank</option>
          <option value="cash">Cash</option>
        </select>
        {errors.paymentMethod && (
          <span className="text-red-500 text-sm">Please select a payment method</span>
        )}
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onSubmit(getValues())}>
          Pay
        </button>
        <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('Payment canceled')}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;