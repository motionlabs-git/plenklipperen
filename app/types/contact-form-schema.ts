import * as z from 'zod'

export const ContactFormSchema = z.object({
	name: z.string().nonempty('Toto pole je povinné'),
	email: z.email('Neplatný email').nonempty('Toto pole je povinné'),
	phone: z
		.string()
		.transform((val) => val.trim())
		.refine((val) => val === '' || /^(?:\d\s*){8}$/.test(val), {
			message: 'Neplatné telefonní číslo',
		})
		.optional(),
	address: z.string().nullable(),
	message: z.string().nonempty('Toto pole je povinné'),
	// gdpr: z.literal<boolean>(true, 'Souhlas musí být udělen'),
})

export type ContactFormType = z.infer<typeof ContactFormSchema>
