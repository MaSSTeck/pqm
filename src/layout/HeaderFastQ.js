import React, { Component } from "react";
import Head from "next/head";
import MenuBar from './MenuBar'
import 'semantic-ui-css/semantic.min.css'

const HeaderFastQ =  (props)=> {
    const {titleText} = props;

    return(
        <div>
            <Head>
                <title>FQ | {titleText}</title>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta> */}
            </Head>
            <MenuBar/>
        </div>
    );
}

export default HeaderFastQ;