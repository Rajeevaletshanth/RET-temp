"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddPropertyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to smart contract
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Property submitted for approval!")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Property Title</Label>
          <Input id="title" placeholder="Luxury Apartment Complex" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Miami, FL" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Describe the property and investment opportunity..."
          className="min-h-[120px]"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="totalTokens">Total Tokens</Label>
          <Input id="totalTokens" type="number" placeholder="1000" min="1" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tokenPrice">Token Price (USD)</Label>
          <Input id="tokenPrice" type="number" placeholder="100" min="1" step="0.01" required />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="propertyType">Property Type</Label>
          <Select>
            <SelectTrigger id="propertyType">
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="mixed">Mixed Use</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="investmentTerm">Investment Term (Years)</Label>
          <Select>
            <SelectTrigger id="investmentTerm">
              <SelectValue placeholder="Select investment term" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Year</SelectItem>
              <SelectItem value="3">3 Years</SelectItem>
              <SelectItem value="5">5 Years</SelectItem>
              <SelectItem value="10">10 Years</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Property Images</Label>
        <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8">
          <Upload className="mb-4 h-8 w-8 text-muted-foreground" />
          <h3 className="text-sm font-medium">Drag and drop your images here</h3>
          <p className="mt-1 text-xs text-muted-foreground">Support for JPG, PNG, WEBP. Max 5MB each.</p>
          <Button type="button" variant="outline" className="mt-4">
            Browse Files
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="documents">Property Documents</Label>
        <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8">
          <Upload className="mb-4 h-8 w-8 text-muted-foreground" />
          <h3 className="text-sm font-medium">Upload property documents</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Include title deeds, permits, inspections, etc. PDF format only.
          </p>
          <Button type="button" variant="outline" className="mt-4">
            Browse Files
          </Button>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Property for Approval"}
      </Button>
    </form>
  )
}
