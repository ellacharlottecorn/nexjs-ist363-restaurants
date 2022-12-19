import Label from './Label'
import Select from './Select'
import styles from './Filters.module.scss'

const Filters = ({
    activeCategory,
    categories,
    setActiveCategory
}) => {
    const filteredOptions = categories.map((category) => {
        return category.node.name;
    })
    return <div className={styles.filterbar}>
        <Label>Filters: </Label>
        <Select 
            options={filteredOptions}
            changeHandler={setActiveCategory}
        />
    </div>
}
export default Filters