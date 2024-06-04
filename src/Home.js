import React,{useEffect,useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Home=()=>{
    const [Data,setData]=useState({
        Company:'',
        Description:''
    })
    const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        axios.get('https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Home Data: ',res.data.ad)
                let companyData=res.data.dates[0];
                setData({Home:companyData.games[5].teams.home.team.name,Away:companyData.games[5].teams.away.team.name})
                console.log('Colors Data: ',res.data.data)
                setColorsData(res.data.data)
                let matchUp = []; 
                matchUp = res.data.dates[0].games.map(post => {
                    <div key={post.id}>
                        <h3>Home: {post.teams.home.team.name}</h3>
                        <h3>Away: {post.teams.away.team.name}</h3>
                    </div>
                })
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return ( < div > {
        items.length !== 0 ? items.map((item) => {
          return <p > {
            item.title
          } < /p>
        }) : < LoadingComponent / >
      }
    
      </div>
    );