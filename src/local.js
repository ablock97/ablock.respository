// getTodayPrice()
    localStorage.setItem('todayprice', JSON.stringify(f));
    this.setState({ todayprice: f });

    // getYesterdayPrice()
    localStorage.setItem('yesterdayprice', JSON.stringify(f));
    this.setState({ yesterdayprice: f });

    // getTwoDaysPrice()
    localStorage.setItem('twodaysprice', JSON.stringify(f));
    this.setState({ twodaysprice: f });

    // getThreeDaysPrice()
    localStorage.setItem('threedaysprice', JSON.stringify(f));
    this.setState({ threedaysprice: f });

    // getFourDaysPrice()
    localStorage.setItem('fourdaysprice', JSON.stringify(f));
    this.setState({ fourdaysprice: f });