import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  isAdmin: boolean
  userType?: 'AFFILIATE' | 'ADVERTISER'
}

interface UseCheckAuthOptions {
  requireAdmin?: boolean
  requireRole?: 'AFFILIATE' | 'ADVERTISER'
  redirectTo?: string
}

const useCheckAuth = (options: UseCheckAuthOptions = {}) => {
  const { requireAdmin = false, requireRole, redirectTo } = options
  const router = useRouter()

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me', {
          credentials: 'include',
        })

        if (!res.ok) {
          throw new Error('Unauthorized')
        }

        const data = await res.json()
        const currentUser: User | null = data?.user ?? null

        if (!currentUser) {
          router.replace('/auth/login?message=Please login first')
          return
        }

        // 🔐 Admin check
        if (requireAdmin && !currentUser.isAdmin) {
          router.replace('/auth/login?message=Admin access required')
          return
        }

        // 🎭 Role check
        if (requireRole && currentUser.userType !== requireRole) {
          if (currentUser.isAdmin) {
            router.replace('/admin')
            return
          }

          if (currentUser.userType === 'AFFILIATE') {
            router.replace('/dashboard/affiliate')
            return
          }

          if (currentUser.userType === 'ADVERTISER') {
            router.replace('/dashboard/advertiser')
            return
          }

          const roleName = requireRole === 'AFFILIATE' ? 'Affiliate' : 'Advertiser'
          router.replace(
            redirectTo ||
              `/auth/login?message=${encodeURIComponent(`${roleName} access required`)}`
          )
          return
        }

        // ✅ All checks passed
        setUser(currentUser)
      } catch (error) {
        console.error('Auth check failed:', error)
        router.replace('/auth/login?message=Authentication failed')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [requireAdmin, requireRole, redirectTo, router])

  return { user, loading }
}

export default useCheckAuth
