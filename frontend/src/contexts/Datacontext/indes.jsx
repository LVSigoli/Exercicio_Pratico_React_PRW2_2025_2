// External Libraries
import { createContext, useContext } from 'react'

// Hooks
import { useUsers } from '../../hooks/useUsers'
import { useProducts } from '../../hooks/useProducts'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  // Hooks
  const {
    users,
    loading,
    selectedUser,
    refreshUsers,
    handleCreateUser,
    handleDeleteUser,
    handleCreatePurchase,
    handleDeletePurchase,
    handleUserSelection,
  } = useUsers()

  const {
    products,
    loadingProducts,
    selectedProduct,
    handleDeleProduct,
    handleUpdateProduct,
    handleCreateProduct,
    handleProductSelection,
  } = useProducts({ refreshUsers })

  return (
    <DataContext.Provider
      value={{
        users,
        loading,
        products,
        selectedUser,
        loadingProducts,
        selectedProduct,
        handleCreateUser,
        handleDeleteUser,
        handleDeleProduct,
        handleUserSelection,
        handleUpdateProduct,
        handleCreateProduct,
        handleDeletePurchase,
        handleCreatePurchase,
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
