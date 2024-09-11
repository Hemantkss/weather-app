import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({ info }) {
    const Dusty_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd3JhdGhlcnxlbnwwfHwwfHx8Mg%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1629734805028-73ada19afb3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxob3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return (
        <div className="infoBox" >           
            <div className='card-container'>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        sx={{ height: 150 }}
                        image= {
                            info.humidity > 70
                            ? RAIN_URL 
                            : info.temperature > 25 
                            ? HOT_URL 
                            : info.temperature < 15  || info.humidity < 50
                            ? COLD_URL
                            : Dusty_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 70 
                                ? <ThunderstormIcon /> 
                                : info.temperature > 25 
                                ? <WbSunnyIcon />
                                : <AcUnitIcon  />
                            }
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p><b>Temperature:</b> {info.temperature}&deg;C</p>
                            <p><b>Humidity:</b> {info.humidity}</p>
                            <p><b>Max Temp:</b> {info.tempMax}&deg;C</p>
                            <p><b>Min Temp:</b> {info.tempMin}&deg;C</p>
                            <p>The Weather can Be Describe as <b>{info.weather}</b> & Feels Like <b>{info.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
            
        </div>
    )
};



