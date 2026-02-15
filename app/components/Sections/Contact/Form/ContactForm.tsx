'use client'
import {
	ContactFormSchema,
	ContactFormType,
} from '@/app/types/contact-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from './Input'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { Check } from '@gravity-ui/icons'
import { Send } from 'feather-icons-react'

const ContactForm = () => {
	const formRef = useRef<null | HTMLFormElement>(null)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
		setError,
	} = useForm<ContactFormType>({
		resolver: zodResolver(ContactFormSchema),
		reValidateMode: 'onSubmit',
	})
	const onSubmit: SubmitHandler<ContactFormType> = async () => {
		await emailjs.init({
			publicKey: process.env.EMAILJS_PUBLIC_KEY!,
			blockHeadless: true,
		})

		try {
			if (!formRef.current) {
				throw new Error('missing form')
			}

			await emailjs
				.sendForm(
					process.env.EMAILJS_SERVICE_ID!,
					process.env.EMAILJS_TEMPLATE_ID!,
					formRef.current
				)
				.then(
					() => {
						reset()
					},
					(error) => {
						setError('root', {
							message: 'Something went wrong, try again later.',
						})

						throw new Error(
							'Something went wrong, try again later.',
							error
						)
					}
				)
		} catch (e: unknown) {
			if (e instanceof TypeError) setError('root', { message: e.message })
		}
	}

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit(onSubmit)}
			className='p-4 sm:p-10'
		>
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
					error={errors.phone}
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
					error={errors.address}
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

			<fieldset className='flex flex-col items-center justify-center mt-4'>
				<button
					aria-label='Submit form'
					className='pl-4 py-2 pr-2 md:pl-8 md:pr-3 md:py-3 bg-primary rounded-full flex items-center gap-4 hover:bg-primaryAccent duration-200 cursor-pointer shadow-sm select-none w-fit text-white font-bold '
					type='submit'
				>
					<div className='flex gap-2 items-center'>
						{isSubmitting ? 'Sender...' : 'Send forespørsel'}

						<span className='aspect-square bg-white rounded-full w-[1.9em] flex items-center justify-center'>
							<Send
								className='text-primary pr-0.5 pt-0.5'
								width={15}
							/>
						</span>
					</div>
				</button>

				{errors.root && (
					<span className='text-sm mt-2 text-red-400'>
						{errors.root.message}
					</span>
				)}

				{isSubmitSuccessful && (
					<div className='text-base mt-2 text-green-400 flex gap-2 items-center'>
						<span className='aspect-square w-6 min-w-6 sm:w-8 sm:min-w-8 rounded-full bg-primary text-white flex justify-center items-center'>
							<Check />
						</span>
						Skjemaet er sendt inn, vi svarer så snart som mulig.
					</div>
				)}
			</fieldset>
		</form>
	)
}

export default ContactForm
