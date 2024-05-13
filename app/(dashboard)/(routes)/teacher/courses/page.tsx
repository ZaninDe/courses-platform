import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Payment, columns } from './_components/columns'
import { DataTable } from './_components/data-table'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ]
}

const CoursesPage = async () => {
  const data = await getData()
  return (
    <div className="p-6">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default CoursesPage
