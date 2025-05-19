"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex h-full flex-col items-center justify-center py-8 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8e6e1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#9b9b8c]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mt-6 font-serif text-xl text-[#3c3c3c]">Thank You!</h3>
          <p className="mt-2 font-sans text-[#5c5c5c]">
            Your viewing request has been received. Our team will contact you shortly to confirm your appointment.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-sans text-sm font-medium text-[#5c5c5c]">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-[#e8e6e1] bg-white px-4 py-2 font-sans text-[#3c3c3c] focus:border-[#9b9b8c] focus:outline-none focus:ring-1 focus:ring-[#9b9b8c]"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block font-sans text-sm font-medium text-[#5c5c5c]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-[#e8e6e1] bg-white px-4 py-2 font-sans text-[#3c3c3c] focus:border-[#9b9b8c] focus:outline-none focus:ring-1 focus:ring-[#9b9b8c]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-sans text-sm font-medium text-[#5c5c5c]">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-[#e8e6e1] bg-white px-4 py-2 font-sans text-[#3c3c3c] focus:border-[#9b9b8c] focus:outline-none focus:ring-1 focus:ring-[#9b9b8c]"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="date" className="block font-sans text-sm font-medium text-[#5c5c5c]">
                Preferred Date
              </label>
              <div className="relative mt-1">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-[#e8e6e1] bg-white px-4 py-2 font-sans text-[#3c3c3c] focus:border-[#9b9b8c] focus:outline-none focus:ring-1 focus:ring-[#9b9b8c]"
                />
                <Calendar className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9b9b8c]" />
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block font-sans text-sm font-medium text-[#5c5c5c]">
                Preferred Time
              </label>
              <div className="relative mt-1">
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="block w-full appearance-none rounded-md border border-[#e8e6e1] bg-white px-4 py-2 font-sans text-[#3c3c3c] focus:border-[#9b9b8c] focus:outline-none focus:ring-1 focus:ring-[#9b9b8c]"
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
                <Clock className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9b9b8c]" />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block font-sans text-sm font-medium text-[#5c5c5c]">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border border-[#e8e6e1] bg-white px-4 py-2 font-sans text-[#3c3c3c] focus:border-[#9b9b8c] focus:outline-none focus:ring-1 focus:ring-[#9b9b8c]"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-none border border-[#9b9b8c] bg-[#9b9b8c] px-6 py-3 font-sans text-sm uppercase tracking-wider text-white transition-colors hover:bg-[#8a8a7d]"
          >
            {isSubmitting ? "Submitting..." : "Schedule Viewing"}
          </motion.button>
        </form>
      )}
    </div>
  )
}
