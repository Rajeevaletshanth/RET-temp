"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"

export default function DashboardRedirect() {
  const { user, status } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
      return
    }

    if (status === "authenticated" && user) {
      switch (user.role) {
        case "builder":
          router.push("/dashboard/builder")
          break
        case "admin":
          router.push("/dashboard/admin")
          break
        case "investor":
        default:
          router.push("/dashboard/investor")
          break
      }
    }
  }, [user, status, router])

  return (
    <div className="flex h-[70vh] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Redirecting to your dashboard...</h2>
        <p className="mt-2 text-muted-foreground">Please wait while we prepare your dashboard.</p>
      </div>
    </div>
  )
}
