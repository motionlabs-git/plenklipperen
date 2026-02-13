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
		<form onSubmit={handleSubmit(onSubmit)} className='p-4 sm:p-10'>
			<h4 className='sm:w-2/3'>
				Vårt team er alltid tilgjengelig for støtte og hjelp
			</h4>

			<fieldset className='flex flex-col md:flex-row gap-2 sm:gap-4 mt-4'>
				<Input
					{...register('name')}
					error={errors.name}
					id='name'
					required
					placeholder='Navn'
				/>

				<Input
					{...register('phone')}
					error={errors.name}
					id='phone'
					required
					placeholder='Telefon'
				/>
			</fieldset>

			<fieldset className='mt-2 sm:mt-4'>
				<Input
					{...register('email')}
					error={errors.email}
					id='email'
					required
					placeholder='E-post'
				/>
			</fieldset>

			<fieldset className='mt-2 sm:mt-4'>
				<Input
					{...register('address')}
					error={errors.name}
					id='address'
					placeholder='Adresse'
				/>
			</fieldset>

			<fieldset className='flex gap-4 mt-4'>
				<span className='flex-1'>
					<label htmlFor='message' className='required'>
						Beskjed
					</label>

					<textarea
						id='message'
						className='w-full block mt-2 '
						rows={8}
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
					Send forespørsel
				</button>
			</fieldset>
		</form>
	)
}

export default ContactForm
