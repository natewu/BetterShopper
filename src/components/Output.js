import "./Output.css";
import React, { Component } from 'react'
import $ from 'jquery';

export class Output extends Component {
    /* componentDidMount() {
       this.getResults();
    }
    getResults(){
        var query = this.props.data;
        console.log(query);
        let result = ' '

        var API_KEY = '93F8D851D4D64EE88806C1895ACC8918'

        var url = 'https://api.scaleserp.com/search?api_key=' + API_KEY + '&q=' + query + '&shopping_buy_on_google=false&shopping_price_min=100&shopping_condition=used&include_html=false&google_domain=google.ca&location=Canada&url=&gl=ca&hl=en&search_type=shopping&sort_by=review_score&page=1&output=json'

        console.log(url)

        $.get(url, function(data) {
            $("#result").html('')
            console.log(data)
            
            data.shopping_results.forEach(res => {
                result = `
                <h1>${res.title}</h1><br><h2>$${res.price}</h2><br><a target ="_blank" href="${res.link}"${res.url}</a>
                <p>${res.snippet}</p>
                <img src = ${res.image}></img>

                `
                $("#result").append(result)
            })
        })
    } */
    getResults(){
        var query = this.props.search;
        console.log(query);
        let result = '';
        var API_KEY = '28DDF1C58C694BA7810D6BB13D3C4B99';
        var url = 'https://api.scaleserp.com/search?api_key=' + API_KEY + '&q=' + query + '&shopping_buy_on_google=false&shopping_price_min=100&shopping_condition=used&include_html=false&google_domain=google.ca&location=Canada&url=&gl=ca&hl=en&search_type=shopping&sort_by=review_score&page=1&output=json';
        $.get(url, function(data) {
            $("#result").html('')
            console.log(data)
            
            data.shopping_results.forEach(res => {
                result = `
                <div style="text-decoration:none; border: 1px solid #3f51b5; background-color: rgb(245, 245, 245); width:80%; height:100%; border-radius:5px; margin: 50px auto 50px auto; display:grid; grid-template-rows: 2.5fr 0.6fr 0.5fr 0.5fr; padding-bottom: 10px; grid-template-columns: 1fr 5fr 1fr;">
                    <a target ="_blank" style="text-decoration: none!important; grid-column:2; margin: auto;" href="${res.link}"><img src=${res.image} style="grid-column:2; margin: auto;"></img></a>
                    <h3 style="grid-column:2;"><a target ="_blank" style="text-decoration: none!important; color: black; font-weight:300;"href="${res.link}">${res.title}</a></h3>
                    <h4 style="grid-column:2; font-weight:500;">$${res.price}</h4>
                    <p style="grid-column:2; font-weight:300;">${res.snippet}</p>
                </div>
                `
                $("#result").append(result)
            })
        })

    }
    render() {
        return (
            <div>
                {this.getResults()}
                <div className="output">
                    <h3 style={{fontWeight:"400", paddingTop:"10px"}}>Products</h3>
                    <div id="result"></div>
                </div>
            </div>
        )
    }
}

export default Output
