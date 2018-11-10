import React, { Component } from "react";
import Head from "next/head";
import MenuBar from './MenuBar'
import 'semantic-ui-css/semantic.min.css'

const HeaderFastQ =  (props)=> {
    const {titleText} = props;

    return(
        <div>
            <Head>
                <title>FastQ | {titleText}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"></meta>
            </Head>
            <MenuBar/>
        </div>
    );
}

export default HeaderFastQ;