"use client"

// This is a simplified auth context for demonstration
// In a real app, you would use NextAuth.js or a similar solution

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type UserRole = "investor" | "builder" | "admin" | null
export type UserStatus = "authenticated" | "unauthenticated" | "loading"

interface User {
  id: string
  name: string
  email: string
  image?: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  status: UserStatus
  login: (email: string, password: string, role?: string) => Promise<void>
  loginAsAdmin: (email: string, password: string) => Promise<void>
  loginWithWallet: (walletAddress: string) => Promise<void>
  logout: () => void
}

const defaultUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  image: "/placeholder.svg?height=32&width=32",
  role: "investor",
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  status: "unauthenticated",
  login: async () => {},
  loginAsAdmin: async () => {},
  loginWithWallet: async () => {},
  logout: () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<UserStatus>("loading")

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setStatus("authenticated")
    } else {
      setStatus("unauthenticated")
    }
  }, [])

  const login = async (email: string, password: string, role = "investor") => {
    // Simulate API call
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Determine role based on parameter or email for demo purposes
    let userRole: UserRole = role as UserRole

    // For demo, you can also infer role from email
    if (email.includes("builder")) {
      userRole = "builder"
    } else if (email.includes("admin")) {
      userRole = "admin"
    }

    const loggedInUser = {
      ...defaultUser,
      email,
      name: email
        .split("@")[0]
        .replace(/\./g, " ")
        .replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase()),
      role: userRole,
    }

    setUser(loggedInUser)
    localStorage.setItem("user", JSON.stringify(loggedInUser))
    setStatus("authenticated")
  }

  const loginAsAdmin = async (email: string, password: string) => {
    // Simulate API call
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const adminUser = {
      ...defaultUser,
      id: "admin-1",
      name: "Admin User",
      email,
      role: "admin" as UserRole,
    }

    setUser(adminUser)
    localStorage.setItem("user", JSON.stringify(adminUser))
    setStatus("authenticated")
  }

  const loginWithWallet = async (walletAddress: string) => {
    // Simulate API call
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo, assign a role based on wallet address
    let role: UserRole = "investor"
    if (walletAddress.endsWith("1")) {
      role = "builder"
    } else if (walletAddress.endsWith("2")) {
      role = "admin"
    }

    const loggedInUser = {
      ...defaultUser,
      id: walletAddress.substring(0, 8),
      email: `${walletAddress.substring(0, 6)}@wallet.com`,
      role,
    }

    setUser(loggedInUser)
    localStorage.setItem("user", JSON.stringify(loggedInUser))
    setStatus("authenticated")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    setStatus("unauthenticated")
  }

  return (
    <AuthContext.Provider value={{ user, status, login, loginAsAdmin, loginWithWallet, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
