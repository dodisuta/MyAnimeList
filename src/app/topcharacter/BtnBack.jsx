"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Btnback = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    Kembali
  </button>
  )
}

export default Btnback