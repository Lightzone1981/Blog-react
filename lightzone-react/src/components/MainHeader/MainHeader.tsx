import { BurgerMenu } from "../BurgerMenu"
import { SearchBar } from "../SearchBar"
import { UserAvatar } from "../UserAvatar"
import './MainHeader.css'

const MainHeader = () => {
    return (
        <header className="main-header">
            <BurgerMenu/>
            <SearchBar/>
            <UserAvatar username=''/>
        </header>
    )
}

export default MainHeader