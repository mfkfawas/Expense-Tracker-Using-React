import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [openNewExpense, setOpenNewExpense] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    }
    props.onAddExpense(expenseData)
    setOpenNewExpense(false)
  }

  const openNewExpenseHandler = (event) => {
    setOpenNewExpense(true)
  }

  const cancelNewExpenseHandler = (event) => {
    event.preventDefault()
    console.log('cancelling')
    setOpenNewExpense(false)
  }

  return (
    <div className='new-expense'>
      {openNewExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelNewExpenseHandler}
        />
      ) : (
        <button
          type='submit'
          onClick={openNewExpenseHandler}
          className='new-expense'
        >
          New Expense
        </button>
      )}
    </div>
  )
}

export default NewExpense
