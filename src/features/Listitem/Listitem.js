import Checkbox from '../../components/Checkbox/Checkbox'
import './style.css'




const ListItem = ({checked, title, toggle}) => {
    return (
        <div className='listItemWrapper'>
            <Checkbox value={checked} toggle={toggle}/>
            {title}
        </div>
    )
}

export default ListItem