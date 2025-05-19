"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  // Sample data - in a real app, this would come from an API
  const recentProperties = [
    {
      id: 1,
      name: "Modern Apartment Complex",
      developer: "Urban Developers LLC",
      location: "Portland, OR",
      status: "pending",
      submittedDate: "2023-05-10",
    },
    {
      id: 2,
      name: "Mixed-Use Development",
      developer: "Horizon Properties",
      location: "Nashville, TN",
      status: "approved",
      submittedDate: "2023-05-05",
    },
    {
      id: 3,
      name: "Waterfront Apartments",
      developer: "Blue Harbor Group",
      location: "Seattle, WA",
      status: "active",
      submittedDate: "2023-04-28",
    },
    {
      id: 4,
      name: "Retail Shopping Center",
      developer: "Commercial Ventures Inc",
      location: "Denver, CO",
      status: "rejected",
      submittedDate: "2023-05-08",
      rejectionReason: "Incomplete documentation",
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      type: "investor",
      joinDate: "2023-05-12",
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      type: "investor",
      joinDate: "2023-05-11",
      status: "active",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "m.brown@horizonproperties.com",
      type: "builder",
      joinDate: "2023-05-09",
      status: "pending",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      type: "investor",
      joinDate: "2023-05-08",
      status: "active",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 border-yellow-200 dark:border-yellow-800/30"
          >
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge
            variant="outline"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500 border-blue-200 dark:border-blue-800/30"
          >
            Approved
          </Badge>
        )
      case "active":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500 border-green-200 dark:border-green-800/30"
          >
            Active
          </Badge>
        )
      case "rejected":
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500 border-red-200 dark:border-red-800/30"
          >
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative z-10 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
            <p className="text-xl text-gray-300 mb-8">Manage platform properties, users, and system settings</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-gray-900 hover:bg-gray-100">View All Properties</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Manage Users
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                System Settings
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Properties</CardTitle>
              <CardDescription>Platform-wide</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
              <p className="text-muted-foreground text-sm mt-1">4 pending approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Users</CardTitle>
              <CardDescription>All account types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,245</div>
              <p className="text-muted-foreground text-sm mt-1">+12% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Value</CardTitle>
              <CardDescription>All properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$42.8M</div>
              <p className="text-muted-foreground text-sm mt-1">$12.5M currently funding</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Platform Revenue</CardTitle>
              <CardDescription>Monthly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$86,420</div>
              <p className="text-green-600 dark:text-green-400 text-sm flex items-center mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                8.2% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="properties" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="properties">Recent Properties</TabsTrigger>
            <TabsTrigger value="users">Recent Users</TabsTrigger>
          </TabsList>

          <TabsContent value="properties">
            <Card>
              <CardHeader>
                <CardTitle>Property Submissions</CardTitle>
                <CardDescription>Review and manage recent property submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property Name</TableHead>
                      <TableHead>Developer</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentProperties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell className="font-medium">{property.name}</TableCell>
                        <TableCell>{property.developer}</TableCell>
                        <TableCell>{property.location}</TableCell>
                        <TableCell>{new Date(property.submittedDate).toLocaleDateString()}</TableCell>
                        <TableCell>{getStatusBadge(property.status)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          {property.status === "pending" && (
                            <>
                              <Button variant="ghost" size="sm" className="text-green-600 dark:text-green-500">
                                Approve
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600 dark:text-red-500">
                                Reject
                              </Button>
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Registrations</CardTitle>
                <CardDescription>Review and manage recent user registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell className="capitalize">{user.type}</TableCell>
                        <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          {user.status === "pending" && (
                            <Button variant="ghost" size="sm" className="text-green-600 dark:text-green-500">
                              Approve
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" className="text-red-600 dark:text-red-500">
                            Suspend
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
