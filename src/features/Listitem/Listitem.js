import Checkbox from '../../components/Checkbox/Checkbox'
import Icon from '../../components/Icon'
import './style.css'




const ListItem = ({checked, title, toggle, edit}) => {
    
    const handleEdit = () => {
        edit(title)
    }
    
    return (
        <div className='listItemWrapper'>
            <div className='listItemSideWrapper'>
            <Checkbox checked={checked} toggle={toggle} title={title}/>
            {title}
            </div>
            <div className='listItemWrapper'>
                <div className='itemIcon' onClick={handleEdit}>
                  <Icon className='ri-edit-circle-fill'/>  
                </div>
                
            </div>
        </div>
    )
}

export default ListItem