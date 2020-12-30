import React from "react";
import {connect} from 'react-redux'
import {addList, addToBasket, basketCounter, openOrCloseBasket, openOrClosePayment} from "./redux/actions/action";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStroopwafel, faCat, faWindowClose, faShekelSign} from '@fortawesome/free-solid-svg-icons'
import logo1 from "./images_for_project/download.jpeg"
import logo2 from "./images_for_project/RENUAR416G.jpg"
import logo3 from "./images_for_project/7770097.01.0100_c5c12e9.jpg"
import logo4 from "./images_for_project/f_1428_12513_12533_13520121482293181.jpg"
import logo5 from "./images_for_project/4fdd2948-7ec7-442a-ac27-68634efa6f8a.jpg"
import Button from '@material-ui/core/Button';


export class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: [logo5, logo4, logo3, logo2, logo1],}
    }

    deleteShirtsFromCounter = (quantity) => {
        const {basketCounter} = this.props;
        if (!quantity) {
            basketCounter('REMOVE_FROM_COUNTER');
            return
        }
        while (quantity) {
            basketCounter('REMOVE_FROM_COUNTER');
            quantity--;
        }
        return
    }

    componentDidMount() {
        const {isMobile} = this.props
        if (isMobile) {
            document.getElementsByClassName('shoppingCartFilter')[0].style.display = 'none'
        }
    }

    render() {
        library.add(faCat, faStroopwafel, faWindowClose, faShekelSign)
        const {openOrCloseBasket, myList, addToBasket, isMobile, openOrClosePayment} = this.props;
        const {images} = this.state;
        return (
            <div className="basket">
                {!isMobile &&
                <div className="closeDrawer" onClick={() => {
                    openOrCloseBasket(false);
                }}>
                    <FontAwesomeIcon icon="window-close"/>
                </div>
                }
                <div className="basketList">

                    {myList && myList.map((shirt, index) => {
                        return <div className="shirtInBasket" key={index}>
                            <div className="shirtDetails">
                                <div className="titleShirtBasket">
                                    {shirt.quantity ? <span>{`${shirt.quantity} X `}</span> : '1 X '}
                                    {shirt.title}
                                </div>
                                <div className="descriptionShirt">{shirt.description}</div>
                                <div className="sizeOfShirt">Size: {shirt.chosenSize}</div>
                                <div className="priceShirt"><span>{shirt.price}</span><span>{shirt.currencyId}</span>
                                    <div><img alt="description" className="imgBasket"
                                              src={images[shirt.imageIndex]}/></div>
                                </div>
                                <span className="deleteShirt" onClick={() => {
                                    addToBasket(index, 'DELETE_SHIRT');
                                    this.deleteShirtsFromCounter(shirt.quantity);
                                }}>
                                <FontAwesomeIcon icon="window-close"/></span>
                            </div>

                        </div>
                    })
                    }
                </div>
                {myList.length > 0 && <div className="totalAmount">
                    <span>Total Amount : {myList.reduce((acc, currentVal) => {
                        if (currentVal.quantity) {
                            return (currentVal.quantity * currentVal.price) + acc
                        }
                        else {
                            return currentVal.price + acc
                        }
                    }, 0)}</span><span className="shekelSign"><i className="fas fa-shekel-sign"></i></span>
                </div>}

                <div className='backToTopBasket'>
                    {isMobile && <Button variant="contained" style={{borderRadius: 'unset'}} onClick={() => {
                        openOrCloseBasket(false);
                        if (isMobile) {
                            document.getElementsByClassName('shoppingCartFilter')[0].style.display = ''
                        }
                    }}>Back
                        To Shop</Button>
                    }

                    {myList.length > 0 &&
                    <Button variant="contained" style={{borderRadius: 'unset'}} className='payNowBtn' onClick={() => {
                        openOrClosePayment(true)
                        openOrCloseBasket(false)
                    }
                    }>Pay Now</Button>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isBasketTime: state.openOrCloseBasket.isBasketTime,
        myList: state.addToBasket.myList,
        filteredList: state && state.clothesListReducers ? state.clothesListReducers.filteredList : [],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addList: (val) => dispatch(addList(val)),
        addToBasket: (shirt, action) => dispatch(addToBasket(shirt, action)),
        openOrCloseBasket: (close) => dispatch(openOrCloseBasket(close)),
        basketCounter: action => dispatch(basketCounter(action)),
        openOrClosePayment: openOrClose => dispatch(openOrClosePayment(openOrClose))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);