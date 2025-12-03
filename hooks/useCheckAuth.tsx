import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const useCheckAuth = () => {
    interface User {
        id: string,
        email: string,
        isAdmin: boolean
    }

    const router = useRouter();
    const [user, setuser] = useState<User | null>(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch("/api/auth/me", { credentials: "include" });
                const data = await res.json();

                if (!data.user || !data.user.isAdmin) {
                    router.push("/auth/login?message=Access denied");
                }

                setuser(data.user);
            } catch (error) {
                console.log("Auth failed error", error);
                router.push("/auth/login?message=Authentication failed")
            } finally{
                setloading(false)
            }
        }
        checkAuth();
    }, [router])


    return {user, loading}
}

export default useCheckAuth
