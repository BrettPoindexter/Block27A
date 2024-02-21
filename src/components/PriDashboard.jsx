import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { LineChart } from '@mui/x-charts/LineChart'
import Heading from './Heading';
import TransactionBar from './TransactionBar';

export default function PriDashboard() {
    const sales = Math.ceil(Math.random() * 1000000);
    const percentSales = Math.ceil(Math.random() * 100);
    const cust = Math.ceil(Math.random() * 500);
    const percentCust = Math.ceil(Math.random() * 100);
    const traffic = Math.ceil(Math.random() * 10000);
    const percentTraffic = Math.ceil(Math.random() * 100);
    const revenue = Math.ceil(Math.random() * 1000000);
    const percentRevenue = Math.ceil(Math.random() * 100);
    return (
        <>
            <Heading />
            <span className='card-container'>
                <Card class='sec-card' sx={{ minWidth: 200 }}>
                    <CardContent>
                        <TrendingUpIcon />
                        <Typography id='number' variant="h5" component="div">
                            {sales}
                        </Typography>
                        <span>
                            <Typography class='sec-info'>
                                Sales obtained
                            </Typography>
                            <Typography id='percent'>
                                + %{percentSales}
                            </Typography>
                        </span>
                    </CardContent>
                </Card>
                <Card class='sec-card' sx={{ minWidth: 200 }}>
                    <CardContent>
                        <PersonAddIcon />
                        <Typography id='number' variant="h5" component="div">
                            {cust}
                        </Typography>
                        <span>
                            <Typography class='sec-info'>
                                New Customers
                            </Typography>
                            <Typography id='percent'>
                                + %{percentCust}
                            </Typography>
                        </span>
                    </CardContent>
                </Card>
                <Card class='sec-card' sx={{ minWidth: 200 }}>
                    <CardContent>
                        <TrafficIcon />
                        <Typography id='number' variant="h5" component="div">
                            {traffic}
                        </Typography>
                        <span>
                            <Typography class='sec-info'>
                                Traffic Recieved
                            </Typography>
                            <Typography id='percent'>
                                + %{percentTraffic}
                            </Typography>
                        </span>
                    </CardContent>
                </Card>
                <Card class='chart' sx={{ minWidth: 200 }}>
                    <CardContent>
                        <AttachMoneyIcon />
                        <Typography id='number' variant="h5" component="div">
                            ${revenue}
                        </Typography>
                        <span>
                            <Typography class='sec-info'>
                                Revenue Generated
                            </Typography>
                            <Typography id='percent'>
                                + %{percentRevenue}
                            </Typography>
                        </span>
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={600}
                            height={300}
                        />
                    </CardContent>
                </Card>
                <TransactionBar />
            </span>
        </>
    )
}