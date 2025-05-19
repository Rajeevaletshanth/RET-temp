"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, Edit, Key, Mail, Save, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fadeIn, staggerContainer } from "@/lib/motion-variants"

export default function MyAccountPage() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    walletAddress: "0x1a2b3c4d5e6f7g8h9i0j",
    joinDate: "January 2023",
    profileImage: "/placeholder.svg?height=100&width=100",
    investments: [
      {
        id: "1",
        property: "Luxury Apartment Complex",
        location: "Miami, FL",
        tokensOwned: 250,
        value: 25000,
        returnRate: "8.5%",
      },
      {
        id: "2",
        property: "Commercial Office Building",
        location: "New York, NY",
        tokensOwned: 500,
        value: 125000,
        returnRate: "7.2%",
      },
    ],
    transactions: [
      {
        id: "tx1",
        date: "2023-05-15",
        type: "Purchase",
        property: "Luxury Apartment Complex",
        amount: "$10,000",
        tokens: 100,
      },
      {
        id: "tx2",
        date: "2023-05-30",
        type: "Distribution",
        property: "Luxury Apartment Complex",
        amount: "$212.50",
        tokens: null,
      },
      {
        id: "tx3",
        date: "2023-06-10",
        type: "Purchase",
        property: "Commercial Office Building",
        amount: "$25,000",
        tokens: 100,
      },
      {
        id: "tx4",
        date: "2023-07-01",
        type: "Distribution",
        property: "Commercial Office Building",
        amount: "$450.00",
        tokens: null,
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="mb-8 text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Account
      </motion.h1>

      <Tabs defaultValue="profile" className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </motion.div>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <motion.div className="grid gap-8 md:grid-cols-3" variants={staggerContainer} initial="hidden" animate="show">
            <motion.div className="md:col-span-1" variants={fadeIn("right", "tween", 0.2, 1)}>
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Manage your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full">
                      <img
                        src={user.profileImage || "/placeholder.svg"}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit profile picture</span>
                      </Button>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">Member since {user.joinDate}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Wallet className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm truncate">{user.walletAddress}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="md:col-span-2" variants={fadeIn("left", "tween", 0.2, 1)}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Account Details</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </>
                    ) : (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" disabled={!isEditing} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} disabled={!isEditing} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" disabled={!isEditing} />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="New York" disabled={!isEditing} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Investments Tab */}
        <TabsContent value="investments">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.div className="mb-8 grid gap-6 md:grid-cols-3" variants={fadeIn("up", "tween", 0.2, 1)}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Investments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$150,000</div>
                  <p className="text-xs text-muted-foreground">+$25,000 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Tokens</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">750</div>
                  <p className="text-xs text-muted-foreground">Across 2 properties</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$662.50</div>
                  <p className="text-xs text-muted-foreground">7.9% average yield</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
              <Card>
                <CardHeader>
                  <CardTitle>My Investments</CardTitle>
                  <CardDescription>Overview of your property investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {user.investments.map((investment) => (
                      <div key={investment.id} className="rounded-lg border p-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h3 className="text-lg font-semibold">{investment.property}</h3>
                            <p className="text-sm text-muted-foreground">{investment.location}</p>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Tokens</p>
                              <p className="font-medium">{investment.tokensOwned}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Value</p>
                              <p className="font-medium">${investment.value.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Return</p>
                              <p className="font-medium">{investment.returnRate}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm">Buy More</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Transactions Tab */}
        <TabsContent value="transactions">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>View all your investment transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Property</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Amount</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Tokens</th>
                          </tr>
                        </thead>
                        <tbody>
                          {user.transactions.map((transaction) => (
                            <tr key={transaction.id} className="border-b">
                              <td className="px-4 py-3 text-sm">{new Date(transaction.date).toLocaleDateString()}</td>
                              <td className="px-4 py-3 text-sm">
                                <span
                                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                                    transaction.type === "Purchase"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-green-100 text-green-800"
                                  }`}
                                >
                                  {transaction.type}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm">{transaction.property}</td>
                              <td className="px-4 py-3 text-sm">{transaction.amount}</td>
                              <td className="px-4 py-3 text-sm">
                                {transaction.tokens !== null ? transaction.tokens : "-"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      Download Statement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <motion.div className="grid gap-8 md:grid-cols-2" variants={staggerContainer} initial="hidden" animate="show">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>
                    <Key className="mr-2 h-4 w-4" />
                    Update Password
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payment options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CreditCard className="mr-3 h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-xs text-muted-foreground">Expires 12/25</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Wallet className="mr-3 h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium truncate max-w-[200px]">{user.walletAddress}</p>
                          <p className="text-xs text-muted-foreground">Connected Wallet</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Disconnect
                      </Button>
                    </div>
                  </div>
                  <Button>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="md:col-span-2" variants={fadeIn("up", "tween", 0.3, 1)}>
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      "New investment opportunities",
                      "Distribution payments",
                      "Property updates",
                      "Account activity",
                      "Marketing communications",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{item}</span>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`email-${index}`}
                              className="h-4 w-4 rounded border-gray-300"
                              defaultChecked
                            />
                            <Label htmlFor={`email-${index}`}>Email</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`sms-${index}`}
                              className="h-4 w-4 rounded border-gray-300"
                              defaultChecked={index < 3}
                            />
                            <Label htmlFor={`sms-${index}`}>SMS</Label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-6">Save Preferences</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="md:col-span-2" variants={fadeIn("up", "tween", 0.4, 1)}>
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  <CardDescription>Irreversible account actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-red-200 p-4">
                    <div>
                      <h4 className="font-medium">Deactivate Account</h4>
                      <p className="text-sm text-muted-foreground">
                        Temporarily disable your account. You can reactivate anytime.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    >
                      Deactivate
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-red-200 p-4">
                    <div>
                      <h4 className="font-medium">Delete Account</h4>
                      <p className="text-sm text-muted-foreground">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
