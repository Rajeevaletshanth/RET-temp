import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Building2, Calendar, FileText, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InvestModal from "@/components/invest-modal"

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  // In a real app, you would fetch this data based on the ID
  const property = {
    id: params.id,
    title: "Luxury Apartment Complex",
    location: "Miami, FL",
    description:
      "A premium residential development in the heart of Miami's financial district. This property features 120 luxury apartments with high-end finishes, a rooftop pool, fitness center, and 24/7 concierge service.",
    tokenPrice: 100,
    totalTokens: 10000,
    soldTokens: 6500,
    availableTokens: 3500,
    expectedReturn: "8-12% annually",
    investmentTerm: "5 years",
    minimumInvestment: "$500",
    propertyType: "Residential",
    squareFeet: "150,000",
    yearBuilt: "2022",
    occupancyRate: "92%",
    annualIncome: "$2.4M",
    operatingExpenses: "$950K",
    netOperatingIncome: "$1.45M",
    capRate: "5.8%",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    documents: [
      { name: "Property Prospectus", type: "PDF", size: "2.4 MB" },
      { name: "Financial Projections", type: "PDF", size: "1.8 MB" },
      { name: "Legal Documentation", type: "PDF", size: "3.2 MB" },
    ],
    builder: {
      name: "Miami Development Co.",
      properties: 12,
      investors: 850,
      totalRaised: "$45M",
    },
  }

  const percentSold = Math.round((property.soldTokens / property.totalTokens) * 100)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/properties"
        className="mb-6 inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Properties
      </Link>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          {/* Property Images */}
          <div className="mb-8 overflow-hidden rounded-xl">
            <Image
              src={property.images[0] || "/placeholder.svg"}
              alt={property.title}
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Property Details */}
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold">{property.title}</h1>
            <div className="mb-4 flex items-center text-muted-foreground">
              <MapPin className="mr-1 h-5 w-5" />
              {property.location}
            </div>
            <p className="text-muted-foreground">{property.description}</p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="builder">Builder</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-4 text-lg font-semibold">Property Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Type</span>
                      <span className="font-medium">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Square Feet</span>
                      <span className="font-medium">{property.squareFeet}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Occupancy Rate</span>
                      <span className="font-medium">{property.occupancyRate}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-4 text-lg font-semibold">Investment Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Return</span>
                      <span className="font-medium">{property.expectedReturn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Investment Term</span>
                      <span className="font-medium">{property.investmentTerm}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum Investment</span>
                      <span className="font-medium">{property.minimumInvestment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Token Price</span>
                      <span className="font-medium">${property.tokenPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="financials" className="mt-6">
              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-lg font-semibold">Financial Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Income</span>
                    <span className="font-medium">{property.annualIncome}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Operating Expenses</span>
                    <span className="font-medium">{property.operatingExpenses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Net Operating Income</span>
                    <span className="font-medium">{property.netOperatingIncome}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cap Rate</span>
                    <span className="font-medium">{property.capRate}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 text-md font-semibold">Projected Returns</h4>
                  <div className="rounded-lg border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="p-3 text-left">Year</th>
                          <th className="p-3 text-left">Cash Flow</th>
                          <th className="p-3 text-left">Return</th>
                          <th className="p-3 text-left">Cumulative</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3">Year 1</td>
                          <td className="p-3">$8.50</td>
                          <td className="p-3">8.5%</td>
                          <td className="p-3">8.5%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Year 2</td>
                          <td className="p-3">$9.25</td>
                          <td className="p-3">9.25%</td>
                          <td className="p-3">17.75%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Year 3</td>
                          <td className="p-3">$10.00</td>
                          <td className="p-3">10.0%</td>
                          <td className="p-3">27.75%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Year 4</td>
                          <td className="p-3">$10.75</td>
                          <td className="p-3">10.75%</td>
                          <td className="p-3">38.5%</td>
                        </tr>
                        <tr>
                          <td className="p-3">Year 5</td>
                          <td className="p-3">$11.50</td>
                          <td className="p-3">11.5%</td>
                          <td className="p-3">50.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    *Projected returns are estimates and not guaranteed. Past performance is not indicative of future
                    results.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="mt-6">
              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-lg font-semibold">Property Documents</h3>
                <div className="space-y-4">
                  {property.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center">
                        <FileText className="mr-3 h-6 w-6 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {doc.type} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="builder" className="mt-6">
              <div className="rounded-lg border p-6">
                <div className="flex items-center">
                  <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <Building2 className="h-8 w-8 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{property.builder.name}</h3>
                    <p className="text-sm text-muted-foreground">Verified Builder</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border p-4 text-center">
                    <Building2 className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
                    <p className="text-2xl font-bold">{property.builder.properties}</p>
                    <p className="text-sm text-muted-foreground">Properties</p>
                  </div>

                  <div className="rounded-lg border p-4 text-center">
                    <Users className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
                    <p className="text-2xl font-bold">{property.builder.investors}</p>
                    <p className="text-sm text-muted-foreground">Investors</p>
                  </div>

                  <div className="rounded-lg border p-4 text-center">
                    <Calendar className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-sm text-muted-foreground">Years Active</p>
                  </div>

                  <div className="rounded-lg border p-4 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="mx-auto mb-2 h-6 w-6 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <p className="text-2xl font-bold">{property.builder.totalRaised}</p>
                    <p className="text-sm text-muted-foreground">Total Raised</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline">View Builder Profile</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Investment Card */}
        <div className="sticky top-24 h-fit rounded-xl border p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Investment Details</h2>

          <div className="mb-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Price per token</span>
              <span className="font-bold">${property.tokenPrice}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Available tokens</span>
              <span className="font-bold">{property.availableTokens.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Minimum investment</span>
              <span className="font-bold">{property.minimumInvestment}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Expected return</span>
              <span className="font-bold">{property.expectedReturn}</span>
            </div>
          </div>

          <div className="mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Funding Progress</span>
              <span className="font-medium">{percentSold}%</span>
            </div>
            <Progress value={percentSold} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {property.soldTokens.toLocaleString()} / {property.totalTokens.toLocaleString()} tokens sold
            </p>
          </div>

          <InvestModal
            propertyId={property.id}
            propertyTitle={property.title}
            tokenPrice={property.tokenPrice}
            availableTokens={property.availableTokens}
            trigger={<Button className="w-full">Invest Now</Button>}
          />

          <div className="mt-4">
            <Button variant="outline" className="w-full">
              Add to Watchlist
            </Button>
          </div>

          <div className="mt-6 rounded-lg bg-slate-50 p-4">
            <h3 className="mb-2 text-sm font-semibold">Important Information</h3>
            <p className="text-xs text-muted-foreground">
              Investing in tokenized real estate involves risks, including potential loss of principal. Past performance
              is not indicative of future results. Please read all offering documents before investing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
