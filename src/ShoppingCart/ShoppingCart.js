import React, {Component} from 'react';
import './ShoppingCart.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./paymentShoping/Checkout";
import {addList, addToBasket, basketCounter, openOrCloseBasket} from "./redux/actions/action";
import {connect} from "react-redux";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faFilter, faShoppingCart, faCat} from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import {openOrClosePayment} from "./redux/actions/action";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            values: {}
        }
    }

    updateDimensions = (e) => {
        e.target.innerWidth < 766 ? this.setState({isMobile: true}) : this.setState({isMobile: false})
    }

    componentDidMount() {
        window.innerWidth < 766 ? this.setState({isMobile: true}) : this.setState({isMobile: false})
        window.addEventListener("resize", (e) => this.updateDimensions(e));
    }

    handleChange = (field, event) => {
        const {values} = this.state
        values[field] = event.target.value;
        this.setState({values})
    }

    finishOrder = () => {
        const {addToBasket, basketCounter} = this.props;
        addToBasket(true, 'DELETE_LIST');
        basketCounter('EMPTY_COUNTER')
        this.setState({values: {}});
}

    render() {
        library.add(faShoppingCart, faFilter, faCat)
        const {myList, paymentOpen, openOrClosePayment} = this.props
        const {isMobile, values} = this.state
        return (
            <div className="App-Shopping-Cart">
                {!paymentOpen ? <div>
                        <Header isMobile={isMobile}/>
                        <Home isMobile={isMobile}/>
                    </div> :
                    <div>
                        <Checkout myList={myList} handleChange={this.handleChange} values={values} finishOrder={this.finishOrder}/>
                        <div className='backToShopBtnHomePage'><Button
                            variant="contained"
                            color="primary"
                            onClick={() => openOrClosePayment(false)}
                            style={{backgroundColor:'#039be5'}}
                            className={'backToShopBtnHomePage'}
                        >back to shop</Button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isBasketTime: state.openOrCloseBasket.isBasketTime,
        myList: state.addToBasket.myList,
        paymentOpen: state.openOrClosePayment.paymentOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addList: (val) => dispatch(addList(val)),
        addToBasket: (must, shirt) => dispatch(addToBasket(true, shirt)),
        openOrCloseBasket: (open) => dispatch(openOrCloseBasket(open)),
        openOrClosePayment: openOrClose => dispatch(openOrClosePayment(openOrClose)),
        basketCounter: action => dispatch(basketCounter(action)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);