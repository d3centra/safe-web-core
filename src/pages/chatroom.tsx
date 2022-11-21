import type { NextPage } from 'next'
import Head from 'next/head'
import AddressBookTable from '@/components/address-book/AddressBookTable'

const Chatroom: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe – Address book</title>
      </Head>

      <AddressBookTable />
    </>
  )
}

export default Chatroom
