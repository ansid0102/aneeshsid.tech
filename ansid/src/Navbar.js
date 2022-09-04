import './navbar.css'
function Navbar(){
    return(
        <>
        <header className='h_title'>
            <h1 className="title">K Hari <span className='mid'>Aneesh</span> Siddhartha</h1>
            <ul className='button_tab'>
                <li>
                    <button>Projects</button>
                    <button>Contact</button>
                </li>
            </ul>
        </header>
        
    </>
    )
}

export default Navbar