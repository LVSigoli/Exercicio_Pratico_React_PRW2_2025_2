// Components
import { UserForm } from '../../views/UserForm'
import { ProductsForm } from '../../views/ProductsForm'

// Utils
import { FORM_TYPES } from '../../../../../utils/fomTypes'

// Styles
import styles from './styles.module.css'

export const FormViews = ({ currentView }) => {
  // Functions
  function renderForms() {
    switch (currentView) {
      case FORM_TYPES.USER:
        return <UserForm />

      case FORM_TYPES.PRODUCT:
        return <ProductsForm />

      case FORM_TYPES.PURCHASE:
        return <UserForm />

      case FORM_TYPES.PRODUCT_EDIT:
        return <ProductsForm />

      default:
        return null
    }
  }

  return (
    <div className={styles.container}>{renderForms()}</div>
  )
}
