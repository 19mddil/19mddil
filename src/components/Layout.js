
import React from 'react';
import { useEffect } from "react";
import Navigation from './Navigation';

const Layout = ({ title = 'Title', className, children }) => {
    useEffect(() => {
        document.title = title;
    }, [])
    return (
        <div className="row">
            <div className="col-sm-3">
                <Navigation />
            </div>
            <div className="col-sm-9">
                <div className={className}>
                    <div style={{
                        padding: '3%',
                        borderLeft: '1px dashed grey',
                    }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;