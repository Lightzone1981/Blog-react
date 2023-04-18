import "./BurgerMenu.css";
import UserAvatar from "../UserAvatar/UserAvatar";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	setAuthorize,
	setTheme,
	setBurgerStatus,
    setProfileModalVisibleStatus,
} from "../../redux/action-creators/index";
import { IStoreState } from "../../types";
import { useRef } from "react";
import { useClickOutside } from "../../hooks/hooks";

const Menu = () => {
	const dispatch = useDispatch();

	const theme = useSelector((state: IStoreState) => state.posts.posts);
	const authorizedUserName = useSelector(
		(state: IStoreState) => state.user.authorizedUserName
	);
	const burgerStatus = useSelector(
		(state: IStoreState) => state.ui.burgerStatus
	);

	const handleTheme = (theme: string) => {
		dispatch(setTheme(theme));
	};

	const handleLogOut = () => {
        dispatch(setAuthorize(''));
        dispatch(setBurgerStatus(false))
	};
    const handleMenuItemClick = () => {
        dispatch(setBurgerStatus(false))
    };
    
    const handleProfileClick = () => {
        dispatch(setBurgerStatus(false))
        dispatch(setProfileModalVisibleStatus(true))
	};

	const menuRef = useRef(null);
	useClickOutside(menuRef, () => dispatch(setBurgerStatus(false)));

	return (
		<ul
			className="menu"
			data-visible={`${burgerStatus}`}
			ref={menuRef}
			data-authorize={`${authorizedUserName.length ? true : false}`}>
			{authorizedUserName.length ? (
				<li key={"item-1"} className="menu__item">
					<UserAvatar username="Evgeniy_Lebedevski" location="menu" />
				</li>
			) : (
				<></>
			)}

            <Link
                to={`/posts/`}
                className="menu__link"
                onClick={handleMenuItemClick}
                style={{ textDecoration: "none", color: "#313037" }}>
                
                <li key={"item-2"} className="menu__item" >
                    Home
                </li>
            </Link>

			{authorizedUserName.length ? (
				<>
                <Link
                    to={`/add-post`}
                    className="menu__link"
                    onClick={handleMenuItemClick}
                    style={{ textDecoration: "none", color: "#313037" }}>
                    
                    <li key={"item-3"} className="menu__item" >
                        Add post
                    </li>
                </Link>

                <Link
                    to={`/add-post`}
                    className="menu__link"
                    onClick={handleMenuItemClick}
                    style={{ textDecoration: "none", color: "#313037" }}>
                    
                    <li key={"item-4"} className="menu__item" onClick={handleProfileClick}>
                        Profile
                    </li>
                </Link>
                </>)
                : <></>
			}

			<li key={"item-5"} className="menu__item menu__item--divider"></li>

			<li key={"item-6"} className="menu__item mode-checker">
				<button
					className="mode-checker__button"
					data-theme={`${theme}`}
					onClick={() => handleTheme("light")}>
					<SunIcon width="24" height="24" color="#313037" />
				</button>
				<button
					className="mode-checker__button"
					data-theme={`${theme}`}
					onClick={() => handleTheme("dark")}>
					<MoonIcon width="24" height="24" color="#313037" />
				</button>
			</li>
			{authorizedUserName.length ? (
				<li key={"item-7"} className="menu__item">
					<Link
						to={"/"}
						className="log-button"
						style={{ textDecoration: "none" }}>
						<button
							className="log-button"
							onClick={() => {
								handleLogOut();
							}}>
							Log out
						</button>
					</Link>
				</li>
			) : (
				<li key={"item-7"} className="menu__item">
					<Link
						to={"/sign-in"}
                        className="log-button"
                        onClick={handleMenuItemClick}
						style={{ textDecoration: "none" }}>
						Sign in
					</Link>
				</li>
			)}
		</ul>
	);
};
export default Menu;
