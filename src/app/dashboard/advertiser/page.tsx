"use client"

import AdminLayout from '@/components/AdminLayout'
import React from 'react'
import useCheckAuth from '../../../../hooks/useCheckAuth'
import DashboardLayout from '@/components/DashboardLayout'

const AdvertiserDashboard = () => {
  const { user, loading } = useCheckAuth({ requireRole: 'ADVERTISER' })

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="font-bold text-gray-700 text-2xl">Verifying Credentials... Please wait</p>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div>
      <DashboardLayout>
        <h1 className="text-2xl font-bold mb-4">Advertiser Dashboard</h1>
      </DashboardLayout>
    </div>
  )
}

export default AdvertiserDashboard
