import './BurgerMenu.css'
interface IItem {
    id:number,
    content: string,
    url:string
}

const Menu = ({visible, itemsArray}: { visible: boolean, itemsArray: IItem[] }) => {
    return (
        <ul className="menu" data-visible={`${visible}`}>
            {itemsArray.map(el =>
                <li key={el.id} className='menu__item'>
                    <a className='menu__link' href={el.url}>{el.content}</a>
                    
                </li>)}
      </ul>
    )  
}
export default Menu