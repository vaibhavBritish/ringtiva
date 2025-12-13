import { NextResponse } from "next/server"
import { jwtVerify } from "jose"
import type { NextRequest } from "next/server"

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get("token")?.value

  if (pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/auth/login?message=please login first", req.url)
      )
    }

    try {
      const { payload } = await jwtVerify(token, secret)

      const userType = payload.userType as string | undefined
      const isAdmin = Boolean(payload.isAdmin)

      
      if (pathname === "/dashboard" || pathname === "/dashboard/") {
        if (isAdmin) {
          return NextResponse.redirect(new URL("/admin", req.url))
        } else if (userType === "AFFILIATE") {
          return NextResponse.redirect(new URL("/dashboard/affiliate", req.url))
        } else if (userType === "ADVERTISER") {
          return NextResponse.redirect(new URL("/dashboard/advertiser", req.url))
        } else {
          // User has no role assigned
          return NextResponse.redirect(
            new URL("/auth/login?message=Role not assigned", req.url)
          )
        }
      }

      
      if (pathname.startsWith("/admin") && !isAdmin) {
        return NextResponse.redirect(
          new URL("/auth/login?message=Admin access only", req.url)
        )
      }

      
      if (pathname.startsWith("/dashboard/affiliate")) {
        if (userType !== "AFFILIATE") {
          
          if (userType === "ADVERTISER") {
            return NextResponse.redirect(new URL("/dashboard/advertiser", req.url))
          }
          
          return NextResponse.redirect(
            new URL("/auth/login?message=Affiliate access only", req.url)
          )
        }
      }

    
      if (pathname.startsWith("/dashboard/advertiser")) {
        if (userType !== "ADVERTISER") {
          // If user is affiliate, redirect to their dashboard
          if (userType === "AFFILIATE") {
            return NextResponse.redirect(new URL("/dashboard/affiliate", req.url))
          }
          // Otherwise, redirect to login
          return NextResponse.redirect(
            new URL("/auth/login?message=Advertiser access only", req.url)
          )
        }
      }

      
      if (!userType && pathname.startsWith("/dashboard") && pathname !== "/dashboard" && pathname !== "/dashboard/") {
        return NextResponse.redirect(
          new URL("/auth/login?message=Role not assigned", req.url)
        )
      }

      return NextResponse.next()

    } catch {
      return NextResponse.redirect(
        new URL("/auth/login?message=Authentication failed", req.url)
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
}
