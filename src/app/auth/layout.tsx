import React, { ReactNode } from 'react'

function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
            AuthLayout
        </div>
    )
}

export default AuthLayout