class Today extends Component {
        // Adds a class constructor that assigns the initial state values:
        constructor () {
            super();
            this.state = {
                btcprice: '',
                ltcprice: '',
                ethprice: ''
            };
        }
        // This is called when an instance of a component is being created and inserted into the DOM.
        componentWillMount () {
            axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
        .then(response => {
            this.setState({ btcprice: response.data.BTC.USD });
            localStorage.setItem('BTC', response.data.BTC.USD);

            this.setState({ ethprice: response.data.ETH.USD });
            localStorage.setItem('ETH', response.data.ETH.USD);

            this.setState({ ltcprice: response.data.LTC.USD });
            localStorage.setItem('LTC', response.data.LTC.USD);
        })
        .catch(error => {
            console.log(error)
        })
        // The render method contains the JSX code which will be compiled to HTML.
        render() {
            return (
                <div className="today--section container">
                    <h2>Current Price</h2>
                    <div className="columns today--section__box">
                        <div className="column btc--section">
                            <h5>${this.state.btcprice}</h5>
                            <p>1 BTC</p>
                        </div>
                        <div className="column eth--section">
                            <h5>${this.state.ethprice}</h5>
                            <p>1 ETH</p>
                        </div>
                        <div className="column ltc--section">
                            <h5>${this.state.ltcprice}</h5>
                            <p>1 LTC</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    componentDidMount () {
        if (!navigator.onLine) {
            this.setState({ todayprice: JSON.parse(localStorage.getItem('todayprice')) });
            this.setState({ yesterdayprice: JSON.parse(localStorage.getItem('yesterdayprice')) });
            this.setState({ twodaysprice: JSON.parse(localStorage.getItem('twodaysprice')) });
            this.setState({ threedaysprice: JSON.parse(localStorage.getItem('threedaysprice')) });
            this.setState({ fourdaysprice: JSON.parse(localStorage.getItem('fourdaysprice')) });
        }
    }

    export default Today;