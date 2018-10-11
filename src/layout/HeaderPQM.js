import React, { Component } from "react";
import Head from "next/head";
import MenuBar from './MenuBar'

const HeaderPQM =  (props)=> {
    const {titleText} = props;

    return(
        <div>
            <Head>
                <title>PQM | {titleText}</title>
                <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
                />
            </Head>
            <MenuBar/>

        </div>
    );
}

export default HeaderPQM;