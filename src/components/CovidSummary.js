import React from 'react';
import Card from './Card';
import NumberFormat from 'react-number-format';

const CovidSummary = ({ totalConfirmed, totalRecovered, totalDeaths, country }) => {
    return (
        <div>
            <div>
                <h1 style={{ textTransform: "uppercase" }}>
                    {country === '' ? 'World COVID-19 Report' : country}
                </h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card>
                        <span>Total Confirmed</span><br />
                        <span>
                            {<NumberFormat
                                value={totalConfirmed}
                                displayType="text"
                                thousandSeparator={true}
                            />}
                        </span>
                    </Card>
                    <Card>
                        <span>Total Recovered</span><br />
                        {<NumberFormat
                            value={totalRecovered}
                            displayType="text"
                            thousandSeparator={true}
                        />}
                    </Card>
                    <Card>
                        <span>Total Deaths</span><br />
                        {<NumberFormat
                            value={totalDeaths}
                            displayType="text"
                            thousandSeparator={true}
                        />}
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CovidSummary