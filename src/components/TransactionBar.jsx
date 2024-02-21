import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function TransactionBar() {
    return (
        <>
            <Card>
                <Card class='transaction-card' sx={{ minWidth: 200, maxHeight: 100 }}>
                    <CardContent>
                        <Typography id='number' variant="h5" component="div">
                            Transaction 1
                        </Typography>
                        <span>
                            <Typography class='transaction-info'>
                                User1
                            </Typography>
                            <Typography id='percent'>
                                $54.34
                            </Typography>
                        </span>
                    </CardContent>
                </Card>
                <Card class='transaction-card' sx={{ minWidth: 200, maxHeight: 100 }}>
                    <CardContent>
                        <Typography id='number' variant="h5" component="div">
                            Transaction 2
                        </Typography>
                        <span>
                            <Typography class='transaction-info'>
                                User2
                            </Typography>
                            <Typography id='percent'>
                                $678.32
                            </Typography>
                        </span>
                    </CardContent>
                </Card>
                <Card class='transaction-card' sx={{ minWidth: 200, maxHeight: 100 }}>
                    <CardContent>
                        <Typography id='number' variant="h5" component="div">
                            Transaction 3
                        </Typography>
                        <span>
                            <Typography class='transaction-info'>
                                User3
                            </Typography>
                            <Typography id='percent'>
                                $45.32
                            </Typography>
                        </span>
                    </CardContent>
                </Card>
                <Card class='transaction-card' sx={{ minWidth: 200, maxHeight: 100 }}>
                    <CardContent>
                        <Typography id='number' variant="h5" component="div">
                            Transaction 4
                        </Typography>
                        <span>
                            <Typography class='transaction-info'>
                                User4
                            </Typography>
                            <Typography id='percent'>
                                $562.23
                            </Typography>
                        </span>
                    </CardContent>
                </Card>
            </Card>
        </>
    )
}