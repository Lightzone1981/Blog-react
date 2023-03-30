const ClearButton = ({buttonType, callback}:{ buttonType: string, callback: Function }) => {
    return (
        <div className={`search-bar__button search-bar__button--${buttonType}`} onClick ={(e)=>callback(e)} >
        </div>
    )
}
export default ClearButton