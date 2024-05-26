import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { columns } from './_components/columns'
import { DataTable } from './_components/data-table'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'

const CoursesPage = async () => {
  const { userId } = auth()

  if (!userId) {
    return redirect('/')
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className="p-6 flex flex-col gap-6">
      <DataTable columns={columns} data={courses} />
      <Link href="/create">
        <Button type="button">Create</Button>
      </Link>
    </div>
  )
}

export default CoursesPage
