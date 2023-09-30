import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { UserButton, useAuth } from "@clerk/nextjs";
import { isTeacher } from '@/lib/teacher'

const CheckTeacher = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <div className="">
        {
            isTeacher(userId)? (
                <Link href="/teacher/courses">
                  <Button size="sm" variant="ghost">
                    Teacher Mode
                  </Button>
                </Link>
              ):null
        }
    </div>
  )
}

export default CheckTeacher