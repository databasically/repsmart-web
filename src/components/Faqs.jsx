import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Is there a limit to the number of manufacturers or products I can sell?',
      answer:
        'No, there is no limit.',
    },
    {
      question: 'How do I get started?',
      answer: 'Contact us through the demo link. We can skip the demo if you prefer!',
    },
    {
      question: 'How will I be charged and billed?',
      answer:
        'Monthly via credit card or ACH debit.',
    },
  ],
  [
    {
      question: 'Can I prepay for a year?',
      answer:
        'Maybe, reach out and let’s talk.',
    },
    {
      question:
        'How much do upgrades cost? ',
      answer:
        'Nothing!',
    },
    {
      question:
        'Do I need to install anything on my computer?',
      answer:
        'No, RepSmart runs in any modern web browser.',
    },
  ],
  [
    {
      question: 'How do I contact support? ',
      answer:
        'Send an email to help@repsmart.co.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Log in and go to your profile page to find the password change screen.',
    },
    {
      question: 'Do you offer an in-house/on-premise version?',
      answer:
        'No, sorry.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            at help@repsmart.co and we'll get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
