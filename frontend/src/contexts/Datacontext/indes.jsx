// External Libraries
import { createContext, useContext } from 'react'

// Hooks
import { useUsers } from '../../hooks/useUsers'
import { useProducts } from '../../hooks/useProducts'
const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const {
    users,
    loading,
    refreshUsers,
    handleCreateUser,
    handleDeleteUser,
  } = useUsers()

  const {
    products,
    loadingProducts,
    selectedProduct,
    handleDeleProduct,
    handleCreateProduct,
    handleProductSelection,
  } = useProducts({ refreshUsers })

  return (
    <DataContext.Provider
      value={{
        users,
        loading,
        products,
        loadingProducts,
        selectedProduct,
        handleCreateUser,
        handleDeleteUser,
        handleDeleProduct,
        handleCreateProduct,
        handleProductSelection,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error(
      'useDataContext precisa estar dentro de DataProvider'
    )
  }
  return context
}
