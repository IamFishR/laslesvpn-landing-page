

const Layout = (props) => {
    return (
        <div className={`xl:w-[1140px] sm:w-full px-4 xl:px-0 mx-auto ${props.className}`}>
            {props.children}
        </div>
    );
}


export default Layout;