import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import { DropOption } from '../../components'
const confirm = Modal.confirm

function actions({ selected, deleteRecurringJob, editRecurringJob }) {
  const handleMenuClick = (event, record) => {
    switch (event.key) {
      case 'delete':
        confirm({
          title: `Are you sure you want to delete Recurring Job ${record.name} ?`,
          onOk() {
            deleteRecurringJob(record)
          },
        })
        break
      case 'edit':
        editRecurringJob(record)
        break
      default:
    }
  }

  const availableActions = [
    { key: 'delete', name: 'Delete' },
    { key: 'edit', name: 'Edit' },
  ]

  return (
    <DropOption menuOptions={availableActions}
      onMenuClick={(e) => handleMenuClick(e, selected)}
    />
  )
}

actions.propTypes = {
  selected: PropTypes.object,
  deleteRecurringJob: PropTypes.func,
  editRecurringJob: PropTypes.func,
}

export default actions
