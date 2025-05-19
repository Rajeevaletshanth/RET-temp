"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useAuth } from "@/lib/auth"

interface ConnectWalletButtonProps {
  className?: string
}

export default function ConnectWalletButton({ className }: ConnectWalletButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { loginWithWallet } = useAuth()

  const handleConnect = async (walletType: string) => {
    // In a real app, this would connect to the actual wallet
    // For demo purposes, we'll just generate a random address
    const randomAddress = `0x${Math.random().toString(16).substring(2, 10)}${walletType.charAt(0)}`
    await loginWithWallet(randomAddress)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className={`rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground ${className}`}
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>Connect your wallet to access the platform features.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button
              variant="outline"
              className="flex items-center justify-start gap-3 p-6 text-left"
              onClick={() => handleConnect("MetaMask")}
            >
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="MetaMask"
                width={40}
                height={40}
                className="rounded-md"
              />
              <div>
                <div className="font-semibold">MetaMask</div>
                <div className="text-xs text-muted-foreground">Connect to your MetaMask wallet</div>
              </div>
            </Button>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button
              variant="outline"
              className="flex items-center justify-start gap-3 p-6 text-left"
              onClick={() => handleConnect("WalletConnect")}
            >
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="WalletConnect"
                width={40}
                height={40}
                className="rounded-md"
              />
              <div>
                <div className="font-semibold">WalletConnect</div>
                <div className="text-xs text-muted-foreground">Connect using WalletConnect</div>
              </div>
            </Button>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button
              variant="outline"
              className="flex items-center justify-start gap-3 p-6 text-left"
              onClick={() => handleConnect("Coinbase")}
            >
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Coinbase Wallet"
                width={40}
                height={40}
                className="rounded-md"
              />
              <div>
                <div className="font-semibold">Coinbase Wallet</div>
                <div className="text-xs text-muted-foreground">Connect to your Coinbase wallet</div>
              </div>
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
