"use client"

import type React from "react"

import { useState } from "react"
import { Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InvestModalProps {
  propertyId: string
  propertyTitle: string
  tokenPrice: number
  availableTokens: number
  trigger?: React.ReactNode
}

export default function InvestModal({
  propertyId,
  propertyTitle,
  tokenPrice,
  availableTokens,
  trigger,
}: InvestModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [tokenAmount, setTokenAmount] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalCost = tokenAmount * tokenPrice

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call to smart contract
    setTimeout(() => {
      setIsSubmitting(false)
      setIsOpen(false)
      alert(`Successfully invested in ${tokenAmount} tokens for ${propertyTitle}!`)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            <Wallet className="mr-2 h-4 w-4" />
            Invest
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invest in Property</DialogTitle>
          <DialogDescription>
            Purchase tokens for {propertyTitle}. Each token represents fractional ownership in this property.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tokenAmount" className="text-right">
              Tokens
            </Label>
            <Input
              id="tokenAmount"
              type="number"
              min="1"
              max={availableTokens}
              value={tokenAmount}
              onChange={(e) => setTokenAmount(Number.parseInt(e.target.value) || 1)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Price</Label>
            <div className="col-span-3">${tokenPrice.toFixed(2)} per token</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Available</Label>
            <div className="col-span-3">{availableTokens.toLocaleString()} tokens</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Total</Label>
            <div className="col-span-3 text-lg font-bold">${totalCost.toFixed(2)}</div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting || tokenAmount <= 0 || tokenAmount > availableTokens}>
            {isSubmitting ? "Processing..." : "Confirm Investment"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
