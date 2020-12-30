import React, {Component} from 'react';
import './ShoppingCart.css';
import ChooseSize from "./ChooseSize";
import ClothesList from "./ClothesList";
import Basket from "./Basket";
import {addList, addToBasket, openOrCloseBasket} from "./redux/actions/action";
import {connect} from "react-redux";
import NotificationBadge from 'react-notification-badge';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const {isMobile} = this.props
        if (isMobile) {
            document.getElementsByClassName('shoppingCartFilter')[0].style.display= ''
        }
    }

    render() {
        const {isBasketTime, openOrCloseBasket, isMobile, counterMobile, filteredList} = this.props
        return (
            <div className="shoppingContainer">{
                !isMobile && filteredList.length !== 0 &&
                <div className='sizesWrapper'>
                    <div className="sizesContainer">
                        < ChooseSize/>
                        <div className='goToBasketWrapper'>
                            <div className="notficationSymbol"><NotificationBadge count={counterMobile}
                            /></div>
                            <button className="goToBasket" onClick={() => {
                                openOrCloseBasket(true)}}>Open basket
                            </button>
                        </div>
                    </div>
                </div>
            }
                    <ClothesList isMobile={isMobile}/>
                {isBasketTime &&
                <div>
                    <Basket isMobile={isMobile}/>
                </div>}
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
        isBasketTime: state.openOrCloseBasket.isBasketTime,
        counterMobile: state.counterMobile.counterMobile,
        filteredList: state && state.clothesListReducers ? state.clothesListReducers.filteredList : [],
    }
}

export const mapDispatchToProps =  (dispatch) => {
    return {
        addList: (val) => dispatch(addList(val)),
        addToBasket: (shirt) => dispatch(addToBasket(shirt)),
        openOrCloseBasket: (open) => dispatch(openOrCloseBasket(open))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);