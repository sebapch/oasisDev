import React from 'react'
import CollapsibleTable from '../CollapsibleTable/CollapsibleTable'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'

const TableAdmin = () => {
  return (
    <>
      <Link to={'/create'}>
        <Button>Create User</Button>
      </Link>
      <CollapsibleTable />
    </>
  )
}

export default TableAdmin