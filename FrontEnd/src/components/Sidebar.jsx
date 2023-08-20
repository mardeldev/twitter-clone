import SidebarCard from "./index.js";
import { sidebarLinks } from "../constants";

const Sidebar = () => {
    return (

        <div>


            {/* ----------------------sidebar for small screen--------------------- */}


            <div className="d-lg-none d-xl-none d-md-none d-xs-block d-sm-block">
                < nav className="navbar navbar-dark bg-transparent" >
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav >


                <div className={`offcanvas offcanvas-start hide text-bg-dark`} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header d-flex justify-content-between ms-2">
                        <img src="../src/assets/logo-long.png" alt="Logo" width="90" height="90" className="d-inline-block align-text-top" />
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex justify-content-center">
                        <ul className="nav container-fluid  flex-column grid gap-5">
                            {sidebarLinks.map(card => (
                                <SidebarCard key={card.id} card={card} className="" />
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            {/* ----------------------sidebar for large screen--------------------- */}

            <div className="d-none d-xs-none d-sm-none d-lg-block d-xl-block d-md-block">

                < nav className="navbar navbar-dark bg-transparent" >
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollingLarge" aria-controls="offcanvasScrolling" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav >


                <div className={`offcanvas offcanvas-start show text-bg-dark`} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrollingLarge" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header d-flex justify-content-between ms-2">
                        <img src="../src/assets/logo-long.png" alt="Logo" width="90" height="90" className="d-inline-block align-text-top" />
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex justify-content-center">
                        <ul className="nav container-fluid  flex-column grid gap-5">
                            {sidebarLinks.map(card => (
                                <SidebarCard key={card.id} card={card} className="" />
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Sidebar