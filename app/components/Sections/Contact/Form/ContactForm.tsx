'use client'
import {
	ContactFormSchema,
	ContactFormType,
} from '@/app/types/contact-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from './Input'

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormType>({
		resolver: zodResolver(ContactFormSchema),
	})
	const onSubmit: SubmitHandler<ContactFormType> = (data) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='p-10'>
			<h4 className='w-2/3'>
				Our Team is Always Here for Support and Assistance
			</h4>

			<fieldset className='flex gap-4 mt-4'>
				<Input
					{...register('name')}
					error={errors.name}
					id='name'
					required
					placeholder='Name'
				/>

				<Input
					{...register('phone')}
					error={errors.name}
					id='phone'
					required
					placeholder='Phone'
				/>
			</fieldset>

			<fieldset className='flex gap-4 mt-4'>
				<Input
					{...register('email')}
					error={errors.email}
					id='email'
					required
					placeholder='Email'
				/>
			</fieldset>

			<fieldset className='flex gap-4 mt-4'>
				<Input
					{...register('address')}
					error={errors.name}
					id='address'
					placeholder='Address'
				/>
			</fieldset>

			<fieldset className='flex gap-4 mt-4'>
				<span className='flex-1'>
					<label htmlFor='message' className='required'>
						Message
					</label>

					<textarea
						id='message'
						className='w-full block mt-2 '
						rows={10}
						{...register('message')}
					></textarea>

					{errors.message && (
						<span className='text-sm text-red-400'>
							{errors.message.message}
						</span>
					)}
				</span>
			</fieldset>

			<fieldset className='flex justify-center mt-4'>
				<button
					className='px-8 py-3 bg-primary rounded-full flex items-center gap-4 hover:bg-primaryAccent duration-200 cursor-pointer shadow-sm select-none w-fit text-white font-bold '
					type='submit'
				>
					Submit form
				</button>
			</fieldset>
		</form>
	)
}

export default ContactForm
