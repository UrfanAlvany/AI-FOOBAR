import React from 'react';
import Sidebar from "@/components/shared/Sidebar";

const Layout = ({ children }: {children: React.ReactNode }) => {
    return (
        <main className="root">
            <Sidebar />
            <div className="root-container">
                    {children}
            </div>
        </main>
    );
};

export default Layout;
