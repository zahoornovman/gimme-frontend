import { MenuContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';



function Menu() {
    const status = useSelector((state) => state.user.loading)
    const navigate = useNavigate()
    return (
        <MenuContainer>
            <div
            className="menuSection"
            >
                <h2
                    className="fontsize"
                >
                    Likes
                </h2>
                <div
                    onClick={() => navigate('/likes/all')}
                    className="fontsize"
                >
                    All likes
                </div>
                {
                    status === "completed"
                        ?
                        <>
                            <div
                                onClick={() => navigate('/likes/my')}
                                className="fontsize"
                            >
                                My likes
                            </div>
                            <div
                                onClick={() => navigate('/likes/new')}
                                className="fontsize"
                            >
                                New like
                            </div>
                        </>
                        :
                        <></>
                }
            </div>
            <div
            className="menuSection"
            >
                <h2
                    className="fontsize"
                >
                    Offers
                </h2>
                <div
                    onClick={() => navigate('/offers/all')}
                    className="fontsize"
                >
                    All offers
                </div>
                {
                    status === "completed"
                        ?
                        <>
                            <div
                                onClick={() => navigate('/offers/my')}
                                className="fontsize"
                            >My offers
                            </div>
                            <div
                                onClick={() => navigate('/offers/new')}
                                className="fontsize"
                            >
                                New offer
                            </div>
                        </>
                        :
                        <></>
                }
            </div>
            <div
            className="menuSection"
            >
                <h2
                    className="fontsize"
                >
                    Admin
                </h2>
                {
                    status === "completed"
                        ?
                        <div
                            onClick={() => navigate('/admin/profile')}
                            className="fontsize"
                        >
                            Profile
                        </div>
                        :
                        <></>
                }

                <div
                    onClick={() => navigate('/admin/faq')}
                    className="fontsize"
                >
                    FAQ
                </div>
                <div
                    onClick={() => navigate('/admin/contact')}
                    className="fontsize"
                >
                    Contact
                </div>
                <div
                    onClick={() => navigate('/admin/termsofuse')}
                    className="fontsize"
                >
                    Terms of use
                </div>
            </div>
        </MenuContainer>
    );
}

export default Menu;